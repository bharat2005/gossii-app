import { View, Text, Dimensions, Pressable, Share } from 'react-native'
import React, { useRef } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import ActionSheet from 'react-native-actions-sheet';
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';

const PostProfileTabBar = ({insets, username, setModalOpen, userUid}) => {
  const sheetRef = useRef(null)
  const router = useRouter()
  return (
    <View style={{width:Dimensions.get('screen').width, height:50 + insets.top, backgroundColor:'white', position:'absolute', top:0, lefft:0, right:0,zIndex:10}}>
      <View style={{height:50, width:'100%', marginTop:'auto',  flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

    <Pressable onPress={()=> router.back()} style={{justifyContent:'center', alignItems:'center', marginHorizontal:8, position:'absolute', left:0 }}>
<Entypo name="chevron-left" size={32} color="gray" />
      </Pressable>

      <View>
        <Text style={{fontFamily:'bold', fontSize:20}}>
            {username}
        </Text>
      </View>


      

    <Pressable onPress={()=> sheetRef.current.show()} style={{justifyContent:'center', alignItems:'center', marginHorizontal:20, position:'absolute', right:0 }}>
<Entypo name="dots-three-horizontal" size={24} color="gray" />
      </Pressable>

      </View>


      <ActionSheet ref={sheetRef} gestureEnabled >
              <View style={{width:Dimensions.get('screen').width, padding:18}}>

          <Pressable onPress={()=> {Share.share({message:'/////'})}} style={{height:55, width:'100%', flexDirection:'row',  alignItems:'center', gap:14}}>
            <Feather name="share" size={24} color="black" />
             <Text style={{fontFamily:'regular', fontSize:16}}>
                Share User
            </Text>
          </Pressable>

          
          <Pressable onPress={()=> {sheetRef.current.hide();setModalOpen(true)}} style={{height:55, width:'100%', flexDirection:'row',  alignItems:'center', gap:14}}>
           <MaterialCommunityIcons name="block-helper" size={24} color="red" />
            <Text style={{fontFamily:'regular', fontSize:16, color:'red'}}>
                Block this User
            </Text>
          </Pressable>


                    
          <Pressable onPress={()=> { sheetRef.current.hide(); router.push({pathname:'/reportUser', params:{userUid}}) }} style={{height:55, width:'100%', flexDirection:'row',  alignItems:'center', gap:14}}>
            <Octicons name="report" size={22} color="red" />
            <Text style={{fontFamily:'regular', fontSize:16, color:'red'}}>
                Report this User
            </Text>
          </Pressable>

        <Pressable onPress={()=>sheetRef.current.hide()} style={{height:50, width:'100%', marginVertical:8, justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontFamily:'semibold', fontSize:18}}>Cancel</Text>
        </Pressable>


        </View>
      </ActionSheet>



    </View>
  )
}

export default PostProfileTabBar