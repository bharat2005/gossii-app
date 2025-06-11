import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import ProfileUsername from '../../src/components/auth/register/profileBuild/ProfileUsername'
import ProfileImage from '../../src/components/auth/register/profileBuild/ProfileImage'
import { useAuth } from '../../src/contexts/AuthContextProvider'

const Profile = () => {
  const [step, setStep] = useState(0)
  const {createAccount} = useAuth()
  const validation = Yup.object({
    username:Yup.string().required("Requierd*"),
    imageUri: Yup.string().required("Image is nesessary to proceed further!")
  })


  const handleProfileSubmit = async(values, {resetForm}) => {
     await createAccount(values.username, values.imageUri)
  } 






  return (
  <Formik
  validationSchema={validation}
  onSubmit={handleProfileSubmit}
  initialValues={{username:'', imageUri:''}}
  
  >
    {({handleBlur, handleChange, handleReset, handleSubmit, touched, setFieldTouched, errors, values, setFieldValue, isSubmitting})=> (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex:1}}>

          {step === 0 && (
            <ProfileUsername {...{handleBlur, handleChange, handleReset, handleSubmit, touched, setFieldTouched, errors, values, setStep,}}/>
          )}

                    {step === 1 && (
            <ProfileImage {...{handleBlur, handleChange, handleReset, handleSubmit, touched, setFieldTouched, errors, values, setFieldValue, setStep, isSubmitting}}/>
          )}

        </View>
      </TouchableWithoutFeedback>
    )}
  </Formik>
  )
}

export default Profile