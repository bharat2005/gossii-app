import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { useAuth } from "../../src/contexts/AuthContextProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView } from 'react-native-tab-view'
import MyPostsList from "../../src/components/profile/TabLists/MyPostsList";
import { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import MyMediaList from "../../src/components/profile/TabLists/MyMediaList";
import MySavesList from "../../src/components/profile/TabLists/MySavesList";
import MyLikesList from "../../src/components/profile/TabLists/MyLikesList";
import ProfileView from "../../src/components/profile/ProfielView/ProfileView";

const Profile = () => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { title: "My Posts", key: "myposts" },
    { title: "My Media", key: "mymedia" },
    { title: "My Saves", key: "mysaves" },
    { title: "My Likes", key: "mylikes" },
  ]);
  const animationValue = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler((e)=>{
    animationValue.value = e.contentOffset.y
  })

  const animationStyleScroll = useAnimatedStyle(()=>{
    const translateY = interpolate(
      animationValue.value,
      [0,600],
      [0, -500],
      Extrapolate.CLAMP
    )

    return {
      transform:[{translateY}]
    }
  })


  const renderScene = ({route}) => {
    const props = {scrollHandler}
    switch (route.key){
      case 'myposts':
        return <MyPostsList {...props} />
      case 'mymedia':
        return <MyMediaList {...props} />
      case 'mysaves':
        return <MySavesList {...props} />
      case 'mylikes':
        return <MyLikesList {...props} />
      
    }
  }


  return (
<SafeAreaView style={{flex:1, backgroundColor:'white'}} edges={['top']}>

  <ProfileView animationStyleScroll={animationStyleScroll} routes={routes} index={index} setIndex={setIndex} />

  <TabView
  swipeEnabled={false}
  initialLayout={{width:Dimensions.get('screen').width}}
  onIndexChange={setIndex}
  navigationState={{routes, index}}
  renderScene={renderScene}
  renderTabBar={() => null}
  
  />

</SafeAreaView>
  );
};

export default Profile;
