import { useQuery } from "@tanstack/react-query"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"


export const fetchUserMedia = (userUid) =>{
    return useQuery({
        queryKey:['userMedia', userUid],
        queryFn:async()=>{
            const q = query(collection(db, 'posts'), where('uid', '==', userUid), orderBy('createdAt', 'desc'))
            const res = await getDocs(q)

            const data = res.docs.filter(doc => doc.data()?.mediaType === 'image').map( doc => doc.data().mediaUri)

            return data
        },
        enabled:!!userUid
    })
}