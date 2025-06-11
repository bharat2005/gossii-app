import { View, Text } from 'react-native'
import React from 'react'
import { fetchMyPosts } from '../../../../hooks/profile/fetchMyPosts'

const MyPostCounts = () => {
    const {data} = fetchMyPosts()
  return (
     <View style={{marginHorizontal:18, height:'100%', justifyContent:'center', alignItems:'center'   }}>
          <Text style={{fontFamily:'regular', fontSize:16, color:'gray'}}>
            <Text style={{fontFamily:'bold', fontSize:18, color:'black'}}>
            {data ? data.length : 0}
            </Text>{" "}{" "}
    
             Posts
            </Text>
    </View>
  )
}

export default MyPostCounts