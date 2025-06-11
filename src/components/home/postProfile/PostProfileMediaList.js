import { View, Text, FlatList, Dimensions, Image } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import { fetchUserMedia } from '../../../hooks/postProfile/fetchUserMedia'


const PostProfileMediaList = ({scrollHandler, userUid}) => {
  const {data} = fetchUserMedia(userUid)


  const renderItem  = ({item, index}) =>{
    return (
      <View style={{width:Dimensions.get('screen').width / 3, height:Dimensions.get('screen').width / 3 }}>
        {item && (
        <Image source={{uri:item}} style={{height:'100%', width:'100%'}} />
        )}


      </View>
    )
  }

  return (
<View style={{flex:1}}>

    <Animated.FlatList
    onScroll={scrollHandler}
    numColumns={3}
    contentContainerStyle={{ paddingTop:440}}
    keyExtractor={(item, index)=> index.toString()}
    data={data}
    renderItem={renderItem}
    />

</View>
  )
}

export default PostProfileMediaList