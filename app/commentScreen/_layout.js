import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo'

const CommentScreenLayout = () => {
  return (
<Stack 
screenOptions={{
  title:'Post',
  headerTitleStyle: {fontFamily:'bold'},
   headerTitleAlign:'center', 
    headerLeft:() => <Entypo onPress={()=> router.back()} name="chevron-left" size={32} color="gray" /> 
      }}
         />
  )
}

export default CommentScreenLayout