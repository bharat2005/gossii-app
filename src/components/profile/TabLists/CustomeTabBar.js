import { View, Text, Dimensions, FlatList, Pressable } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const icons = [
    (c) => <Ionicons name="tv-outline" size={18} color={c ? 'black' : 'gray'} />,
   (c)=>  <Ionicons name="image-outline" size={18} color={c ? 'black' : 'gray'} />,
   (c)=>  <Feather name="heart" size={18} color={c ? 'black' : 'gray'} />,
   (c)=>  <Feather name="bookmark" size={18} color={c ? 'black' : 'gray'} />,

]



const CustomeTabBar = ({routes, index, setIndex}) => {
    const flatListRef = useRef(null)

    useEffect(()=>{
        if(flatListRef.current){
            flatListRef.current.scrollToIndex({
                index,
                animation:true,
                viewPosition:0.5
            })
        }

    },[index])




    const renderItem = ({item, index:i}) =>{
        return (
            <View style={{height:44, justifyContent:'center', alignItems:'center', marginHorizontal:8,}}>
            <Pressable onPress={()=> setIndex(i)} style={{height:'100%', paddingHorizontal:12,  justifyContent:'center', alignItems:'center', flexDirection:'row', gap:3 }}>
               {icons[i](!!(index === i))}
               
               <Text style={{fontFamily:'regular', fontSize:15, color: index == i ? 'black' : 'gray'}}>
                    {item.title}
                </Text>
            </Pressable>
               <LinearGradient colors={i === index ? [Colors.MAINPINK, Colors.MAINORANGE] : ['white', 'white']} start={{x:0, y:0}} end={{x:1, y:0}} style={{height:4, width:'80%', backgroundColor:'red', borderRadius:34}} />
            </View>
        )
    }


  return (
    <View style={{width:Dimensions.get('screen').width, backgroundColor:'white', flexDirection:'row', marginTop:'auto'}}>

        
        <FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={routes}
        contentContainerStyle={{paddingHorizontal:8}}
        keyExtractor={(item, index)=> index.toString()}
        renderItem={renderItem}
        />

      
    </View>
  )
}

export default CustomeTabBar