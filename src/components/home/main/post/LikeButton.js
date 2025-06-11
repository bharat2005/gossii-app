import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { fetchLikes } from '../../../../hooks/post/fetchLikes';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useLike } from '../../../../hooks/post/useLike';
import Colors from '../../../../constants/Colors';

const LikeButton = ({data}) => {
  const {data:likesData} = fetchLikes(data?.postId)
  const {mutate} = useLike(data?.postId)

  const handleLikePress = () =>{
    mutate({liked: likesData?.likeByUser})
  }


  return (
<Pressable onPress={handleLikePress} style={{height:'100%',   justifyContent:'center', alignItems:'center', flexDirection:'row', gap:6}}>
{likesData?.likeByUser ? (
   <AntDesign name="heart" size={26} color={Colors.MAINPINK} />
) : (
   <AntDesign name="hearto" size={26} color={'gray'} />
)}

   <Text style={{fontFamily:'medium', color: likesData?.likeByUser ? Colors.MAINPINK : 'black', fontSize:16 }}>
    {likesData?.count || 0}
   </Text>

</Pressable>
  )
}

export default LikeButton