import { View, Text, FlatList } from 'react-native'
import React, { useMemo, useState } from 'react'
import Animated, { RotateOutUpRight } from 'react-native-reanimated'
import { useBlockedUsers } from '../../../hooks/post/useBlockedUsers'
import { fetchInfinitePosts } from '../../../hooks/post/fetchInfinitePosts'
import Post from './post/Post'
import { ActivityIndicator } from 'react-native-paper'
import Colors from '../../../constants/Colors'
import { useRef } from 'react'

const RecommendedTab = ({scrollHandler}) => {
  const [isVisble, setIsVisible] = useState(null)
  const {data: blockedUsersList} = useBlockedUsers()
  const {data:postsList, error, refetch, isRefetching, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading} = fetchInfinitePosts(blockedUsersList)

  const cleanedPostsList = useMemo(()=> {
    return postsList?.pages.flatMap(item => item.data)
  })

const viewItemRef = useRef(({viewableItems})=> {
      if(viewableItems.length > 0){
        setIsVisible(viewableItems[0]?.index)
      }
    })
const visibilityRef = useRef({viewAreaCoveragePercentThreshold:30})


  return (
<View style={{flex:1}}>

    <Animated.FlatList
    onEndReachedThreshold={0}
   // onRefresh={refetch}
    progressViewOffset={130}
    //refreshing={isRefetching}
    onEndReached={(hasNextPage && !isFetchingNextPage) && fetchNextPage}
    onScroll={scrollHandler}
    data={cleanedPostsList}
    contentContainerStyle={{gap:22, paddingTop:120, paddingBottom:18}}
    keyExtractor={(item, index)=> index.toString()}
    renderItem={({item, index})=> <Post data={item} autoplay={isVisble == index} />}
           ListFooterComponent={
        isFetchingNextPage ? (

              <View style={{paddingVertical:18, height:140, alignItems:'center'}}>
    <ActivityIndicator size={38} color={Colors.MAINORANGE} />
            </View>
        
        ) :  null
     
    }
    onViewableItemsChanged={viewItemRef.current}
    viewabilityConfig={visibilityRef.current}
    />

</View>
  )
}

export default RecommendedTab