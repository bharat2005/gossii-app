import { Stack } from "expo-router";
import AuthContextProvider from "../src/contexts/AuthContextProvider";
import { PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { useFonts } from "expo-font";

const client = new QueryClient();

export default function RootLayout() {
  useFonts({
    black: require("../assets/fonts/Nunito-Black.ttf"),
    bold: require("../assets/fonts/Nunito-Bold.ttf"),
    light: require("../assets/fonts/Nunito-Light.ttf"),
    medium: require("../assets/fonts/Nunito-Medium.ttf"),
    regular: require("../assets/fonts/Nunito-Regular.ttf"),
    semibold: require("../assets/fonts/Nunito-SemiBold.ttf"),
  });

  return (
    <QueryClientProvider client={client}>
      <PaperProvider>
        <AuthContextProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(main)" />
            <Stack.Screen name="createPost" options={{animation:'slide_from_right'}} />
            <Stack.Screen name="commentScreen" options={{animation:'slide_from_bottom'}} />
            <Stack.Screen name="postProfile" options={{animation:'slide_from_right'}} />
            <Stack.Screen name="reportPost" />
            <Stack.Screen name="reportUser" />
            <Stack.Screen name="edit" />
            <Stack.Screen name="settings" />
          </Stack>
          <Toast />
        </AuthContextProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}
