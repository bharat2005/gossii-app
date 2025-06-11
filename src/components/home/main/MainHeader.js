import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import MainTabBar from './MainTabBar'
import { useCurrentUser } from '../../../hooks/user/useCurrentUser'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SearchIcon from '../../../../assets/svgs/SearchIcon'

const MainHeader = ({tranlateAnimationStyle, routes, setIndex, index}) => {
  const insets = useSafeAreaInsets()
  const {data} = useCurrentUser()

  return (
    <Animated.View style={[{height:138, position:'absolute', zIndex:10, top:0, left:0, right:0, width:Dimensions.get('screen').width, backgroundColor:'white', paddingTop:insets.top + 8}, tranlateAnimationStyle]}>

<View style={{flexDirection:'row', paddingHorizontal:12, alignItems:'center'}}>
  <View style={{height:42, width:42, borderRadius:21}}>
    {data?.profilePicUri &&  (
<Image source={{uri:data?.profilePicUri}} style={{height:'100%', width:'100%',borderRadius:22, backgroundColor:'gray'}} />
    )}
  </View>

  <View style={{height:50, flex:1, paddingHorizontal:16, paddingVertical:4}}>
    <View style={{height:'100%', width:'100%', borderRadius:24, backgroundColor:'rgb(239, 239, 239)', flexDirection:'row', alignItems:'center', paddingHorizontal:14}}>
      <SearchIcon size={24} color={'lightgray'} fromTop={true} />

    </View>

  </View>
</View>

        <MainTabBar {...{ routes, setIndex, index}} />
      
    </Animated.View>
  )
}

export default MainHeader