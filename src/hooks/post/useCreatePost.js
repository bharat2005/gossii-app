import { useMutation } from "@tanstack/react-query"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import uuid from 'react-native-uuid'
import { useAuth } from "../../contexts/AuthContextProvider"

export const useCreatePost = () => {
    const {imageToUri} = useAuth()

    return useMutation({
        mutationFn:async({userData, text, mediaUri, mediaType})=>{
            const uri = await imageToUri(mediaUri)
            const postId = uuid.v4()
            const q = doc(db, 'posts', postId)
            await setDoc( q, {
                postId,
                uid:userData?.uid,
                text,
                username: userData?.username,
                profilePicUri : userData?.profilePicUri,
                mediaUri: uri,
                mediaType,
                createdAt:serverTimestamp()
            })

        }
    })
}