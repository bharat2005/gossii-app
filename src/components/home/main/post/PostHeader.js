import { View, Text, Pressable, Image, Dimensions, Share } from 'react-native'
import React, { useRef } from 'react'
import ActionSheet, {} from 'react-native-actions-sheet'
import { useRouter } from 'expo-router';
import PostHeaderMenu from './PostHeaderMenu';

const PostHeader = ({data, fromProfilePost}) => {
  const router = useRouter()


  return (
    <View style={{height:50, width:'100%', flexDirection:'row', alignItems:'center'}}>

        <Pressable onPress={fromProfilePost ? null : ()=> router.push({pathname:'/postProfile', params:{userUid: data?.uid, username: data?.username}})} style={{flexDirection:'row', paddingHorizontal:8}}>

            <View style={{height:40, width:40, borderRadius:20, backgroundColor:'gray'}}>
                <Image source={{uri:data?.profilePicUri}} style={{height:'100%', width:'100%', borderRadius:20}} />
            </View>

            <View style={{height:40, justifyContent:'center', alignItems:'center',  paddingHorizontal:10}}>
                <Text style={{fontFamily:'medium', fontSize:18}}>{data?.username}</Text>
            </View>



        </Pressable>


        <PostHeaderMenu postId={data?.postId} userUid={data?.uid} />





    </View>
  )
}

export default PostHeader