import { useQueries, useQuery, useQueryErrorResetBoundary } from "@tanstack/react-query"
import { useAuth } from "../../contexts/AuthContextProvider"
import { collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"

export const fetchMyMedia = () =>{
    const {user} = useAuth()

    return useQuery({
        queryKey:['mymedia', user?.uid],
        queryFn:async()=>{
            const q = query(collection(db, 'posts'), where('uid', '==', user?.uid), orderBy('createdAt', 'desc'))
            const res = await getDocs(q)

            const data = res.docs.filter(doc => doc.data().mediaType === 'image').map(doc => doc.data().mediaUri)
            return data
        },
        enabled:!!user?.uid
    })
}