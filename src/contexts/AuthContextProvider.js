import { View, Text, Alert } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth, db, storage} from '../services/firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { useRouter } from 'expo-router'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'


const Authcontext = createContext()



const AuthContextProvider = ({children}) => {
  const router = useRouter()
  const [user, setUser] = useState(null)

useEffect(()=> {
  const unsub = onAuthStateChanged(auth, async(u)=> {
    setUser(u)
    if(u){
      const res = await getDoc(doc(db, 'users', u?.uid))
      if(res.data().hasCompletedOnboarding){
        router.replace('/(main)/home')
      }
      else{
        router.replace('/(auth)/profile-build')
      }

    } else {
      router.replace('/(auth)/start')
    }
 }
)

  return ()=> unsub;
}, [])


const register = async(email, password) => {
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password)

    await setDoc(doc(db, 'users',res?.user?.uid ),{
      uid:res?.user?.uid,
      hasCompletedOnboarding:false
    })

  } catch(err){
    console.log("Error from register funtion", err.message)
    Alert.alert("Error", err.message)
  }
  
}

const login = async(email, password) => {
  try{
    await signInWithEmailAndPassword(auth, email, password)

  } catch(err){
    console.log("Error from login funtion", err.message)
    Alert.alert("Error", err.message)
  }
  
}

const imageToUri = async(imageUri) => {
  try{
    const res = await fetch(imageUri)
    const blob = await res.blob()

    const filename = imageUri.split('/').pop()
    const storageRef = ref(storage, `userProfilePics/${filename}`)
    
    await uploadBytes(storageRef, blob)

    return await getDownloadURL(storageRef)
    

  } catch(err){
    console.log('Error from imageToUri function', err.message)
    Alert.alert("Error", err.message)
  }
}

const createAccount = async(username, imageUri) => {
  try{
    const uri = await imageToUri(imageUri)

    await updateDoc(doc(db, 'users', user?.uid), {
      username,
      hasCompletedOnboarding:true,
      profilePicUri:uri,
    })

    router.replace('/(main)/home')

  } catch(err){
    console.log("Error from createAccount funtion", err.message)
    Alert.alert("Error", err.message)
  }

}

const logout = async() => {
  try{
    signOut(auth)

  } catch(err){
    console.log("Error from logout funtion", err.message)
    Alert.alert('Error', err.message)
  }
}



  return (
<Authcontext.Provider value={{user, register, createAccount, login, logout, imageToUri}}>
    {children}
</Authcontext.Provider>
  )
}

export default AuthContextProvider

export const useAuth = () => useContext(Authcontext)