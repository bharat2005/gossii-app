import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Button } from 'react-native-paper'
import Colors from '../../constants/Colors'

const ColorButton = ({text='Button',
   onPress=()=>console.log('pressed'),
    fontSize=16,
     nunito='regular',
     color='white',
     loading=false,
     disabled=false
,      mode='contained'
    }) => {

      


return (
 <LinearGradient
  colors={disabled ? ['lightgray','lightgray'] : [Colors.MAINPINK, Colors.MAINORANGE]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={{
    borderRadius: 24,
  }}
>
  <Button
  disabled={disabled || loading}
  loading={loading}
    mode={mode}
    onPress={onPress}
    contentStyle={{ backgroundColor: 'transparent', paddingVertical : 6 }}
    labelStyle={{ color:disabled ? 'gray' :  color, fontFamily:nunito, fontSize:fontSize }} 
    style={{ backgroundColor: 'transparent' }} 
  >
            {text}
        </Button>
    </LinearGradient>
)
}

export default ColorButton