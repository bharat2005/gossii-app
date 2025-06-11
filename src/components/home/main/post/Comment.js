import { View, Text, Image, Pressable, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import * as Haptics from 'expo-haptics'
import ActionSheet from 'react-native-actions-sheet'
import { useReportComment } from '../../../../hooks/post/useReportComment'
import Octicons from '@expo/vector-icons/Octicons';
import {format, formatRelative} from 'date-fns'

const Comment = ({data, handleToast}) => {
  const sheetRef = useRef()
  const {mutate} = useReportComment()


  const handleLognPress = () =>  {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    sheetRef.current.show()

  }

  const handleReportComment = () =>{
    sheetRef.current.hide()
    mutate({userUid: data?.uid},{
      onSuccess:()=>{
        handleToast()
      }
    })
    
  }

  const tryIt = (time) => {
    let date;
    if (typeof time.seconds === 'number'){
       date = new Date(time.seconds * 1000)
    } else {
      date = time
    }

    return formatRelative(date, new Date())

  }




  return (

    <View style={{width:'100%', flexDirection:'row', padding:6, height:140, borderTopWidth:0.5, borderBottomWidth:0.5, borderTopColor:'lightgray', borderBottomColor:'lightgray'}}>

      <View style={{height:'100%', backgroundColor:'white'}}>
        
     <View style={{height:40, width:40, borderRadius:20, backgroundColor:'gray'}}>
         <Image style={{height:'100%',  width:'100%', borderRadius:20}} source={{uri:data?.profilePicUri}} />
    </View>

      </View>


    <Pressable style={{flex:1, height:'100%', backgroundColor:"white"}}  onLongPress={handleLognPress}>

      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:"center"}}>

        <View style={{height:'100%', paddingHorizontal:12}}>
          <Text style={{fontFamily:'semibold', fontSize:16}}>{data?.username}</Text>
        </View>


        <View style={{height:'100%', paddingHorizontal:12}}>
                <Text style={{fontFamily:'semibold', fontSize:14, color:'gray'}}>{tryIt(data?.createdAt)}</Text>
        </View> 

      </View>


      <View style={{flex:1, width:'100%', padding:12}}>

        <Text style={{fontFamily:'regular', fontSize:18}}>
          {data?.text}
        </Text>

      </View>

    </Pressable>


           <ActionSheet gestureEnabled ref={sheetRef} >
        <View style={{width:Dimensions.get('screen').width, padding:18}}>

     <Pressable onPress={handleReportComment} style={{height:50, width:'100%', flexDirection:'row',  alignItems:'center', gap:14}}>
               <Octicons name="report" size={22} color="red" />
    <Text style={{fontFamily:'regular', fontSize:16, color:'red'}}>Report this comment</Text>
        </Pressable>

        <Pressable onPress={()=>sheetRef.current.hide()} style={{height:50, width:'100%', marginVertical:8, justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontFamily:'semibold', fontSize:18}}>Cancel</Text>
        </Pressable>

        </View>
     </ActionSheet>

    </View>
  )
}

export default Comment