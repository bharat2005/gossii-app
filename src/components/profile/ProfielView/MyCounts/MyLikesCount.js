import { View, Text } from 'react-native'
import React from 'react'
import { fetchMyLikes } from '../../../../hooks/profile/fetchMyLikes'

const MyLikesCounts = () => {
    const {data} = fetchMyLikes()

  return (
     <View style={{marginHorizontal:18, height:'100%', justifyContent:'center', alignItems:'center'   }}>
          <Text style={{fontFamily:'regular', fontSize:16, color:'gray'}}>
            <Text style={{fontFamily:'bold', fontSize:18, color:'black'}}>
                  {data ? data.length : 0}
            </Text>{" "}{" "}
    
             Likes
            </Text>
    </View>
  )
}

export default MyLikesCounts