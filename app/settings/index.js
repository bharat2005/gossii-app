import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Button, Modal, Portal } from 'react-native-paper'
import Entypo from '@expo/vector-icons/Entypo'
import { useAuth } from '../../src/contexts/AuthContextProvider'
import { router } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context'
import { useCurrentUser } from '../../src/hooks/user/useCurrentUser'
import Dim, {} from '../../src/constants/Dim'
import { Image } from 'react-native'

const Settings = () => {
    const {logout} = useAuth()
    const {data} = useCurrentUser()
    const [visible, setVisible] = useState(false)

  return (
    <SafeAreaView style={{flex:1}}>

    <View style={{height:80, width:'100%',  flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

    <Pressable onPress={()=> router.back()} style={{justifyContent:'center', alignItems:'center', marginHorizontal:8, position:'absolute', left:0 }}>
<Entypo name="chevron-left" size={32} color="gray" />
      </Pressable>



      <View style={{height:32, width:32, borderRadius:25, marginHorizontal:8}}>
        <Image style={{height:'100%', width:'100%', borderRadius:25}} source={{uri:data?.profilePicUri}} />

      </View>

      <View>
        <Text style={{fontFamily:'bold', fontSize:20}}>
          {data?.username}
        </Text>
      </View>



      </View>

      <Pressable onPress={()=>setVisible(true)} style={{height:50, width:'100%', flexDirection:'row', alignItems:'center', paddingHorizontal:18, justifyContent:'space-between', borderBottomWidth:0.5, borderColor:'lightgray'}}>

        <Text style={{color:'red', fontFamily:'regular', fontSize:18}}>
          Log Out
        </Text>

    <MaterialIcons name="logout" size={24} color="red" />
      </Pressable>
     

     <Portal>
        <Modal onDismiss={()=> setVisible(false)} visible={visible} style={{flex:1, width:Dim.WIDTH, justifyContent:'center', alignItems:'center'}}>
    <View style={{height:220, backgroundColor:'white', borderRadius:12, width:Dim.WIDTH * 0.85, paddingTop:18,paddingHorizontal:28, gap:18}}>
       
       
        <View style={{width:'100%'}}>
            <Text style={{fontFamily:'bold', fontSize:24}}>Log out of your account?</Text>
        </View>

        <View style={{width:'100%',  justifyContent:'center',flex:1}}>
    <Text style={{fontFamily:"light", fontSize:16, color:"gray"}}>
You’ll be signed out and need to log in again to continue.
    </Text>
        </View>

        <View style={{marginTop:'auto', height:60, width:'100%', flexDirection:'row'}}>
            <Pressable onPress={()=>setVisible(false)} style={{flex:1, height:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontFamily:'regular', fontSize:18}}>Cancel</Text>
            </Pressable>

            <Pressable onPress={()=> {setVisible(false); logout()}} style={{flex:1, height:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'red', fontFamily:'regular', fontSize:18}}>Log Out</Text>
            </Pressable>
        </View>
   
    </View>
        </Modal>
      </Portal>
 
    </SafeAreaView>
  )
}

export default Settings