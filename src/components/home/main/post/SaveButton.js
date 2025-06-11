import { View, Text, Pressable } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { fetchSaves } from '../../../../hooks/post/fetchSaves';
import { useSave } from '../../../../hooks/post/useSave';

const SaveButton = ({data}) => {
  const {data:savesData} = fetchSaves(data?.postId)
  const {mutate, error} = useSave(data?.postId)



  const handleSavePress = () =>{
    mutate({saved: savesData})
    
  }

  return (
<Pressable onPress={handleSavePress} style={{height:'100%',  justifyContent:'center', alignItems:'center'}}>

<FontAwesome name="bookmark" size={24} color={savesData ? 'orange' : 'gray'} />

</Pressable>
  )
}

export default SaveButton