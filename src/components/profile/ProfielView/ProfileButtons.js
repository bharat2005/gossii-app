import { View, Text, Dimensions, Pressable, Share } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useRouter } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';

const ProfileButtons = () => {
    const router = useRouter()
    
  return (
    <View style={{ height:58, marginVertical:12, flexDirection:'row', alignItems:'center', paddingHorizontal:8,}}>


    <View style={{paddingVertical:8, paddingHorizontal:6, flex:1}}>
            <Pressable onPress={()=> router.push('/edit')} style={{flexDirection:'row', justifyContent:'center', backgroundColor:'#333844',  alignItems:'center', height:42, borderWidth:1.4, borderColor:'#333844', borderRadius:24, gap:12}}>
            
            <Feather name="edit" size={22} color="white" />
                  <Text style={{color:'white', fontFamily:'medium', fontSize:16}}>
                    Edit
                </Text>

        </Pressable>
    </View>


    <View style={{paddingVertical:8, paddingHorizontal:6, flex:1}}>
            <Pressable onPress={()=> Share.share({message:'love is beautiful!'})} style={{flexDirection:'row', justifyContent:'center', backgroundColor:'white',  alignItems:'center', height:42, borderWidth:1.4, borderColor:'#333844', borderRadius:24, gap:12}}>
            
           <Feather name="share" size={24} color="black" />
                  <Text style={{color:'balck', fontFamily:'medium', fontSize:16}}>
                    Share
                </Text>

        </Pressable>
    </View>






  
    </View>
  )
}

export default ProfileButtons