import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { Button, Modal, Portal } from "react-native-paper";
import { useRouter } from "expo-router";
import Dim from "../../src/constants/Dim";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../src/constants/Colors";
import ColorButton from "../../src/components/atoms/ColorButton";
import LogoText from "../../assets/svgs/LogoText";
import Logo from "../../assets/svgs/Logo";
import StartModalText from "../../src/components/auth/StartModalText";

const Start = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false)

  return (
    <View style={{ flex: 1, alignItems: "center", paddingTop: 140 }}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
        colors={[Colors.MAINPINK, Colors.MAINORANGE]}
      />

      <View>
        <Logo height={60} width={80} />
      </View>

      <View
        style={{
          height: Dim.HEIGHT * 0.48,
          width: Dim.WIDTH * 0.82,
          backgroundColor: "white",
          borderRadius: 30,
          paddingVertical: 34,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            position: "absolute",
            top: -10,
            left: 0,
            right: 0,
          }}
        >
          <LogoText width={100} height={60} />
        </View>

        <View style={{ width: "100%", paddingVertical: 16 }}>
          <Text
            style={{
              fontFamily: "black",
              fontSize: 30,
              textAlign: "center",
              letterSpacing: 10,
            }}
          >
            WELCOME
          </Text>
        </View>

        <View style={{ width: "100%", marginTop: 38, paddingHorizontal:34 }}>
          <Text
            style={{
              fontFamily: "semibold",
              fontSize: 20,
              textAlign: "center",
              borderBottomWidth:1,
              borderBottomColor:Colors.MAINORANGE,
              paddingVertical:12
            }}
          >
            Your Softest Secret Space
          </Text>
        </View>

        <View style={{ width: "100%", marginTop: 30 }}>
          <Text
            style={{ fontFamily: "light", fontSize: 15, textAlign: "center" }}
          >
            A soft & safe space to post secrets, spill thoughts, all with cute
            vibes.
          </Text>
        </View>

        <View style={{ width: "100%", marginTop: 44 }}>
          <Text
            style={{
              fontFamily: "regular",
              fontSize: 12,
              textAlign: "center",
              color: "gray",
            }}
          >
            Slide into feed, start typing your heart out. No one will know it’s
            you — just peaceful posting.
          </Text>
        </View>

        <View style={{ marginTop: "auto" }}>
          <ColorButton
            nunito="light"
            text="Register"
            onPress={() => setVisible(true)}
          />
        </View>
      </View>

      <Pressable onPress={() => router.push("/(auth)/login")}>
        <Text
          style={{
            color: "white",
            marginVertical: 18,
            fontFamily: "light",
            fontSize: 16,
          }}
        >
          Login
        </Text>
      </Pressable>


      <Portal>
        <Modal onDismiss={()=> setVisible(false)} visible={visible} style={{flex:1, width:Dim.WIDTH, justifyContent:'center', alignItems:'center'}}>
<StartModalText setVisible={setVisible} onPress={() => router.push("/(auth)/register")}/>
        </Modal>
      </Portal>
    </View>
  );
};

export default Start;
