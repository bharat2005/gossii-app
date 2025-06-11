import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../../contexts/AuthContextProvider"
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../../services/firebase"

export const fetchMyLikes = () =>{
    const {user} = useAuth()

    return useQuery({
        queryKey:['mylikes', user?.uid],
        queryFn:async()=>{
            const res = await getDocs(query(collection(db, 'users', user?.uid, 'likedPosts'), orderBy('createdAt', 'desc')))
            const postIds = res.docs.map(doc => doc.id)

            const data = await Promise.all(postIds.map(async(item)=>{
                const res = await getDoc(doc(db,'posts', item))
                return res.data()
            }))

            return data
        },
        enabled:!!user?.uid

    })
}