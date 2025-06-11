import { useQuery } from "@tanstack/react-query"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"


export const fetchUserPostCount = (userUid) =>{
    return useQuery({
        queryKey:['postCount', userUid],
        queryFn:async()=>{
            const res = await getDocs(query(collection(db, 'posts'), where('uid', '==', userUid)))
            return res.size
        },
        enabled:!!userUid
    })
}