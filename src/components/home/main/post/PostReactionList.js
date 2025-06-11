import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { fetchReactions } from '../../../../hooks/post/fetchReactions'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useReactToPost } from '../../../../hooks/post/useReactToPost';
import LottieView, {} from 'lottie-react-native'
import Colors from '../../../../constants/Colors';


const reactionList = [
    {
        emojiId:'happy',
        icon:require('../../../../../assets/lotties/fire.json')
    },
        {
        emojiId:'sad',
        icon:require('../../../../../assets/lotties/octopus.json')
    },
        {
        emojiId:'cry',
        icon:require('../../../../../assets/lotties/cat.json')
    },
        {
        emojiId:'fun',
        icon:require('../../../../../assets/lotties/hand.json')
    }
]


const PostReactionList = ({data}) => {
    const {data:reactionsData} = fetchReactions(data?.postId)
    const {mutate, error} = useReactToPost(data?.postId)

    const handleReaction = (emojiId) => {
        mutate({
            emojiId
        })
    }





  return (
    <View style={{height: 60, width:'100%',flexDirection:'row', gap:24, justifyContent:'flex-end', alignItems:'center', paddingHorizontal:18}}>

        {reactionList.map(item => (
            <Pressable onPress={()=> handleReaction(item?.emojiId)} key={item.emojiId} style={{ height:'100%', justifyContent:'center', alignItems:'center'}}>
              
              <View style={{justifyContent:'center', alignItems:"center", height:46, width:50, borderRadius:25, borderWidth:2, borderColor:reactionsData?.userReation === item.emojiId ? Colors.MAINORANGE : 'white'}}>
                <LottieView source={item?.icon} style={{height:34, width:34}} autoPlay /> 
              </View>
              

                <View style={{position:'absolute', top:4, backgroundColor:'white',  right:-10, borderWidth:2, height:24, width:30, borderRadius:12, justifyContent:'center', alignItems:'center',borderColor:reactionsData?.userReation === item.emojiId ? Colors.MAINORANGE : 'white' }}>
<Text style={{fontFamily:'bold'}}>{reactionsData?.count[item?.emojiId] || 0}</Text>
                </View>
                


            </Pressable>
        ))}
     
    </View>
  )
}

export default PostReactionList