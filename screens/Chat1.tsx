import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FooterInput2 from "../components/FooterInput2";
import Header1 from "../components/Header1";
import { Color, Border } from "../GlobalStyles";

const Chat1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.chat2, styles.chat2Bg]}>
      <FooterInput2 />
      <Header1
        propTop={16}
        onPolygonPressablePress={() => navigation.navigate("ChatList")}
      />
      <View style={[styles.statusBar, styles.chat2Bg]}>
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
          source={require("../assets/left-side2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chat2Bg: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
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
    left: 0,
    width: 375,
    height: 44,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  chat2: {
    borderRadius: Border.br_xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Chat1;
