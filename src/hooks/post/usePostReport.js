import { useMutation } from "@tanstack/react-query"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "../../services/firebase"
import uuid from 'react-native-uuid'
import { useAuth } from "../../contexts/AuthContextProvider"

export const usePostReport = () => {
    const {user} = useAuth()
    return useMutation({
        mutationFn:async({userUid, selectedOption, textReason})=>{
            const id = uuid.v4()
            const docRef = doc(db, 'reports', id )
            await setDoc(docRef, {
                reportId:id, 
                reportedBy: user?.uid,
                type:'post',
                targetUid: userUid,
                selectedOption,
                textReason,
                createdAt:serverTimestamp()
            })
        }
    })
}