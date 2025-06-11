import { View, Text, Dimensions, Pressable, Image, Share } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import { fetchPostUser } from '../../../hooks/postProfile/fetchPostUser'
import UserPostCountView from './UserPostCountView'
import { Button } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import UserLikeCountView from './UserLikeCountView'
import Feather from '@expo/vector-icons/Feather'
import Colors from '../../../constants/Colors'

const PostProfileTopView = ({insets, setIndex, index, topViewAnimation, userUid}) => {
    const {data} = fetchPostUser(userUid)


  return (
    <Animated.View style={[{width:Dimensions.get('screen').width, height:430, position:'absolute', top:0, backgroundColor:'white', zIndex:5, paddingTop:insets.top + 50}, topViewAnimation]}>

    <View style={{width:'100%', flexDirection:'row', paddingHorizontal:12, paddingVertical:8}}>

        <View style={{height:86, width:86, borderRadius:43, backgroundColor:'black'}}>
            <Image source={{uri:data?.profilePicUri}} style={{height:'100%', width:'100%', borderRadius:43}} />
        </View>

        <View style={{ flex:1, padding:18, justifyContent:'center'}}>
            <Text style={{fontSize:24, fontFamily:'semibold'}}>
                {data?.username}
            </Text>
        </View>


    </View>

    <View style={{backgroundColor:"white", width:'100%', paddingHorizontal:18, paddingVertical:8}}>
        <Text style={{fontFamily:'regular', fontSize:16}}>
            {data?.bio}
        </Text>
    </View>

    <View style={{height:44, width:'100%', backgroundColor:'white', flexDirection:'row'}}>
        <UserPostCountView userUid={userUid} />

        <UserLikeCountView userUid={userUid} />
    </View>

    <View style={{paddingVertical:8, paddingHorizontal:18}}>
            <Pressable onPress={()=> Share.share({message:'...'})} style={{flexDirection:'row', justifyContent:'center', alignItems:'center', height:44, borderWidth:1.4, borderColor:'gray', borderRadius:24, gap:12}}>
<Feather name="share" size={22} color="gray" />
                <Text style={{color:'gray', fontFamily:'medium', fontSize:16}}>
                    Share
                </Text>


            </Pressable>
    </View>



    <View style={{height:40, width:'100%', marginTop:'auto', backgroundColor:'white', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <View style={{ flex:1, height:'100%'}}>
            <Pressable onPress={()=> setIndex(0)} style={{height:'100%', width:'100%',   justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontFamily:'semibold', fontSize:16}}>
                    Posts
                </Text>
            </Pressable>

{index === 0 && (
 <LinearGradient colors={[Colors.MAINPINK, Colors.MAINORANGE]} start={{x:0, y:0}} end={{x:1, y:0}} style={{height:4, width:'80%', borderRadius:24, marginHorizontal:'auto'}}/>
)}
   
            </View>



           <View style={{ flex:1, height:'100%'}}>
        <Pressable onPress={()=> setIndex(1)} style={{height:'100%', width:'100%',   justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontFamily:'semibold', fontSize:16}}>
                    Media
                </Text>
            </Pressable>
            

            {index === 1 && (
 <LinearGradient colors={[Colors.MAINPINK, Colors.MAINORANGE]} start={{x:0, y:0}} end={{x:1, y:0}} style={{height:4, width:'80%', borderRadius:24, marginHorizontal:'auto'}}/>
)}
   
   </View>


        </View>

    </Animated.View>
  )
}

export default PostProfileTopView