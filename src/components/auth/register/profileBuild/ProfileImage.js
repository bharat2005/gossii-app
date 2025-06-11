import { View, Text, Pressable, Image, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import { Button, HelperText, TextInput } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import ActionSheet, {} from 'react-native-actions-sheet'
import LogoInverted from '../../../../../assets/svgs/LogoInverted'
import Colors from '../../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import ColorButton from '../../../atoms/ColorButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import Entypo from '@expo/vector-icons/Entypo'

const ProfileImage = ({handleBlur, handleChange, handleSubmit, touched , errors, values, setStep, setFieldValue, isSubmitting}) => {
    const sheetRef = useRef(null)

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
        setFieldValue('imageUri', res.assets[0]?.uri)
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
            setFieldValue('imageUri', res.assets[0]?.uri)
            sheetRef.current.hide()
        }
    }


  return (
 <SafeAreaView style={{flex:1, backgroundColor:'white'}} edges={['bottom', 'top']}>

      <View style={{height:70, width:'100%', justifyContent:'center', alignItems:'center'}}>
        <LogoInverted height={50} width={50}/>

        <Pressable onPress={()=> setStep(0)} style={{position:'absolute', top:0, bottom:0, left:0,  justifyContent:"center", alignItems:'center', marginHorizontal:8}}>
              <Entypo name="chevron-left" size={32} color="gray" />
        </Pressable>
      </View>


      <View style={{flex:1, padding:18, gap:24}}>

        <View >
          <Text style={{fontFamily:'bold', fontSize:30}}>
          Set Profile Picture📸
          </Text>
        </View>


    <View>
          <Text style={{fontFamily:'light', fontSize:15, color:'gray'}}>
            It will be displayed in you profile and when you post, and you can change it at anytime.
          </Text>
    </View>

  <View style={{width:140, height:140,  marginTop:28, marginHorizontal:'auto' }}>
        <Pressable onPress={()=> sheetRef.current.show()} style={{height:140, width:140, borderRadius:70,backgroundColor:'gray', borderWidth:8, borderColor:(values.imageUri && !errors.imageUri) ? Colors.MAINORANGE : "lightgray"}}>
 {
    values.imageUri ? (
 <Image source={{uri:values.imageUri}} style={{height:'100%', width:'100%', borderRadius:50}} />
    ) : (
<Image source={require('../../../../../assets/images/placeholder.png')} style={{height:'100%', width:'100%', borderRadius:50}} />
    )
 }  

</Pressable>

 <Pressable onPress={!(values.imageUri && !errors.imageUri) ? ()=> sheetRef.current.show() : ()=> setFieldValue('imageUri','') } style={{height:38, width:38, backgroundColor:'rgb(61, 61, 61)', borderRadius:19, position:'absolute', bottom:0, right:0, justifyContent:'center', alignItems:'center'}}>
{!(values.imageUri && !errors.imageUri) ? (
<Ionicons name="image-outline" size={22} color="white"  />
): (
<Ionicons name="close" size={24} color="white"  />
)}

 </Pressable>
</View>



     <View style={{marginTop:'auto'}}>
<ColorButton onPress={handleSubmit} loading={isSubmitting} text={"Register and Continue"} disabled={!(values.imageUri && !errors.imageUri) || isSubmitting}/>
     </View>


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

    

    </SafeAreaView>
  )
}

export default ProfileImage