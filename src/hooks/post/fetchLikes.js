import { useQuery } from "@tanstack/react-query"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"

export const fetchLikes = (postId) =>{
    const {user} = useAuth()

    return useQuery({
        queryKey:['likes', postId],
        queryFn:async()=>{
            const res = await getDocs(collection(db, 'posts', postId, 'likes' ))
            const count = res.size
            const likeByUser = res.docs.some(item => item.data().uid === user?.uid)

            return{
                count,
                likeByUser,
            }
        },
        enabled:!!(user?.uid)
    })
}