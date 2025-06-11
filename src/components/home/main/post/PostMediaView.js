import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'expo';
import MyVideoPLayer from './MyVideoPlayer'



const PostMediaView = ({data, autoplay}) => {



  return (
    <View style={{width:'100%', height:434, backgroundColor:'white'}}>

        {data?.mediaType === 'image' ? (
            <Image source={{uri:data?.mediaUri}} style={{height:'100%', width:'96%', borderRadius:12, marginHorizontal:'auto'}} />
        ) : (   
           <MyVideoPLayer uri={data?.mediaUri} autoplay={autoplay} />
        )}



    </View>

  )
}

export default PostMediaView

