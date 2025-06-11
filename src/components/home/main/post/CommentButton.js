import { View, Text, Pressable } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const CommentButton = ({data}) => {
    const router = useRouter()

  return (
<Pressable onPress={()=> router.push({pathname:'/commentScreen', params:{postId: data?.postId}})} style={{height:'100%',  justifyContent:'center', alignItems:'center'}}>

<Ionicons name="chatbubble-outline" size={26} color="gray" />

</Pressable>
  )
}

export default CommentButton