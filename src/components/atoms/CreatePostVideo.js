import { View, Text } from 'react-native'
import React from 'react'
import { useVideoPlayer, VideoView } from 'expo-video'

const CreatePostVideo = ({uri}) => {
    const player = useVideoPlayer(uri , player =>{
        player.play();
        player.loop = true
    })
  return (
<VideoView player={player} style={{height:'100%', width:'100%', borderRadius:12}} contentFit='cover' allowsFullscreen/>
  )
}

export default CreatePostVideo