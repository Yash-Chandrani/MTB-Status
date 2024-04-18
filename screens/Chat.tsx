import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FooterInput1 from "../components/FooterInput1";
import Header1 from "../components/Header1";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Chat = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.chat1, styles.chat1Bg]}>
      <FooterInput1 />
      <Text style={[styles.timestamp, styles.timestampPosition]}>
        Nov 30, 2023, 9:41 AM
      </Text>
      <Header1
        onPolygonPressablePress={() => navigation.navigate("ChatList")}
      />
      <View style={[styles.statusBar, styles.timestampPosition]}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi2.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            contentFit="cover"
            source={require("../assets/mobile-signal.png")}
          />
          <Image
            style={[styles.recordingIndicatorIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          contentFit="cover"
          source={require("../assets/left-side.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chat1Bg: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  timestampPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  timestamp: {
    top: 270,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_200,
    textAlign: "center",
  },
  notchIcon: {
    right: 78,
    bottom: 14,
    left: 78,
    maxWidth: "100%",
    maxHeight: "100%",
    top: 0,
    overflow: "hidden",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  statusBar: {
    height: 44,
    top: 0,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  chat1: {
    borderRadius: Border.br_xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Chat;
