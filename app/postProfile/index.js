import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { TabView } from 'react-native-tab-view'
import PostProfileTabBar from '../../src/components/home/postProfile/PostProfileTabBar'
import { router, useLocalSearchParams, useRouter } from 'expo-router'
import PostProfileTopView from '../../src/components/home/postProfile/PostProfileTopView'
import PostProfilePostList from '../../src/components/home/postProfile/PostProfilePostList'
import PostProfileMediaList from '../../src/components/home/postProfile/PostProfileMediaList'
import { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { Modal, Portal } from 'react-native-paper'
import BlockModalView from '../../src/components/home/postProfile/BlockModalView'
import { useBlockUser } from '../../src/hooks/postProfile/useBlockUser'
import Toast from 'react-native-toast-message'

const PostProfile = () => {
    const insets = useSafeAreaInsets()
    const {userUid, username} = useLocalSearchParams()
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        {title:'Posts', key:'posts'},
        {title:'Media', key:'media'},
    ])
    const animationValue = useSharedValue(0)
    const [modelOpen, setModalOpen] = useState(false)
    const {mutate} = useBlockUser()
    const router = useRouter()



    const scrollHandler = useAnimatedScrollHandler((e)=>{
      animationValue.value = e.contentOffset.y
    })

    const topViewAnimation = useAnimatedStyle(()=>{
      const translateY = interpolate(
        animationValue.value,
        [0,600],
        [0,-500],
        Extrapolate.CLAMP
      )

      return {
        transform:[{translateY}]
      }
    })

    const renderScene = ({route}) =>{
      const props = {scrollHandler, userUid}
      switch (route.key){
        case 'posts':
          return <PostProfilePostList {...props} />
        case 'media':
          return <PostProfileMediaList {...props} />
      }
    }

    const handleBlockUser = () =>{
      mutate({
        userUid
      },{
        onSuccess:()=> {
          Toast.show({
            text1:'Successs',
            type:'success',
            text2:'Blocked User Successfully!'
          })

            router.back()
 
        }
      })
    }


  return (
    <SafeAreaView style={{flex:1}} edges={['bottom']}>

        <PostProfileTabBar insets={insets} username={username} setModalOpen={setModalOpen} userUid={userUid} />

        <PostProfileTopView  insets={insets} setIndex={setIndex} index={index} topViewAnimation={topViewAnimation} userUid={userUid} />


        <TabView 
        initialLayout={{width:Dimensions.get('screen').width}}
        swipeEnabled={true}
        navigationState={{routes, index}}
        onIndexChange={setIndex}
        renderTabBar={()=> null}
        renderScene={renderScene}
        />


        <Portal>
          <Modal visible={modelOpen} onDismiss={()=> setModalOpen(false)} style={{flex:1, width:Dimensions.get('screen').width, justifyContent:'center', alignItems:'center'}}>

            <BlockModalView setModalOpen={setModalOpen} handleBlockUser={handleBlockUser} />

          </Modal>
        </Portal>


 
    </SafeAreaView>
  )
}

export default PostProfile