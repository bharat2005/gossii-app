import { useMutation } from "@tanstack/react-query"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import uuid from 'react-native-uuid'
import { useAuth } from "../../contexts/AuthContextProvider"

export const useReportComment = () =>{
    const {user} = useAuth()
   return useMutation({
    mutationFn:async({userUid})=>{
        const id = uuid.v4()
        await setDoc(doc(db, 'reports', id),{
            reportId: id,
            reportedBy:user?.uid,
            type:'comment',
            targetUid:userUid,
            createdAt:serverTimestamp()
        })
    }
    })
}