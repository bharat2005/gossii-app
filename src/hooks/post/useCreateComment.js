import { useMutation, useQueryClient } from "@tanstack/react-query"
import { doc, query, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"
import uuid from 'react-native-uuid'


export const useCreateComment = (postId) => {
    const queryClient = useQueryClient()
    const {user} = useAuth()
    return useMutation({
        mutationFn:async({userData, text})=> {
            const id = uuid.v4()
            await setDoc(doc(db,'posts', postId, 'comments', id),{
                uid:user?.uid,
                commentId:id,
                username: userData?.username,
                text,
                profilePicUri: userData?.profilePicUri,
                createdAt: serverTimestamp()
            })
        },
        onMutate:async({userData, text})=> {
            await queryClient.cancelQueries(['comments', postId])

        const prevCatched = queryClient.getQueryData(['comments', postId])

        queryClient.setQueryData(['comments', postId], prev=>  {
            if(!prev) return
            
            const dummyComment = {
                uid:user?.uid,
                commentId:uuid.v4(),
                username: userData?.username,
                text,
                profilePicUri: userData?.profilePicUri,
                createdAt: new Date()
            }

            return {
                ...prev, 
                pages:[
                    {
                        ...prev.pages[0],
                        data:[
                            dummyComment
                            ,
                            ...prev.pages[0]?.data
                        ]
                    },
                    ...prev.pages.slice(1)
                ]
            }
        })

        return {
            prevCatched
        }
        },
        onError:(eror, vars, context)=>{
            queryClient.setQueryData(['comments', postId], context.prevCatched)
        },
        onSuccess:()=> {
            queryClient.invalidateQueries(['comments', postId])
        },
    })
}