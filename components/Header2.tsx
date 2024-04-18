import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Header2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.header}>
      <Image
        style={[styles.iconchevronLeft, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/iconmic.png")}
      />
      <Image
        style={styles.profileImageIcon}
        contentFit="cover"
        source={require("../assets/profile-image1.png")}
      />
      <View style={styles.text}>
        <Text style={styles.jackDylanSumedh}>Jack, Dylan, Sumedh, Yash...</Text>
        <Text style={styles.lastMessage5} numberOfLines={1}>
          Last message 5 sec ago
        </Text>
      </View>
      <Image
        style={[styles.iconphone, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/iconmic.png")}
      />
      <Image
        style={[styles.iconvideo, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/iconmic.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("ChatList1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/polygon-2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconchevronLeft: {
    left: 16,
    width: 24,
    top: "50%",
    marginTop: -12,
  },
  profileImageIcon: {
    marginTop: -16,
    left: 52,
    width: 32,
    height: 32,
    top: "50%",
    position: "absolute",
  },
  jackDylanSumedh: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.labelColorLightPrimary,
    width: 249,
    textAlign: "left",
  },
  lastMessage5: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_400,
    textAlign: "left",
    overflow: "hidden",
  },
  text: {
    marginTop: -20,
    left: 92,
    width: 266,
    top: "50%",
    position: "absolute",
  },
  iconphone: {
    left: 287,
    top: "50%",
    marginTop: -12,
    overflow: "hidden",
  },
  iconvideo: {
    left: 335,
    top: "50%",
    marginTop: -12,
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    top: 13,
    left: 16,
    width: 24,
  },
  header: {
    top: 44,
    left: 0,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderBottomWidth: 0.5,
    width: 375,
    height: 56,
    overflow: "hidden",
    position: "absolute",
  },
});

export default Header2;
