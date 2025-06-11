import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../contexts/AuthContextProvider'
import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase'

export const useBlockedUsers = () => {
    const {user} = useAuth()
    return useQuery({
        queryKey:['blockedList', user?.uid],
        queryFn:async()=>{
        const res = await getDocs(collection(db, 'users', user?.uid, 'blockedUsers'))
        const data = res.docs.map(doc => doc.id)
        return data
        },
        enabled:!!(user?.uid)
    })
}