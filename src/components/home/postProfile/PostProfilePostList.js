import { View, Text, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import Animated from 'react-native-reanimated'
import { fetchUserPosts } from '../../../hooks/postProfile/fetchUserPosts'
import Post from '../main/post/Post'


const PostProfilePostList = ({scrollHandler, userUid}) => {
  const {data, error} = fetchUserPosts(userUid)
  const [isVisble , setIsVisible] = useState(null)



  const viewableItemRef = useRef(({viewableItems}) => {
      if(viewableItems.length > 0 ){
          setIsVisible(viewableItems[0]?.index)
      }
    })
  const visibilityRef = useRef({viewAreaCoveragePercentThreshold: 30})


  return (
<View style={{flex:1}}>

    <Animated.FlatList
    onScroll={scrollHandler}
    keyExtractor={(item, index)=> index.toString()}
    data={data}
    contentContainerStyle={{gap:18, paddingTop:440}}
    renderItem={({item, index})=> <Post data={item} autoplay={isVisble === index} fromProfilePost={true} />}
    onViewableItemsChanged={viewableItemRef.current}
    viewabilityConfig={visibilityRef.current}
    />

</View>
  )
}

export default PostProfilePostList