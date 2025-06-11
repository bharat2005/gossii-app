import { ActivityIndicator, Text, View } from "react-native";
import LogoInverted from '../assets/svgs/LogoInverted'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

        <LogoInverted height={120} width={120}/>
      
    </View>
  );
}
