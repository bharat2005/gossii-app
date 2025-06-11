import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../../constants/Colors";
import Pencil from '../../../../assets/svgs/Pencil'
const CreatePostButton = () => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push("/createPost")}
      style={{
        justifyContent:'center',
        alignItems:'center',
        height: 60,
        width: 60,
        borderRadius: 24,
        backgroundColor: "orange",
        position: "absolute",
        bottom: 28,
        right: 28,
      }}
    >
      <LinearGradient
        colors={[Colors.MAINPINK, Colors.MAINORANGE]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: 24,
        }}
      />

      <Pencil size={22} />
    </Pressable>
  );
};

export default CreatePostButton;
