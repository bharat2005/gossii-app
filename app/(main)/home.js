import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TabView } from 'react-native-tab-view'
import RecommendedTab from '../../src/components/home/main/RecommendedTab'
import NearByTab from '../../src/components/home/main/NearByTab'
import MainHeader from '../../src/components/home/main/MainHeader'
import { Extrapolate, Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import CreatePostButton from '../../src/components/home/main/CreatePostButton'

const Home = () => {
  const [index, setIndex] = useState(0)
const [routes] = useState([
  {title:'Recommanded', key:'rec'},
  {title:'NearBy', key:'nearby'},
])
const animatedValue = useSharedValue(0)

const scrollHandler = useAnimatedScrollHandler((event)=> {
  animatedValue.value = event.contentOffset.y
})

const tranlateAnimationStyle = useAnimatedStyle(()=> {
  const translateY = interpolate(
    animatedValue.value,
    [0,280],
    [0,-160],
    Extrapolate.CLAMP
  )

  return {
    transform:[{translateY}]
  }
})

const renderScene = ({route}) => {
  const props = {scrollHandler}
  switch (route.key){
    case 'rec' :
      return <RecommendedTab {...props} />
    case 'nearby' :
      return  <NearByTab />
  }
}


  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}} edges={['top']}>

      <MainHeader tranlateAnimationStyle={tranlateAnimationStyle} routes={routes} setIndex={setIndex} index={index} />

      <TabView
      swipeEnabled={false}
      navigationState={{routes, index}}
      onIndexChange={setIndex}
      initialLayout={{width:Dimensions.get('screen').width}}
      renderTabBar={()=> null}
      renderScene={renderScene}
      
      
      />



      <CreatePostButton />


     
    </SafeAreaView>
  )
}

export default Home