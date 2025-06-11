import { useQuery } from "@tanstack/react-query"
import { doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"


export const fetchSaves = (postId) =>{
    const {user} = useAuth()

    return useQuery({
        queryKey:['save', postId],
        queryFn:async() =>{
            const res = await getDoc(doc(db, 'users', user?.uid, 'savedPosts', postId))
            return res.exists()
        },
        enabled:!!(user?.uid)
    })
}