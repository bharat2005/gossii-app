import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false, animation:'fade_from_bottom'}}>
      <Stack.Screen name="start" />
      <Stack.Screen name="register" />
      <Stack.Screen name="login" />
      <Stack.Screen name="profile-build" options={{animation:'none'}}/>
    </Stack>
  );
};

export default AuthLayout;
