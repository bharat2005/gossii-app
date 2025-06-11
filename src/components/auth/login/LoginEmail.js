import { View, Text, Pressable } from 'react-native'
import { Button, HelperText, TextInput } from 'react-native-paper'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoInverted from '../../../../assets/svgs/LogoInverted'
import Entypo from '@expo/vector-icons/Entypo'
import Colors from '../../../constants/Colors'
import ColorButton from '../../atoms/ColorButton'
import { router } from 'expo-router'

const LoginEmail = ({handleBlur, handleChange, handleSubmit, touched, errors, values, setStep, setFieldTouched}) => {


const handleNext = () => {
    setFieldTouched('email', true)

    if(values.email && !errors.email){
        setStep(1)
    }


}



  return (
      <SafeAreaView style={{flex:1}} edges={['bottom']}>
      
      <View style={{height:70, width:'100%', justifyContent:'center', alignItems:'center'}}>
        <LogoInverted height={50} width={50}/>

        <Pressable onPress={()=> router.back()} style={{position:'absolute', top:0, bottom:0, left:0,  justifyContent:"center", alignItems:'center', marginHorizontal:8}}>
              <Entypo name="chevron-left" size={32} color="gray" />
        </Pressable>
      </View>


      <View style={{flex:1, padding:18, gap:24}}>

        <View >
          <Text style={{fontFamily:'bold', fontSize:30}}>
           Welcome Back user to GOSSII 📞
          </Text>
        </View>


    <View>
          <Text style={{fontFamily:'light', fontSize:15, color:'gray'}}>
           Log in using your Gmail account to continue. Make sure you're using the same email you registered with.
          </Text>
        </View>


<View>
  <View>
     <Text style={{fontFamily:'light', fontSize:15, color:'darkgray', paddingVertical:4, paddingHorizontal:2}}>
      Email address
    </Text>
  </View>
     <TextInput 
        left={<TextInput.Icon icon='email-outline' color={'lightgray'}/>}
      mode='outlined'
         placeholder='email address'
         theme={{colors:{
          background:'white',
          primary:Colors.MAINORANGE,
          outline:'lightgray',
          placeholder:'lightgray'
         }}}
    value={values.email}
    onChangeText={handleChange('email')}
    onBlur={handleBlur('email')}
    error={!!errors.email && touched.email === true}
     style={{width:'100%'}}/> 

     <HelperText visible={!!errors.email && touched.email === true}>
        {errors.email}
     </HelperText>

     </View>


<ColorButton onPress={handleNext} text={"Next"} disabled={!(values.email && !errors.email)}/>

<Pressable onPress={()=>router.replace('/(auth)/register')} style={{justifyContent:'center ', alignItems:'center'}}>
  <Text style={{fontFamily:'light', fontSize:15, color:'gray'}}>
Don't have an account yet?
  </Text>
</Pressable>
</View>


    </SafeAreaView>
  )
}

export default LoginEmail