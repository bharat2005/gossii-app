import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteDoc, doc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"


export const useLike = (postId) =>{
    const queryClient = useQueryClient()
    const {user} = useAuth()

    return useMutation({
        mutationFn:async({liked})=>{
            const postDocRef = doc(db, 'posts', postId, 'likes', user?.uid)
            const userDocRef = doc(db, 'users', user?.uid, 'likedPosts', postId )

            if(liked){
                await Promise.all([
                deleteDoc(postDocRef),
                deleteDoc(userDocRef)
                ])
            } else {
                await Promise.all([
                    setDoc(postDocRef, {
                        uid: user?.uid,
                        createdAt: serverTimestamp()
                    }),

                    setDoc(userDocRef, {
                        postId,
                        createdAt:serverTimestamp()
                    })
                ])
            }
        },
        onMutate:async({liked})=>{
            await queryClient.cancelQueries(['likes', postId])
            await queryClient.cancelQueries(['mylikes', user?.uid])
            
            const prevCatched = queryClient.getQueryData(['likes', postId])
            const prevCatched2 = queryClient.getQueryData(['mylikes', user?.uid])

            queryClient.setQueryData(['likes', postId], prev => {
                if(!prev) return

                return {
                    likeByUser: !liked,
                    count: liked ? prev.count - 1 : prev.count + 1
                }
            })

            queryClient.setQueryData(['mylikes', user?.uid], prev => {
                if(!prev) return

                return prev.filter(item => item.postId !== postId)
            })

            return {
                prevCatched,
                prevCatched2

            }
        },
        onError:(error, vars, context)=>{
            queryClient.setQueryData(['likes', postId],context.prevCatched )
               queryClient.setQueryData(['mylikes', user?.uid],context.prevCatched2 )
        },
                onSuccess:()=>{ 
            queryClient.invalidateQueries(['likes', postId])
            queryClient.invalidateQueries(['mylikes', user?.uid])


        },
    })
}