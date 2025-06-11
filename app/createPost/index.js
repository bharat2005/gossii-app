import { View, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Dimensions, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Modal, Portal } from 'react-native-paper'
import CreatePostTabBar from '../../src/components/home/createPost/CreatePostTabBar'
import BottomBar from '../../src/components/home/createPost/BottomBar'
import { Video } from 'expo-av'
import { useCurrentUser } from '../../src/hooks/user/useCurrentUser'
import { useCreatePost } from '../../src/hooks/post/useCreatePost'
import Toast, {} from 'react-native-toast-message'
import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import CreatePostVideo from '../../src/components/atoms/CreatePostVideo'
import PreviewPost from '../../src/components/atoms/PreviewPost'

const CreatePost = () => {
  const {data: userData} = useCurrentUser()
    const [mediaUri, setMediaUri] = useState('')
    const [modelOpen, setModalOpen] = useState(false)
    const [mediaType, setMediaType] = useState('')
    const [text, setText] = useState('')
    const {mutate, isPending, error} = useCreatePost()
    const router = useRouter()



    const handleCreatePost = () => {
      mutate({
        userData, 
        text, 
        mediaUri,
         mediaType
      },{
        onSuccess:()=> {
          Toast.show({
            text1:'Success',
            text2:'Post Created Successfully!'
          })
          setTimeout(()=> router.replace('/(main)/home'), 800)
        }
      })
      

    }



  return (
      
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{flex:1, backgroundColor:'white'}} edges={['top','bottom']}>


      <CreatePostTabBar {...{ mediaUri, text, isPending, handleCreatePost, setModalOpen }} />

      <View style={{flex:1, paddingTop:34, width:'100%', gap:12,}}>


        <View style={{ width:'100%', flexDirection:'row', paddingHorizontal:8}}>

          <View style={{alignItems:'center'}}>

            <View style={{height:50, width:50, borderRadius:25}}>
              <Image style={{height:'100%',width:'100%',backgroundColor:'black', borderRadius:25  }} source={{uri:userData?.profilePicUri}} />
            </View>

          </View>


          <View style={{flex:1, height:'100%'}}>

            <View style={{width:'100%', paddingHorizontal:12}}>
              <Text style={{fontFamily:'semibold', fontSize:18}}>{userData?.username}</Text>
            </View>


            
          <View style={{width:"100%", padding:8}}>

            <TextInput
            onChangeText={(v)=> setText(v)}
             multiline
             placeholder='type your post here...'
            numberOfLines={6}
            style={{fontFamily:'regular', fontSize:18}}
            />

          </View>

          </View>




        </View>
        

      <View style={{height:Dimensions.get('screen').width, width:Dimensions.get('screen').width, backgroundColor:'white', padding:18}}>

        {(mediaUri && mediaType==='image') && (

          <Image source={{uri:mediaUri}} style={{height:'100%', width:'100%', borderRadius:12}}  />

        )}

        {(mediaUri && mediaType==='video') && (

         <CreatePostVideo uri={mediaUri} />

        )}

      </View>

      </View>





      <BottomBar {...{setMediaUri, setMediaType }} />



      
        <Portal>
          <Modal visible={modelOpen} onDismiss={()=> setModalOpen(false)} style={{flex:1, width:Dimensions.get('screen').width, justifyContent:'center', alignItems:'center'}}>
          <PreviewPost data={userData} text={text} mediaUri={mediaUri} mediaType={mediaType}/>
          </Modal>
        </Portal>

           </SafeAreaView>

    </TouchableWithoutFeedback>




  )
}

export default CreatePost