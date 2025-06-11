import {
  View,
  Text,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
  TextInput,
} from "react-native";
import React, { useMemo, useState } from "react";
import Feather from '@expo/vector-icons/Feather';
import {
  SafeAreaView,
  useSafeArea,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { usePostById } from "../../src/hooks/post/usePostById";
import { useLocalSearchParams } from "expo-router";
import Post from "../../src/components/home/main/post/Post";
import { fetchInfiniteCommnets } from "../../src/hooks/post/fetchInfiniteComments";
import Comment from "../../src/components/home/main/post/Comment";
import { ActivityIndicator } from "react-native-paper";
import { useCurrentUser } from "../../src/hooks/user/useCurrentUser";
import { useCreateComment } from "../../src/hooks/post/useCreateComment";
import Toast from "react-native-toast-message";
import Colors from "../../src/constants/Colors";

const CommentScreen = () => {
  const insets = useSafeAreaInsets();
  const [commentText, setCommentText] = useState("");
  const { data: userData } = useCurrentUser();
  const { postId } = useLocalSearchParams();
  const { data: postData } = usePostById(postId);
  const { mutate, isPending } = useCreateComment(postId);
  const { data, error, hasNextPage, fetchNextPage, isFetchingNextPage } =
    fetchInfiniteCommnets(postId);

  const handleToast = () => {
    Toast.show({
      text1: "Success",
      text2: "Reported Successfully!",
      type: "success",
    });
  };

  const cleanedCommentList = useMemo(() => {
    return data?.pages.flatMap((item) => item.data);
  });

  const handleCommentSend = () => {
    if (!commentText.trim()) return;
    const text = commentText;
    setCommentText("");
    mutate({ userData, text });
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "white" }}
      behavior="height"
      keyboardVerticalOffset={40}
    >
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "white" }}
        edges={["bottom"]}
      >
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          onEndReached={hasNextPage && !isFetchingNextPage && fetchNextPage}
          onEndReachedThreshold={0}
          data={cleanedCommentList}
          contentContainerStyle={{ paddingTop: 18, paddingBottom: 18 }}
          renderItem={({ item, index }) => (
            <Comment handleToast={handleToast} data={item} />
          )}
          ListHeaderComponent={
            <Post data={postData} fromCommentScreen={true} />
          }
          ListFooterComponent={
            isFetchingNextPage ? (
              <View
                style={{
                  paddingVertical: 18,
                  height: 140,
                  alignItems: "center",
                }}
              >
                <ActivityIndicator size={34} color={Colors.MAINORANGE} />
              </View>
            ) : null
          }
        />

        <View
          style={{
            position: "absolute",
            bottom: insets.bottom,
            left: 0,
            right: 0,
            height: 60,
            width: Dimensions.get("screen").width,
            flexDirection: "row",
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flex: 1,
              height: "100%",
              paddingHorizontal: 12,
              paddingVertical: 8,
              backgroundColor: "white",
            }}
          >
            <TextInput
              placeholder="type text here..."
              onChangeText={(v) => setCommentText(v)}
              value={commentText}
              style={{
                backgroundColor: "lightgray",
                borderRadius: 18,
                height: "100%",
                width: "100%",
                paddingHorizontal: 18,
              }}
            />
          </View>

          <View
            style={{
              height: "100%",
              width: 60,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isPending ? (
              <ActivityIndicator color={Colors.MAINORANGE} />
            ) : (
              <Pressable onPress={handleCommentSend} style={{height:'80%', justifyContent:"center", alignItems:'center', width:'90%', borderRadius:12, backgroundColor:Colors.MAINORANGE}} >
               <Feather name="arrow-up" size={28} color="white" />
              </Pressable>
            )}
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CommentScreen;
