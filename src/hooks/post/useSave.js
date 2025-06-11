import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteDoc, doc, queryEqual, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"


export const useSave = (postId) =>{
    const queryClient  = useQueryClient() 
    const {user} = useAuth()

    return useMutation({
        mutationFn:async({saved})=>{
            const docRef = doc(db,'users', user?.uid, 'savedPosts', postId)
            if(saved){
               await deleteDoc(docRef)
            } else {
                await setDoc(docRef,{
                    postId,
                    createdAt:serverTimestamp()
                })
            }
        },
        onMutate:async({saved})=>{
            await queryClient.cancelQueries(['save', postId])
            await queryClient.cancelQueries(['mysaves', user?.uid])

            const prevCatched =queryClient.getQueryData(['save', postId])
             const prevCatched2 =queryClient.getQueryData(['mysaves', user?.uid])

            queryClient.setQueryData(['save', postId], prev => !prev)

            queryClient.setQueryData(['mysaves', user?.uid], prev => {
                if(!prev) return
                return prev.filter(item => item.postId !== postId)
            })

            return {
                prevCatched,
                prevCatched2
            }
        },
        onError:(error, vars, context)=>{
            queryClient.setQueryData(['save', postId], context.prevCatched )
            queryClient.setQueryData(['mysaves', user?.uid], context.prevCatched2 )
        },
        onSuccess:()=>{
            queryClient.invalidateQueries(['save', postId])
            queryClient.invalidateQueries(['mysaves', user?.uid])
        }
    })
}