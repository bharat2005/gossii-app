import { View, Text, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const BottomBar = ({setMediaUri, setMediaType }) => {


const imagePick = async() => {
    const request = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(!request.granted) return

    const res = await ImagePicker.launchImageLibraryAsync({
        allowsEditing:true,
        quality:1,
        mediaTypes:['images']
    })

    if(!res.canceled){
        setMediaUri(res?.assets[0]?.uri)
        setMediaType(res?.assets[0]?.type)
    }
}

const videoPick = async()=> {
    const request = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(!request.granted) return

    const res = await ImagePicker.launchImageLibraryAsync({
        quality:1,
        mediaTypes:['videos'],
})

    if(!res.canceled){
        setMediaUri(res?.assets[0]?.uri)
        setMediaType(res?.assets[0]?.type)
    }
}




  return (
      <View style={{marginTop:'auto', width:Dimensions.get('screen').width, height:50, backgroundColor:'white', flexDirection:'row'}}>

        <Pressable onPress={imagePick} style={{height:'100%', paddingHorizontal:24, backgroundColor:'white'}}>
            <Ionicons name="image-outline" size={32} color="darkgray" />
        </Pressable>

        <Pressable onPress={videoPick} style={{height:'100%', paddingHorizontal:12, backgroundColor:'white'}}>
           <AntDesign name="videocamera" size={32} color="darkgray" />
        </Pressable>
        


      </View>

  )
}

export default BottomBar