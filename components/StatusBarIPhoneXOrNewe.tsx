import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type StatusBarIPhoneXOrNeweType = {
  wifi?: ImageSourcePropType;
};

const StatusBarIPhoneXOrNewe = ({ wifi }: StatusBarIPhoneXOrNeweType) => {
  return (
    <View style={[styles.statusBarIphoneXOrNewe, styles.timePosition1]}>
      <Image
        style={[styles.notchIcon, styles.timePosition]}
        contentFit="cover"
        source={require("../assets/notch.png")}
      />
      <View style={[styles.rightSide, styles.iconLayout]}>
        <Image
          style={[styles.batteryIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/battery1.png")}
        />
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          contentFit="cover"
          source={wifi}
        />
        <Image
          style={[styles.mobileSignalIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mobile-signal.png")}
        />
      </View>
      <View style={styles.leftSide}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.text}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition1: {
    left: 0,
    top: 0,
  },
  timePosition: {
    display: "none",
    position: "absolute",
  },
  iconLayout: {
    height: 11,
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    right: 78,
    bottom: 16,
    left: 78,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    top: 0,
    height: 11,
  },
  wifiIcon: {
    right: 29,
    width: 15,
    top: 0,
    height: 11,
  },
  mobileSignalIcon: {
    right: 50,
    width: 17,
    top: 0,
    height: 11,
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
  },
  text: {
    top: 1,
    left: 7,
    fontSize: FontSize.defaultBoldSubheadline_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.aliceRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    width: 40,
    position: "absolute",
  },
  time: {
    borderRadius: Border.br_5xl,
    width: 54,
    height: 21,
    left: 0,
    top: 0,
  },
  leftSide: {
    top: 12,
    left: 24,
    width: 0,
    height: 0,
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    borderRadius: Border.br_xl,
    width: 375,
    height: 44,
    overflow: "hidden",
    position: "absolute",
  },
});

export default StatusBarIPhoneXOrNewe;
