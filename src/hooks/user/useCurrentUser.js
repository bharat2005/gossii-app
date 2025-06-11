import { useMutation, useQuery } from '@tanstack/react-query'
import { useAuth } from '../../contexts/AuthContextProvider'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'

export const useCurrentUser = () => {
    const {user} = useAuth()
    return useQuery({
        queryKey:['user' ,user?.uid],
        queryFn:async()=>{
            const res = await getDoc(doc(db, 'users', user?.uid))
            return res.data()
        },
        enabled:!!user?.uid
    })
}