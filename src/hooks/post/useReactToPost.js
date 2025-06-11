import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { count, deleteDoc, doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"


export const useReactToPost = (postId) => {
    const queryClient = useQueryClient()
    const {user} = useAuth()
    return useMutation({
        mutationFn:async({emojiId})=> {
            const docRef = doc(db, 'posts', postId, 'reactions', user?.uid )
            const res = await getDoc(docRef)
            if(res.exists()){
                if(res.data().emojiId === emojiId){
                    deleteDoc(docRef)
                } else{
                    updateDoc(docRef, {
                        emojiId,
                        createdAt:serverTimestamp()
                    })
                }
            } else{
                await setDoc(docRef,{
                    emojiId,
                    uid:user?.uid,
                    createdAt:serverTimestamp()
                })
            }
        },
        onMutate:async({emojiId})=> {
            await queryClient.cancelQueries(['reactions', postId])

            const prevCatche = queryClient.getQueryData(['reactions', postId])

            queryClient.setQueryData(['reactions', postId], prev=> {
                if(!prev) return

                const updatedCount = prev.count
                const prevReaction = prev.userReation

                if(prevReaction === emojiId){
                    updatedCount[emojiId] = Math.max((updatedCount[emojiId] || 0) - 1, 0)
                    return {
                        userReation:null,
                        count: updatedCount
                    }
                } else{
                    if(prevReaction){
                        updatedCount[prevReaction] = Math.max((updatedCount[prevReaction] || 0) - 1, 0)
                    }
                    updatedCount[emojiId] = (updatedCount[emojiId] || 0) + 1
                    return {
                        userReation: emojiId,
                        count:updatedCount
                    }
                }
            })

            return {
                prevCatche
            }
        },
        onError:(error, vars, context)=> {
            queryClient.setQueryData(['reactions', postId],context.prevCatche )
        },
        onSuccess:()=> {
                queryClient.invalidateQueries(['reactions', postId])
        },
    })
}