import { useInfiniteQuery } from "@tanstack/react-query"
import { collection, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore"
import { db } from "../../services/firebase"


export const fetchInfinitePosts = (blockedUsersList) => {
    return useInfiniteQuery({
        queryKey:['posts'],
        queryFn:async({pageParam})=> {
            const q = pageParam ?
            query(collection(db, 'posts'), orderBy('createdAt', 'desc'), startAfter(pageParam), limit(4))
        :   query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(4))

        const res = await getDocs(q)
        const data = res.docs.map(doc => doc.data()).filter(doc => !blockedUsersList.includes(doc.uid))
        const lastDocRef = res.docs[res.docs.length - 1]
        return {
            data,
            lastDocRef
        }
        },
        getNextPageParam:(lastPageParam)=> lastPageParam.lastDocRef,
        enabled: !!(blockedUsersList)
    })
}