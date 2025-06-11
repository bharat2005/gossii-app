import { useQuery } from "@tanstack/react-query"
import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase"

export const fetchUserLikeCount = (userUid) =>{
    return useQuery({
        queryKey:['likeCount', userUid],
        queryFn:async()=> {
            const res = await getDocs(collection(db, 'users', userUid, 'likedPosts'))
            return res.size
        },
        enabled:!!userUid
    })
}