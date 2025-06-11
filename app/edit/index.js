import { View, Text, Dimensions, Pressable, TextInput, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import { Image } from 'react-native'
import { Button } from 'react-native-paper'
import { useCurrentUser } from '../../src/hooks/user/useCurrentUser'
import ActionSheet from 'react-native-actions-sheet'
import * as ImagePicker from 'expo-image-picker'
import { useUpdateUser } from '../../src/hooks/user/useUpdateUser'
import Toast from 'react-native-toast-message'
import { useRouter } from 'expo-router'
import Colors from '../../src/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Edit = () => {
        const {data} = useCurrentUser()
    const [updatedUsername, setUpdateUsername] = useState(data?.username)
    const [updatedImageUri, setUpdateImageUri] = useState(data?.profilePicUri)
    const [updatedBio, setUpdatedBio] = useState(data?.bio)
    const sheetRef = useRef(null)
    const {mutate, error, isPending} = useUpdateUser()
    const router = useRouter()

 


    
        const imagePick = async()=> {
        const request = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(!request.granted) return
    
        const res = await ImagePicker.launchImageLibraryAsync({
            allowsEditing:true,
            mediaTypes:['images'],
            quality: 1,
            aspect:[1,1]
        })
        if(!res.canceled){
            setUpdateImageUri(res.assets[0]?.uri)
            sheetRef.current.hide()
        }
        }
    
        const cameraPick = async()=> {
            const request = await ImagePicker.requestCameraPermissionsAsync()
            if(!request.granted) return
    
            const res = await ImagePicker.launchCameraAsync({
                        allowsEditing:true,
            mediaTypes:['images'],
            quality: 1,
            aspect:[1,1]
            })
            if(!res.canceled){
                setUpdateImageUri(res.assets[0]?.uri)
                sheetRef.current.hide()
            }
        }


        const handleSave = () =>{
           
            mutate({
                username: updatedUsername, 
                profilePicUri : updatedImageUri,
                 bio : updatedBio
            }, {
                onSuccess:()=>{
                    Toast.show({
                        text1:'Success',
                        text2:'Succesfuly Updated!',
                        type:'success'
                    })
                    router.back()
                }
            })
        }
    

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>

            
            <View style={{flex:1, alignItems:'center',  backgroundColor:'white'}}>

        <View style={{width:140, height:140, marginHorizontal:'auto', marginVertical:32, }}>
        <Pressable onPress={()=> sheetRef.current.show()} style={{height:140, width:140, borderRadius:70,backgroundColor:'gray', borderWidth:8, borderColor: Colors.MAINORANGE }}>

 <Image source={{uri:updatedImageUri}} style={{height:'100%', width:'100%', borderRadius:50}} />
 

</Pressable>

 <Pressable onPress={updatedImageUri ? ()=> sheetRef.current.show() : ()=> setUpdateImageUri('') } style={{height:38, width:38, backgroundColor:'rgb(61, 61, 61)', borderRadius:19, position:'absolute', bottom:0, right:0, justifyContent:'center', alignItems:'center'}}>
<Ionicons name="image-outline" size={22} color="white"  />
 </Pressable>
</View>




      <View style={{ width:Dimensions.get('screen').width, marginVertical:0, flexDirection:'row',  alignItems:'center', justifyContent:'space-between'}}>

        <View style={{ height:60, justifyContent:'center', alignItems:'center', width:120}}>
            <Text style={{color:'gray', fontFamily:'regular', fontSize:16}}>
                Username
            </Text>
        </View>

        <View style={{height:'100%', justifyContent:'center', alignItems:'center',  flex:1, maxHeight:60,  paddingHorizontal:12,}}>

            <TextInput value={updatedUsername} onChangeText={(v)=> setUpdateUsername(v)} style={{width:'100%', height:'100%', fontFamily:'semibold', fontSize:19, color:'black'}}  />
         
        </View>

        <EvilIcons name="chevron-right" size={28} color="black" style={{marginHorizontal:12}} />

      </View>



<View style={{ width:Dimensions.get('screen').width, marginVertical:0, flexDirection:'row',  }}>

        <View style={{ height:60, justifyContent:'center', alignItems:'center', width:120, }}>
            <Text style={{color:'gray', fontFamily:'regular', fontSize:16}}>
                Bio
            </Text>
        </View>

        <View style={{height:'100%', justifyContent:'center', alignItems:'center',  flex:1, maxHeight:200, paddingHorizontal:12,}}>

            <TextInput 
            multiline
            numberOfLines={6}
            value={updatedBio} onChangeText={(v)=> setUpdatedBio(v)} style={{width:'100%',fontFamily:'semibold', fontSize:19, color:'black'}}  />
         
        </View>

      </View>



      <View style={{marginTop:"auto"}}>
        <Button 
        style={{width:180}}
        disabled={isPending} loading={isPending} 
        onPress={handleSave} 
        mode='outlined'
        theme={{
            colors:{
                primary:'black'
            }
        }}
        labelStyle={{color:'black', fontFamily:'regular', fontSize:18}}
        >
            Save
        </Button>
      </View> 


         <ActionSheet gestureEnabled ref={sheetRef} >
        <View style={{width:Dimensions.get('screen').width, padding:18}}>
            <Pressable onPress={imagePick} style={{height:50, width:'100%', flexDirection:'row',  alignItems:'center', gap:12}}>
                <Ionicons name="image-outline" size={24} color="black" />
                    <Text style={{fontFamily:'regular', fontSize:16}}>Select from Gallary</Text>
            </Pressable>

     <Pressable onPress={cameraPick} style={{height:50, width:'100%', flexDirection:'row',  alignItems:'center', gap:12}}>
        <Ionicons name="camera-outline" size={24} color="black" />
    <Text style={{fontFamily:'regular', fontSize:16}}>Take a Photo</Text>
        </Pressable>

        <Pressable onPress={()=>sheetRef.current.hide()} style={{height:50, width:'100%', marginVertical:8, justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontFamily:'semibold', fontSize:18}}>Cancel</Text>
        </Pressable>

        </View>
     </ActionSheet>


    </View>

        </SafeAreaView>


    </TouchableWithoutFeedback>

  )
}

export default Edit