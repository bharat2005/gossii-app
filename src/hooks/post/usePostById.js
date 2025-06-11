import { useQueries, useQuery } from "@tanstack/react-query"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"


export const usePostById = (postId)=>{
    return useQuery({
        queryKey:['post', postId],
        queryFn:async()=> {
            const docRef = doc(db, 'posts', postId )
            const res = await getDoc(docRef)

            return res.data()

        }
    })
}