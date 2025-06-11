import { useQuery } from "@tanstack/react-query"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"


export const fetchPostUser = (userUid) =>{
    return useQuery({
        queryKey:['postUser', userUid],
        queryFn:async()=>{
            const res = await getDoc(doc(db, 'users', userUid))
            return res.data()
        },
        enabled: !!(userUid)
    })
}