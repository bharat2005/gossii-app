import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../../constants/Colors'

const MainTabBar = ({ routes, setIndex, index}) => {
  return (
    <View style={{width:'100%', justifyContent:'center', alignItems:'center', marginTop:'auto', flexDirection:'row'}}>

<View style={{height:44, width:'30%',justifyContent:'center', alignItems:'center', marginHorizontal:8}}>
            <Pressable onPress={()=> setIndex(0)} style={{ height:'100%', width:'100%',  justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontFamily:'medium', fontSize:15}}>
                Recommanded
            </Text>
        </Pressable>


        <LinearGradient colors={index === 0 ? [Colors.MAINPINK, Colors.MAINORANGE] : ['white',  'white']} start={{x:0, y:0}} end={{x:1, y:0}} style={{height:3, width:'80%', backgroundColor:'red', borderRadius:34}} />

</View>

<View style={{height:44, width:'30%',justifyContent:'center', alignItems:'center', marginHorizontal:8}}>
            <Pressable onPress={()=> setIndex(1)} style={{ height:'100%', width:'100%',  justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontFamily:'medium', fontSize:15}}>
                NearBy
            </Text>
        </Pressable>
                <LinearGradient colors={index === 1 ? [Colors.MAINPINK, Colors.MAINORANGE] : ['white',  'white']} start={{x:0, y:0}} end={{x:1, y:0}} style={{height:3, width:'80%', backgroundColor:'red', borderRadius:34}} />
        </View>
      
    </View>
  )
}

export default MainTabBar