import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import { fetchMyPosts } from '../../../hooks/profile/fetchMyPosts'
import Post from '../../home/main/post/Post'
import { fetchMySaves } from '../../../hooks/profile/fetchMySaves'

const MySavesList = ({scrollHandler}) => {
  const {data} = fetchMySaves()


  return (
    <View style={{flex:1, width:Dimensions.get('screen').width}}>
    <Animated.FlatList 
    onScroll={scrollHandler}
    data={data}
    contentContainerStyle={{gap:18, paddingTop:440}}
    keyExtractor={(item, index)=> index.toString()}
    renderItem={({item, index})=> <Post data={item} />}
    />
    
    </View>
  )
}

export default MySavesList