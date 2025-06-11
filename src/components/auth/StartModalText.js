import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Dim from '../../constants/Dim'
import ColorButton from '../atoms/ColorButton'
import { Checkbox } from 'react-native-paper'
import Colors from '../../constants/Colors'

const checkBoxList = [
    <Text style={{fontFamily:'light', fontSize:14}}>
Yes, I'm a girl and over 18 years old.
   </Text>,

    <Text style={{fontFamily:'light', fontSize:14}}>
  I agree to gossii's 

      <Text style={{fontFamily:'light', fontSize:14, color:Colors.MAINORANGE}}>{" "}
  Terms of Use
      </Text>{" "}

   and 

    <Text style={{fontFamily:'light', fontSize:14, color:Colors.MAINORANGE}}>{" "}
   Privacy Policy.
    </Text>{" "}

   </Text>,

    <Text style={{fontFamily:'light', fontSize:14}}>
    I agree to the Gossii ID 

    <Text style={{fontFamily:'light', fontSize:14, color:Colors.MAINORANGE}}>{" "}
    Terms of Usse
      </Text>{" "}

     
    and 

    <Text style={{fontFamily:'light', fontSize:14, color:Colors.MAINORANGE}}>{" "}
    Privacy Policy.
        </Text>{" "}
   </Text>
  
]

const StartModalText = ({onPress, setVisible}) => {
    const [checks, setChecks] = useState(Array(checkBoxList.length).fill(false))

const handleToggle = (index) =>{
    const updatedChecks = [...checks]
    updatedChecks[index] = !updatedChecks[index]
    setChecks(updatedChecks)
}   


  return (
          <View style={{height:Dim.HEIGHT * 0.5, width:Dim.WIDTH * 0.82, borderRadius:14, backgroundColor:'white', padding:20, gap:32}}>

            <View style={{width:'100%'}}>

                <Text style={{fontFamily:'bold', fontSize:20}} >

                    Gossii is available to any <Text style={{fontFamily:'bold', fontSize:21, color:Colors.MAINPINK}}>GIRL</Text> over the age of 18 only!

                </Text>

            </View>


            <View style={{width:'100%'}}>

                <Text style={{fontFamily:'light', fontSize:14, color:'gray'}}>
                    In order to ensure the operation of healthy service and commuinity, this service is available to females aged 18 and over.
                </Text>

            </View>


            
            <View style={{width:'100%', gap:24}}>
                {checkBoxList.map((item, index)=> (
                    <View key={index} style={{ flexDirection:'row', alignItems:'center', width:260}}>
                      <Checkbox status={checks[index] ? 'checked' : 'unchecked'} color={Colors.MAINORANGE} onPress={()=> handleToggle(index)}/>
                      {item}
                    </View>
                ))}


            </View>


            <View style={{width:'100%', marginTop:0}}>
                <ColorButton text="Agree and Continue"onPress={() => {setVisible(false) ;onPress()}} disabled={!(checks.every(item => item === true))} />
            </View>



            

          </View>
  )
}

export default StartModalText