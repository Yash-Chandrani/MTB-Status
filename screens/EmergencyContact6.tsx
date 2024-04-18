import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import StatusBarIPhoneXOrNewe from "../components/StatusBarIPhoneXOrNewe";
import DarkModeFalse from "../components/DarkModeFalse";
import TitleTrueContentFalseFoo from "../components/TitleTrueContentFalseFoo";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const EmergencyContact6 = () => {
  return (
    <View style={styles.emergencyContact7}>
      <View style={styles.emergencyContact7Child} />
      <StatusBarIPhoneXOrNewe wifi={require("../assets/wifi1.png")} />
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseTop={778}
        darkModeFalseLeft={0}
        darkModeFalseWidth={375}
      />
      <Image
        style={styles.leftSideIcon}
        contentFit="cover"
        source={require("../assets/left-side1.png")}
      />
      <TitleTrueContentFalseFoo
        showLabelTitle={false}
        titleTrueContentFalseFooPosition="absolute"
        titleTrueContentFalseFooWidth={375}
        titleTrueContentFalseFooTop={55}
        titleTrueContentFalseFooLeft={0}
        labelTimeRight={-516}
        contentHeight={17}
      />
      <Text style={styles.yourFriendYash}>
        Your friend Yash Chandrani needs help
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emergencyContact7Child: {
    height: "10.84%",
    top: "0%",
    right: "0%",
    bottom: "89.16%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  leftSideIcon: {
    top: 12,
    left: 7,
    width: 54,
    height: 21,
    position: "absolute",
  },
  yourFriendYash: {
    top: 69,
    left: 129,
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    fontFamily: FontFamily.actorRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    width: 214,
    height: 42,
    position: "absolute",
  },
  emergencyContact7: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default EmergencyContact6;
