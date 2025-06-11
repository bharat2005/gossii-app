import { View, Text, Dimensions, Image, Pressable } from 'react-native'
import React from 'react'
import Animated, {} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomeTabBar from '../TabLists/CustomeTabBar'
import { useCurrentUser } from '../../../hooks/user/useCurrentUser'
import { useAuth } from '../../../contexts/AuthContextProvider'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import ProfileCountsView from './ProfileCountsView'
import ProfileButtons from './ProfileButtons'
import { useRouter } from 'expo-router'

const ProfileView = ({animationStyleScroll, routes, index, setIndex}) => {
    const insets = useSafeAreaInsets()
    const {data:userData} = useCurrentUser()
    const {user} = useAuth()
    const router = useRouter()

  return (
    <Animated.View style={[{width:Dimensions.get('screen').width, height:440, backgroundColor:'white', position:'absolute', top:0, left:0, right:0, paddingTop:insets.top + 34, zIndex:10, alignItems:'center'},animationStyleScroll]}>

    <View style={{width:'100%', flexDirection:'row', paddingHorizontal:18, paddingVertical:12}}>

        <View style={{height:86, width:86, borderRadius:43, backgroundColor:'black'}}>
            <Image source={{uri:userData?.profilePicUri}} style={{height:'100%', width:'100%', borderRadius:43}} />
        </View>

        <View style={{ flex:1, paddingHorizontal:18,paddingVertical:8}}>
        <Text style={{fontSize:24, fontFamily:'semibold'}}>
                {userData?.username}
        </Text>

      <Text style={{color:'darkgray', fontSize:16, fontWeight:'400'}}>
        {user?.email}
      </Text>
        </View>


    </View>



    <View style={{backgroundColor:"white", width:'100%', paddingHorizontal:18, paddingVertical:8}}>
     <Text style={{fontFamily:'regular', fontSize:16}}>
    {userData?.bio}
  </Text>
</View>


    <ProfileCountsView />

    <ProfileButtons />


   <CustomeTabBar routes={routes} {...{index, setIndex}}/>


   <Pressable onPress={()=> router.push('/settings')} style={{position:'absolute', top:insets.top + 12, right:24}}>
<Feather name="settings" size={24} color="black" />
   </Pressable>
    </Animated.View>
  )
}

export default ProfileView