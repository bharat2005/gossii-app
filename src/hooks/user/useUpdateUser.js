import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useAuth } from "../../contexts/AuthContextProvider"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

export const useUpdateUser = () =>{
    const queryClient = useQueryClient()
    const {imageToUri, user} = useAuth()
    return useMutation({
        mutationFn:async({username, profilePicUri, bio})=>{
            const uri = await imageToUri(profilePicUri)

            await setDoc(doc(db, 'users', user?.uid),{
                username,
                profilePicUri:uri,
                bio
            }, {merge:true})

        },
        onSuccess:()=>{
            queryClient.invalidateQueries(['user' ,user?.uid])
        }
    })
}