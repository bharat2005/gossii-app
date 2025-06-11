import { View, Text, TouchableNativeFeedback, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import RegisterEmail from '../../src/components/auth/register/RegisterEmail'
import RegisterPassword from '../../src/components/auth/register/RegisterPassword'
import { useAuth } from '../../src/contexts/AuthContextProvider'

const Register = () => {
  const [step, setStep] = useState(0)
  const {register} = useAuth()
  const validation = Yup.object({
    email:Yup.string().required("Required*").email("Should be a valid email only!"),
    password:Yup.string().required('Required*').min(6,"Password must be 6 characters long!")
  })


  const handleSubmit = async(values) => {
    await register(values.email, values.password)
  }
  return (

      <Formik
      onSubmit={handleSubmit}
     initialValues={{email:'', password:''}}
     validationSchema={validation}
      >
        {({handleBlur, handleChange, handleSubmit, touched, errors, values, setFieldTouched, isSubmitting})=> (
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <SafeAreaView style={{flex:1, backgroundColor:'white'}}>

    {step === 0 && (
      <RegisterEmail {...{handleBlur, handleChange, handleSubmit, touched, errors, values, setStep, setFieldTouched}} />
    )}

    
    {step === 1 && (
      <RegisterPassword {...{handleBlur, handleChange, handleSubmit, touched, errors, values, setStep, isSubmitting}} />
    )}



  </SafeAreaView>

</TouchableWithoutFeedback>
        )}
      </Formik>
     
  )
}

export default Register