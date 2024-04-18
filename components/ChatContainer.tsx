import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ChatContainer = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={styles.myChats}>My Chats</Text>
      <Image
        style={styles.chat1Icon}
        contentFit="cover"
        source={require("../assets/chat-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 101,
    width: 147,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGainsboro_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  myChats: {
    top: 57,
    left: 8,
    fontSize: FontSize.size_10xl,
    fontFamily: FontFamily.interRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  chat1Icon: {
    top: 6,
    left: 50,
    width: 48,
    height: 45,
    position: "absolute",
  },
  rectangleParent: {
    top: 156,
    left: 15,
  },
});

export default ChatContainer;
