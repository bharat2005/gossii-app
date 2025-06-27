import { View, Text, Pressable } from 'react-native'
import { Button, HelperText, TextInput } from 'react-native-paper'
import React, { useState } from 'react'
import LogoInverted from '../../../../assets/svgs/LogoInverted'
import { SafeAreaView } from 'react-native-safe-area-context'
import Entypo from '@expo/vector-icons/Entypo'
import ColorButton from '../../atoms/ColorButton'
import Colors from '../../../constants/Colors'

const RegisterPassword = ({handleBlur, handleChange, handleSubmit, touched, errors, values, setStep, isSubmitting}) => {
  const [hidden, setHidden] = useState(false)

  return (
    <SafeAreaView style={{flex:1}} edges={['bottom']}>


      
      <View style={{height:70, width:'100%', justifyContent:'center', alignItems:'center'}}>
        <LogoInverted height={50} width={50}/>

        <Pressable onPress={()=> setStep(0)} style={{position:'absolute', top:0, bottom:0, left:0,  justifyContent:"center", alignItems:'center', marginHorizontal:8}}>
              <Entypo name="chevron-left" size={32} color="gray" />
        </Pressable>
      </View>


      <View style={{flex:1, padding:18, gap:24}}>

        <View >
          <Text style={{fontFamily:'bold', fontSize:30}}>
        Create Strong Security Password📲
          </Text>
        </View>


    <View>
          <Text style={{fontFamily:'light', fontSize:15, color:'gray'}}>
          Make a strong password for the email address {values.email}
          </Text>
        </View>


        <View>
          <View>
             <Text style={{fontFamily:'light', fontSize:15, color:'darkgray', paddingVertical:4, paddingHorizontal:2}}>
              Create password
            </Text>
          </View>
      
     <TextInput 
     right={<TextInput.Icon color={'gray'} icon={hidden ? 'eye-off' : 'eye'} onPress={()=> setHidden(prev => !prev)} />}
     secureTextEntry={hidden}

      mode='outlined'
         placeholder='create password'
         theme={{colors:{
          background:'white',
          primary:Colors.MAINORANGE,
          outline:'lightgray',
          placeholder:'lightgray'
         }}}
    value={values.password}
    onChangeText={handleChange('password')}
    onBlur={handleBlur('password')}
    error={!!errors.password && touched.password === true}
     style={{width:'100%'}}/> 

     <HelperText visible={!!errors.password && touched.password === true} style={{color:'red'}}>
        {errors.password}
     </HelperText>
     </View>

  



<ColorButton  onPress={handleSubmit} text={"Next"} disabled={!(values.password && !errors.password) || isSubmitting} loading={isSubmitting} />



</View>

    </SafeAreaView>
  )
}

export default RegisterPassword