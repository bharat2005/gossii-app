import { View, Text } from 'react-native'
import React from 'react'
import PostHeader from './PostHeader'
import PostTextView from './PostTextView'
import PostMediaView from './PostMediaView'
import PostReactionList from './PostReactionList'
import PostMoreOptions from './PostMoreOptions'

const Post = ({data, fromCommentScreen=false, autoplay, fromProfilePost=false}) => {


  return (
    <View style={{ width:'94%', backgroundColor:'white', borderRadius:12, marginHorizontal:'auto', elevation:fromCommentScreen ? 0 : 2}}>

        <PostHeader data={data} fromProfilePost={fromProfilePost} />
        <PostTextView data={data} />
        <PostMediaView data={data} autoplay={autoplay} />
        <PostReactionList data={data} />
        <PostMoreOptions data={data} fromCommentScreen={fromCommentScreen} />
     
    </View>
  )
}

export default Post