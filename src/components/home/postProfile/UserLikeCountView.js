import { View, Text } from 'react-native'
import React from 'react'
import { fetchUserLikeCount } from '../../../hooks/postProfile/fetchUserLikeCount'

const UserLikeCountView = ({userUid}) => {
  const {data, error} = fetchUserLikeCount(userUid)


    
  return (
    <View style={{marginHorizontal:8, height:'100%', justifyContent:'center', alignItems:'center'  }}>
      <Text style={{fontFamily:'regular', fontSize:16, color:'gray'}}>
        <Text style={{fontFamily:'bold', fontSize:18, color:'black'}}>
        {data}
        </Text>{" "}{" "}

         Likes
        </Text>
    </View>
  )
}

export default UserLikeCountView