import { View, Text, Pressable } from 'react-native'
import React from 'react'
import CommentButton from './CommentButton'
import LikeButton from './LikeButton'
import SaveButton from './SaveButton'
import ShareButton from './ShareButton'

const PostMoreOptions = ({data, fromCommentScreen}) => {
  return (
    <View style={{height:60, width:'100%', flexDirection:'row', justifyContent:"flex-end"}}>

<View style={{flexDirection:'row', gap:38, paddingHorizontal:18}}> 
     {!fromCommentScreen && (
        <CommentButton data={data} />
     )} 

      <LikeButton  data={data} />
</View>


<View style={{flexDirection:'row', gap:22, paddingHorizontal:18}}> 
       <SaveButton   data={data}  />

      <ShareButton data={data} />

</View>

 



    </View>
  )
}

export default PostMoreOptions