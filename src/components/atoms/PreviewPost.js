import { View, Text, Pressable, Image, Dimensions } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MyVideoPlayer from '../home/main/post/MyVideoPlayer'
import LottieView from 'lottie-react-native'
import Colors from '../../constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Feather from '@expo/vector-icons/Feather'
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'


const reactionList = [
    {
        emojiId:'happy',
        icon:require('../../../assets/lotties/fire.json')
    },
        {
        emojiId:'sad',
        icon:require('../../../assets/lotties/octopus.json')
    },
        {
        emojiId:'cry',
        icon:require('../../../assets/lotties/cat.json')
    },
        {
        emojiId:'fun',
        icon:require('../../../assets/lotties/hand.json')
    }
]

const PreviewPost = ({data, text, mediaType, mediaUri}) => {

  
  return (
   <View style={{ width:'94%', backgroundColor:'white', borderRadius:12}}>

        <View style={{height:50, width:'100%', flexDirection:'row', alignItems:'center'}}>

        <Pressable style={{flexDirection:'row', paddingHorizontal:8}}>

            <View style={{height:40, width:40, borderRadius:20, backgroundColor:'gray'}}>
                <Image  style={{height:'100%', width:'100%', borderRadius:20}} source={{uri:data?.profilePicUri}} />
            </View>

            <View style={{height:40, justifyContent:'center', alignItems:'center',  paddingHorizontal:10}}>
                <Text style={{fontFamily:'medium', fontSize:18}}>{data?.username}</Text>
            </View>



        </Pressable>


           <Pressable  style={{marginLeft:'auto', paddingHorizontal:18}}>
      <MaterialCommunityIcons name="dots-horizontal" size={24} color="gray" />
                </Pressable>





    </View>

        <View style={{minHeight:60, width:'100%', justifyContent:'center', paddingHorizontal:18, paddingVertical:8}}>
    
            <Text style={{fontFamily:'light', fontSize:18}}>
             {text}   
            </Text>
         
        </View>


            <View style={{width:Dimensions.get('screen').width * 0.94, height:434, backgroundColor:'white'}}>

        {mediaType === 'image' ? (
            <Image source={{uri:mediaUri}} style={{height:'100%', width:'96%', borderRadius:12, marginHorizontal:'auto'}} />
        ) : (   
            <MyVideoPlayer uri={mediaUri} autoplay={true} preview={true} />
        
        )}



    </View>



        <View style={{height: 60, width:'100%',flexDirection:'row', gap:24, justifyContent:'flex-end', alignItems:'center', paddingHorizontal:18}}>
    
            {reactionList.map(item => (
                <Pressable  key={item.emojiId} style={{ height:'100%', justifyContent:'center', alignItems:'center'}}>
                  
                  <View style={{justifyContent:'center', alignItems:"center", height:46, width:50, borderRadius:25, borderWidth:2, borderColor: 'white'}}>
                    <LottieView source={item?.icon} style={{height:34, width:34}} autoPlay /> 
                  </View>
                  
    
                    <View style={{position:'absolute', top:4, backgroundColor:'white',  right:-10, borderWidth:2, height:24, width:30, borderRadius:12, justifyContent:'center', alignItems:'center',borderColor:'white' }}>
    <Text style={{fontFamily:'bold'}}>{ 0}</Text>
                    </View>
                    
    
    
                </Pressable>
            ))}
         
        </View>















            <View style={{height:60, width:'100%', flexDirection:'row', justifyContent:"flex-end"}}>

<View style={{flexDirection:'row', gap:38, paddingHorizontal:18}}> 

<Pressable  style={{height:'100%',  justifyContent:'center', alignItems:'center'}}>

<Ionicons name="chatbubble-outline" size={26} color="gray" />

</Pressable>
    

 <Pressable  style={{height:'100%',   justifyContent:'center', alignItems:'center', flexDirection:'row', gap:6}}>

   <AntDesign name="heart" size={26} color={Colors.MAINPINK} />

   <Text style={{fontFamily:'medium', color: Colors.MAINPINK, fontSize:16 }}>
    {1}
   </Text>

</Pressable>
</View>


<View style={{flexDirection:'row', gap:22, paddingHorizontal:18}}> 
<Pressable  style={{height:'100%',  justifyContent:'center', alignItems:'center'}}>

<FontAwesome name="bookmark" size={24} color={'gray'} />

</Pressable>
<Pressable  style={{height:'100%', justifyContent:'center', alignItems:'center'}}>

<Feather name="share" size={24} color="gray" />

</Pressable>

</View>

 



    </View>




   </View>
  )
}

export default PreviewPost