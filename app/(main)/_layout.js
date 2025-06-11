import { View, Text, Pressable } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from '../../src/constants/Colors'
import HomeIcon from '../../assets/svgs/HomeIcon'
import BellIcon from '../../assets/svgs/BellIcon'
import ProfileIcon from '../../assets/svgs/ProfileIcon'
import { LinearGradient } from 'expo-linear-gradient'
import LoveLogo from '../../assets/svgs/LoveLogo'
import SearchIcon from '../../assets/svgs/SearchIcon'

const MainLayout = () => {
  return (
    <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor:'black', tabBarInactiveTintColor:'gray', tabBarButton:(props)=> <Pressable {...props} android_ripple={false} />}}>
      <Tabs.Screen name="home"
      options={{
        tabBarIcon:({size, color, focused})=> <HomeIcon size={size}  color={color} focused={focused} />,
        tabBarLabel:'Home',
        tabBarLabelStyle:{fontFamily:'regular', color:'black'}
      }}
      />
      <Tabs.Screen name="search"
            options={{
        tabBarIcon:({size, color, focused})=> <SearchIcon size={size}color={color} focused={focused} />,
        tabBarLabel:'Search',
        tabBarLabelStyle:{fontFamily:'regular', color:'black'}
      }}
      />




      <Tabs.Screen name="love"
          options={{
        tabBarIcon:({color, size})=> (
    <View style={{height:60, width:60,  position:'absolute', bottom:4 }}>
      <LinearGradient colors={[Colors.MAINPINK,Colors.MAINORANGE]} start={{x:0, y:0}} end={{x:1, y:1}} style={{height:'100%', width:'100%', borderRadius:30,}}>
         <LoveLogo />
      </LinearGradient>
      </View>),
        tabBarLabel:'Love',
        tabBarLabelStyle:{fontFamily:'regular', color:Colors.MAINORANGE, fontSize:14}
      }}
      />



      <Tabs.Screen name="inbox"
            options={{
        tabBarIcon:({size, color, focused})=> <BellIcon size={size} color={color} focused={focused} />,
        tabBarLabel:'Inbox',
        tabBarLabelStyle:{fontFamily:'regular', color:'black'}
      }}
      />
      <Tabs.Screen name="profile"
            options={{
        tabBarIcon:({size, color, focused})=> <ProfileIcon size={size} color={color} focused={focused} />,
        tabBarLabel:'Profile',
        tabBarLabelStyle:{fontFamily:'regular', color:'black'}
      }}
      />
    </Tabs>
  );
};

export default MainLayout;
