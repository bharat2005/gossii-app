import { View, Text, Pressable, Share } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const ShareButton = ({data}) => {
  return (
<Pressable onPress={()=> Share.share({message:'...'})} style={{height:'100%', justifyContent:'center', alignItems:'center'}}>

<Feather name="share" size={24} color="gray" />

</Pressable>
  )
}

export default ShareButton