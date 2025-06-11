import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoInverted from '../../../../../assets/svgs/LogoInverted'
import Colors from '../../../../constants/Colors'
import ColorButton from '../../../atoms/ColorButton'
import { Button, HelperText, TextInput } from 'react-native-paper'

const ProfileUsername = ({handleBlur, handleChange, handleReset, handleSubmit, touched, setFieldTouched, errors, values, setStep}) => {


    const handleNext = () => {
        setFieldTouched('username', true)
        if(!errors.username && values.username){
            setStep(1)
        }
    }


  return (
       <SafeAreaView style={{flex:1, backgroundColor:'white'}} edges={['bottom','top']}>
      
        <View style={{height:70, width:'100%', justifyContent:'center', alignItems:'center'}}>
        <LogoInverted height={50} width={50}/>
      </View>


      <View style={{flex:1, padding:18, gap:24}}>

        <View >
          <Text style={{fontFamily:'bold', fontSize:30}}>
            What is your name?
          </Text>
        </View>


    <View>
          <Text style={{fontFamily:'light', fontSize:15, color:'gray'}}>
           This  is the name you want to display on Gossii. You can change it anytime.
          </Text>
        </View>

        

<View>
  <View>
     <Text style={{fontFamily:'light', fontSize:15, color:'darkgray', paddingVertical:4, paddingHorizontal:2}}>
       Username
    </Text>
  </View>
    <TextInput 
  mode='outlined'
     placeholder='username'
     theme={{colors:{
      background:'white',
      primary:Colors.MAINORANGE,
      outline:'lightgray',
      placeholder:'lightgray'
     }}}
     value={values.username}
     onChangeText={handleChange('username')}
    onBlur={handleBlur('username')}
    error={!!errors.username && touched.username === true}
     />
     <HelperText visible={!!errors.username && touched.username === true} style={{color:'red'}}>
        {errors.username}
     </HelperText>

     </View>

     <ColorButton onPress={handleNext} text={"Next"} disabled={!(!errors.username && values.username)}/>


     </View>

    </SafeAreaView>
  )
}

export default ProfileUsername