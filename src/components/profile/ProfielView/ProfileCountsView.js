import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import MyPostCounts from './MyCounts/MyPostCounts'
import MySavesCounts from './MyCounts/MySavesCount'
import MyLikesCounts from './MyCounts/MyLikesCount'

const ProfileCountsView = () => {
  return (
  <View style={{height:44, width:'100%', backgroundColor:'white', flexDirection:'row'}}>
     
    <MyPostCounts />

    <MySavesCounts />

    <MyLikesCounts />

    </View>
  )
}

export default ProfileCountsView