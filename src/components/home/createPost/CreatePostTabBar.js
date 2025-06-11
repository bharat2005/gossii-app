import { View, Text, Dimensions, Pressable } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient'

import React from 'react'
import { ActivityIndicator } from 'react-native-paper';
import Colors from '../../../constants/Colors'
import { router } from 'expo-router';

const CreatePostTabBar = ({text, mediaUri, isPending, handleCreatePost, setModalOpen}) => {
  return (
    <View style={{height:70, width:Dimensions.get('screen').width, backgroundColor:'white', flexDirection:'row', alignItems:'center'}}>
      
      <Pressable onPress={()=> router.back()} style={{justifyContent:'center', alignItems:'center', marginHorizontal:12}}>
<AntDesign name="close" size={26} color="black" />
      </Pressable>


      <View style={{flexDirection:'row', height:'100%', alignItems:'center', marginLeft:'auto', paddingHorizontal:12}}>
       
      <Pressable onPress={()=>setModalOpen(true)} style={{justifyContent:'center', alignItems:'center', marginHorizontal:12, backgroundColor:'rgb(238, 238, 238)', borderRadius:19, height:38, width:38}}>
<AntDesign name="eye" size={24} color="gray" />
      </Pressable>

{isPending ? (
     <Pressable
      style={{
        justifyContent:'center',
        marginHorizontal:12,
        alignItems:'center',
        height:50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'rgb(238, 238, 238)',
      }}
    >
<ActivityIndicator  color='black' />
    </Pressable>

): (
   <Pressable
     onPress={handleCreatePost} 
     disabled={(!(text.trim()) || !(mediaUri.trim())) || isPending}
      style={{
        justifyContent:'center',
        marginHorizontal:12,
        alignItems:'center',
        height:50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "orange",
      }}
    >
      <LinearGradient
        colors={!((!(text.trim()) || !(mediaUri.trim())) || isPending) ? [Colors.MAINPINK, Colors.MAINORANGE] : ['rgb(238, 238, 238)', 'rgb(238, 238, 238)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: 24,
        }}
      />

     <Feather name="send" size={24} color={!((!(text.trim()) || !(mediaUri.trim())) || isPending) ? 'white' : 'gray'} />
    </Pressable>
)}


      </View>

    </View>
  )
}

export default CreatePostTabBar