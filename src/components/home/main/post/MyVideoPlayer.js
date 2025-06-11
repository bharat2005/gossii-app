import { View, Text, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useVideoPlayer,  VideoView } from 'expo-video'


const MyVideoPlayer = ({uri, autoplay, preview}) => {
  const player = useVideoPlayer(uri, player => {
    player.loop = true
  })

  useEffect(()=> {
    if(autoplay){
      player.play()
    } else {
      player.pause()
    }

  },[autoplay])


  return (
    <VideoView player={player} style={{height:'100%', width:preview ? Dimensions.get('screen').width * 0.90   : '96%', borderRadius:12, marginHorizontal:'auto'}} 
    contentFit='cover'
    nativeControls={false}
    
    />
  )
}

export default MyVideoPlayer