import { View, Text, Pressable } from 'react-native'
import { Button, HelperText, TextInput } from 'react-native-paper'
import React from 'react'
import LogoInverted from '../../../../assets/svgs/LogoInverted'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../../constants/Colors'
import Entypo from '@expo/vector-icons/Entypo'
import ColorButton from '../../atoms/ColorButton'

const LoginPassword = ({handleBlur, handleChange, handleSubmit, touched, errors, values, setStep, isSubmitting}) => {

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
   Enter Your Security Password 🔒
          </Text>
        </View>


    <View>
          <Text style={{fontFamily:'light', fontSize:15, color:'gray'}}>
     Type in the password you set for the email address {values.email} to access your GOSSII account.
          </Text>
        </View>
      
          <View>
            <View>
               <Text style={{fontFamily:'light', fontSize:15, color:'darkgray', paddingVertical:4, paddingHorizontal:2}}>
                Create password
              </Text>
            </View>
        
       <TextInput 
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


   <ColorButton  onPress={handleSubmit} text={"Login"} disabled={!(values.password && !errors.password) || isSubmitting} loading={isSubmitting} />



</View>


    </SafeAreaView>
  )
}

export default LoginPassword