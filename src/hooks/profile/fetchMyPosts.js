import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../../contexts/AuthContextProvider"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const fetchMyPosts = () =>{
    const {user} = useAuth()
    
    return useQuery({
        queryKey:['myposts', user?.uid],
        queryFn:async()=>{
            const q = query(collection(db, 'posts'), where('uid', '==', user?.uid), orderBy('createdAt', 'desc'))
            const res = await getDocs(q)

            const data = res.docs.map(doc => doc.data())
            return data
        },
        enabled:!!(user?.uid)
    })
}