import { View, Text } from 'react-native'
import React from 'react'
import { fetchMySaves } from '../../../../hooks/profile/fetchMySaves'

const MySavesCounts = () => {
  const {data} = fetchMySaves()
  return (
     <View style={{marginHorizontal:18, height:'100%', justifyContent:'center', alignItems:'center'   }}>
          <Text style={{fontFamily:'regular', fontSize:16, color:'gray'}}>
            <Text style={{fontFamily:'bold', fontSize:18, color:'black'}}>
                  {data ? data.length : 0}
            </Text>{" "}{" "}
    
             Saves
            </Text>
    </View>
  )
}

export default MySavesCounts