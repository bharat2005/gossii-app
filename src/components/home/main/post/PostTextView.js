import { View, Text } from 'react-native'
import React from 'react'

const PostTextView = ({data}) => {
  return (
    <View style={{minHeight:60, width:'100%', backgroundColor:'white', justifyContent:'center', paddingHorizontal:18, paddingVertical:8}}>

        <Text style={{fontFamily:'light', fontSize:18}}>
            {data?.text}
        </Text>
     
    </View>
  )
}

export default PostTextView