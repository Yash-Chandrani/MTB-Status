import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

export type GroupComponentType = {
  /** Action props */
  onGroupPressablePress?: () => void;
};

const GroupComponent = ({ onGroupPressablePress }: GroupComponentType) => {
  return (
    <Pressable
      style={[styles.rectangleParent, styles.groupChildLayout]}
      onPress={onGroupPressablePress}
    >
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={styles.myFriends}>My Friends</Text>
      <Image
        style={styles.profileImageIcon}
        contentFit="cover"
        source={require("../assets/profile-image.png")}
      />
    </Pressable>
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
  myFriends: {
    top: 59,
    left: 6,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.interRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    position: "absolute",
  },
  profileImageIcon: {
    marginTop: -44.5,
    top: "50%",
    left: 50,
    width: 46,
    height: 45,
    position: "absolute",
  },
  rectangleParent: {
    top: 156,
    left: 213,
  },
});

export default GroupComponent;
