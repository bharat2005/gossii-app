import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useAuth } from "../../contexts/AuthContextProvider"

export const useBlockUser = () =>{
    const queryclient = useQueryClient()
    const {user} = useAuth()
    return useMutation({
        mutationFn:async({userUid})=>{
            const docRef = doc(db, 'users', user?.uid, 'blockedUsers', userUid)
            await setDoc(docRef,{
                blockedUid:userUid,
                blockedAt:serverTimestamp()
            })
        },
        onSuccess:async()=>{
          await  queryclient.invalidateQueries(['blockedList', user?.uid])
          queryclient.invalidateQueries(['posts'])
        }   
    })
}