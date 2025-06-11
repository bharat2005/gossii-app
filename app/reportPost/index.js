import { View, Text, Pressable, TouchableWithoutFeedback, Dimensions, Keyboard } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ReportUserTabBar from "../../src/components/home/reportUser/ReportUserTabBar";
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TextInput } from "react-native-paper";
import ActionSheet from "react-native-actions-sheet";
import { useUserReport } from "../../src/hooks/postProfile/useUserReport";
import { router, useLocalSearchParams } from "expo-router";
import Toast from "react-native-toast-message";
import ReportPostTabBar from "../../src/components/home/reportPost/ReportPostTabBar";
import { usePostReport } from "../../src/hooks/post/usePostReport";

const reportOptions = [
  { option: "Spam, Advertising or Solicitation", key: 1 },
  { option: "Offensive or Hateful Content", key: 2 },
  { option: "Inappropriate or Sexual Content", key: 3 },
  { option: "False Information or Misinformation", key: 4 },
  { option: "Violence or Threatening Content", key: 5 },
  { option: "Others", key: 6 },
];



const ReportPost = () => {
    const {userUid} = useLocalSearchParams()
    const [selectedOption, setSelectedOption] = useState('')
    const sheetRef = useRef(null)
    const [textReason, setTextReason] = useState('')
    const {mutate, isPending} = usePostReport()






const handleReportPress = () =>{
    if (!textReason || !selectedOption) return
    mutate({
        userUid,
         selectedOption,
          textReason
    },{
        onSuccess:()=> {
            Toast.show({
                text1:'Success',
                text2:'Reportde Succcesssfully!',
                type:'success'
            })
            router.back()
        }
    })

}







  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ReportPostTabBar selectedOption={selectedOption} textReason={textReason} handleReportPress={handleReportPress} isPending={isPending} />


  <View style={{ height: 60, width: "100%", paddingHorizontal: 18, marginVertical:28 }}>
  <View>
     <Text style={{fontFamily:'light', fontSize:15, color:'darkgray', paddingVertical:4, paddingHorizontal:2}}>
    Reason for Reporting
    </Text>
  </View>
    <View>
        <Pressable
        onPress={()=> sheetRef.current.show()}
          style={{
            height: "100%",
            padding: 12,
            width: "100%",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "lightgray",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View style={{flexDirection:'row', gap:12}}>
 <Octicons name="report" size={22} color="gray" />
          <Text style={{fontFamily:"regular", fontSize:16}}>{selectedOption}</Text>
          </View>



    <AntDesign name="caretdown" size={16} color="lightgray" style={{marginHorizontal:4}} />
        
        
        </Pressable>
      </View>

</View>



  <View style={{ height: 60, width: "100%", paddingHorizontal: 18, marginVertical:28 }}>
  <View>
     <Text style={{fontFamily:'light', fontSize:15, color:'darkgray', paddingVertical:4, paddingHorizontal:2}}>
    Content to Report
    </Text>
  </View>
    <View>
      <TextInput 
      mode='outlined'
      placeholder="type your content to report here..."
      onChangeText={(v)=> setTextReason(v)}
       multiline
       theme={{
        colors:{
          primary:'#24a4d8',
          outline:'lightgray',
          background:'white'
        }
       }}
       numberOfLines={8}
       style={{height:200}}
        />
        </View>

</View>





      <ActionSheet ref={sheetRef} gestureEnabled>
      <View style={{width:Dimensions.get('screen').width, padding:18}}>

            <View style={{alignItems:'center', marginVertical:12}}>
                <Text style={{ fontSize:18, fontFamily:'bold'}}>
                    Report Options
                </Text>
            </View>
            {
                reportOptions.map(item => (
                    <Pressable onPress={()=> {setSelectedOption(item.option); sheetRef.current.hide()}} key={item.key} style={{height:55, width:'100%', flexDirection:'row',  alignItems:'center', gap:14}}>
                           <Octicons name="report" size={22} color="black" />
                        <Text style={{fontFamily:'regular', fontSize:16, color:'black'}}>
                            {item.option}
                        </Text>


{selectedOption === item?.option && (
                      <View style={{backgroundColor:'green', height:24, width:24, borderRadius:12, justifyContent:'center', alignItems:'center', marginLeft:'auto'}}>
    <MaterialIcons name="done" size={22} color="white" />
                      </View>
)}

                    

                    </Pressable>
                ))
            }

        <Pressable onPress={()=>sheetRef.current.hide()} style={{height:50, width:'100%', marginVertical:8, justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontFamily:'semibold', fontSize:18}}>Cancel</Text>
        </Pressable>

        </View>
      </ActionSheet>







    </SafeAreaView>

    </TouchableWithoutFeedback>

  );
};

export default ReportPost;
