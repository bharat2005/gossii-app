import { View, Text } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign'

const EditLayout = () => {
  return (
<Stack screenOptions={{title:'Edit Profile', 
  headerShadowVisible:false
,  headerTitleAlign:'center',
  headerLeft: ()=> <AntDesign onPress={()=> router.back()} name="close" size={24} color="gray" />,
  headerTitleStyle: {fontFamily:'bold'}

}} />
  )
}

export default EditLayout