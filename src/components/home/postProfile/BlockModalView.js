import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'

const BlockModalView = ({setModalOpen, handleBlockUser}) => {
  return (
    <View style={{height:220, backgroundColor:'white', borderRadius:12, width:Dimensions.get('screen').width * 0.85, paddingTop:18,paddingHorizontal:22, gap:18}}>
       
       
        <View style={{width:'100%'}}>
            <Text style={{fontFamily:'bold', fontSize:24}}>Block this user?</Text>
        </View>

        <View style={{width:'100%',  justifyContent:'center',flex:1}}>
    <Text style={{fontFamily:"light", fontSize:16, color:"gray"}}>
You won’t see their posts anymore, and they won’t be able to interact with you in the app.
    </Text>
        </View>

        <View style={{marginTop:'auto', height:60, width:'100%', flexDirection:'row'}}>
            <Pressable onPress={()=>setModalOpen(false)} style={{flex:1, height:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontFamily:'regular', fontSize:18}}>Cancel</Text>
            </Pressable>

            <Pressable onPress={()=> {setModalOpen(false); handleBlockUser()}} style={{flex:1, height:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'red', fontFamily:'regular', fontSize:18}}>Block User</Text>
            </Pressable>
        </View>
   
    </View>
  )
}

export default BlockModalView