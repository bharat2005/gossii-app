import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import { fetchMyPosts } from '../../../hooks/profile/fetchMyPosts'
import Post from '../../home/main/post/Post'
import { fetchMyMedia } from '../../../hooks/profile/fetchMyMedia'

const MyPostsList = ({scrollHandler}) => {
  const {data, error} = fetchMyMedia()

  const renderItem = ({item, index}) =>{
    return (
      <View style={{width:Dimensions.get('screen').width / 3, height:Dimensions.get('screen').width / 3 }}>
        <Image source={{uri:item}} style={{height:'100%', width:'100%'}}/>

      </View>
    )
  }

  return (
    <View style={{flex:1, width:Dimensions.get('screen').width}}>
    <Animated.FlatList 
    numColumns={3}
    onScroll={scrollHandler}
    data={data}
    contentContainerStyle={{ paddingTop:440}}
    keyExtractor={(item, index)=> index.toString()}
    renderItem={renderItem}
    />
    
    </View>
  )
}

export default MyPostsList