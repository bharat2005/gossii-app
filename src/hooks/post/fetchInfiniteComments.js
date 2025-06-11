import { useInfiniteQuery } from "@tanstack/react-query"
import { collection, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore"
import { db } from "../../services/firebase"


export const fetchInfiniteCommnets = (postId) => {
    return useInfiniteQuery({
        queryKey:['comments', postId],
        queryFn:async({pageParam})=> {
            const q = pageParam ?
             query(collection(db, 'posts', postId, 'comments'), orderBy('createdAt', 'desc'),  startAfter(pageParam), limit(5))
            :  query(collection(db, 'posts', postId, 'comments'), orderBy('createdAt', 'desc'), limit(5))

            const res = await getDocs(q)
            const lastCommentRef = res.docs[res.docs.length - 1]

            const data = res.docs.map(doc => doc.data())

            return {
                data,
                lastCommentRef
            }
        },
        getNextPageParam:(lastPageParam) => lastPageParam.lastCommentRef
    })
}