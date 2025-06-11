import { useQuery } from "@tanstack/react-query"
import { collection, getDoc, getDocs } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"


export const fetchReactions = (postId) => {
    const {user} = useAuth()

    return useQuery({
        queryKey:['reactions', postId],
        queryFn:async()=> {
            const res = await getDocs(collection(db, 'posts', postId, 'reactions'))
            const count = {}
            let userReation = null

            res.docs.map(doc => {
                const {uid, emojiId} = doc.data()
                count[emojiId] = (count[emojiId] || 0) + 1
                if(uid === user?.uid){
                    userReation = emojiId
                }
            })

            return {
                count,
                userReation
            }
        }
    })
}