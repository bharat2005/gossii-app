import { useQueries, useQuery } from "@tanstack/react-query"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"


export const fetchUserPosts = (userUid) =>{
    return useQuery({
        queryKey:['userPosts', userUid],
        queryFn:async()=>{
            const q = query(collection(db, 'posts'), where('uid', '==', userUid), orderBy('createdAt', 'desc'))
            const res = await getDocs(q)

            const data = res.docs.map(doc => doc.data())
            return data
        }
    })
}