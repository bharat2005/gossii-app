import { View, Text, Pressable, Dimensions, Share } from 'react-native'
import React, { useRef } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import ActionSheet from 'react-native-actions-sheet'
import Octicons from '@expo/vector-icons/Octicons';
import { fetchSaves } from '../../../../hooks/post/fetchSaves';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useSave } from '../../../../hooks/post/useSave';
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';

const PostHeaderMenu = ({postId, userUid}) => {
    const sheetRef = useRef(null)
    const {data:saveData} = fetchSaves(postId)
      const {mutate} = useSave(postId)
      const router = useRouter()


const handleSave = () =>{
    mutate({
        saved:saveData
    })
   setTimeout(()=> {
sheetRef.current.hide()
   }, 200) 
}

  return (
    <>
    <Pressable onPress={()=> sheetRef.current.show()} style={{marginLeft:'auto', paddingHorizontal:18}}>
      <MaterialCommunityIcons name="dots-horizontal" size={24} color="gray" />
                </Pressable>


              
      <ActionSheet ref={sheetRef} gestureEnabled>
      <View style={{width:Dimensions.get('screen').width, padding:18}}>

          <Pressable onPress={()=> {Share.share({message:'/////'})}} style={{height:55, width:'100%', flexDirection:'row',  alignItems:'center', gap:14}}>
            <Feather name="share" size={24} color="black" />
             <Text style={{fontFamily:'regular', fontSize:16}}>
                Share Post
            </Text>
          </Pressable>

          
          <Pressable onPress={handleSave}  style={{height:55, width:'100%', flexDirection:'row',  alignItems:'center', gap:14}}>
              <FontAwesome name="bookmark" size={24} color={saveData ? 'orange' : 'gray'}/>
            <Text style={{fontFamily:'regular', fontSize:16}}>
                {saveData ? 'UnSave Post' : 'Save Post'}
            </Text>
          </Pressable>


            <Pressable onPress={()=> {sheetRef.current.hide(); router.push({pathname:'/reportPost', params:{userUid}})}} style={{height:55, width:'100%', flexDirection:'row',  alignItems:'center', gap:14}}>
            <Octicons name="report" size={22} color="red" />
            <Text style={{fontFamily:'regular', fontSize:16, color:'red'}}>
                Report this post
            </Text>
          </Pressable>

        <Pressable onPress={()=>sheetRef.current.hide()} style={{height:50, width:'100%', marginVertical:8, justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontFamily:'semibold', fontSize:18}}>Cancel</Text>
        </Pressable>


        </View>

      </ActionSheet>

      
    
</>
  )
}

export default PostHeaderMenu