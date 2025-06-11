import { View, Text } from 'react-native'
import React from 'react'
import { fetchUserPostCount } from '../../../hooks/postProfile/fetchUserPostCount'

const UserPostCountView = ({userUid}) => {
    const {data} = fetchUserPostCount(userUid)



  return (
    <View style={{marginHorizontal:18, height:'100%', justifyContent:'center', alignItems:'center'   }}>

      <Text style={{fontFamily:'regular', fontSize:16, color:'gray'}}>
        <Text style={{fontFamily:'bold', fontSize:18, color:'black'}}>
        {data}
        </Text>{" "}{" "}

         Posts
        </Text>

    </View>
  )
}

export default UserPostCountView