import { View, Text, Dimensions, Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useRouter } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

const ReportUserTabBar = ({selectedOption, textReason, handleReportPress, isPending}) => {
    const router = useRouter()

  return (
    <View style={{height:55, width:Dimensions.get('screen').width, flexDirection:'row',  alignItems:'center', justifyContent:'center'}}>

        <Pressable onPress={()=> router.back()} style={{marginHorizontal:12, position:'absolute', left:0}} >
            <AntDesign name="close" size={24} color="gray" />
        </Pressable>

        <View>
        <Text style={{fontFamily:'bold', fontSize:20}}>
                Report User
            </Text>
        </View>



        <Pressable disabled={!textReason || !selectedOption} onPress={handleReportPress} style={{position:'absolute', right:0, marginHorizontal:18,}}>
            {isPending ? (
                <ActivityIndicator />
            ): (
             <Text style={{color:!textReason || !selectedOption ? 'gray' : '#24a4d8', fontFamily:'regular', fontSize:16}}>
                inform
            </Text>

            )}
        </Pressable>




      



    </View>
  )
}

export default ReportUserTabBar