import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Header from "../components/Header";
import GroupComponent from "../components/GroupComponent";
import SectionCard from "../components/SectionCard";
import FrameComponent from "../components/FrameComponent";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const HomePage1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.homePage2, styles.labelFlexBox]}>
      <View style={[styles.footerInput, styles.footerLayout]}>
        <View style={[styles.homeIndicator, styles.statusBarPosition]}>
          <View style={styles.homeIndicator1} />
        </View>
        <View style={styles.reply}>
          <Text style={[styles.label, styles.labelTypo]} numberOfLines={1}>
            Message...
          </Text>
          <Image
            style={styles.iconmic}
            contentFit="cover"
            source={require("../assets/iconmic.png")}
          />
          <Image
            style={styles.iconmic}
            contentFit="cover"
            source={require("../assets/iconmic.png")}
          />
          <Image
            style={styles.iconmic}
            contentFit="cover"
            source={require("../assets/iconmic.png")}
          />
        </View>
        <View style={[styles.footerInput1, styles.footerLayout]}>
          <View style={[styles.homeIndicator, styles.statusBarPosition]}>
            <View style={styles.homeIndicator1} />
          </View>
          <View style={styles.footerInputChild} />
        </View>
      </View>
      <Text style={[styles.timestamp, styles.timestampFlexBox]}>
        Nov 30, 2023, 9:41 AM
      </Text>
      <Header propBackgroundColor="#fff" />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
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
            source={require("../assets/wifi.png")}
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
      <Image
        style={styles.bicycleRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/bicycleremovebgpreview-1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.myChats, styles.labelTypo]}>My Chats</Text>
        <Pressable
          style={styles.chat1}
          onPress={() => navigation.navigate("ChatList1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/chat-1.png")}
          />
        </Pressable>
      </View>
      <GroupComponent
        onGroupPressablePress={() => navigation.navigate("FriendList")}
      />
      <SectionCard
        onGroupPressablePress={() => navigation.navigate("EmergencyContact5")}
      />
      <FrameComponent
        ellipse3={require("../assets/ellipse-33.png")}
        ellipse4={require("../assets/ellipse-44.png")}
        propTop={511}
        onFramePressablePress={() => navigation.navigate("SOS2")}
      />
      <Text style={[styles.sendAnSos, styles.timestampFlexBox]}>
        Send an SOS signal to your emergency contacts
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelFlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  footerLayout: {
    height: 82,
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  statusBarPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  timestampFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  groupChildLayout: {
    height: 101,
    width: 147,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    bottom: 0,
    height: 34,
  },
  label: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.colorGray_200,
    overflow: "hidden",
    flex: 1,
  },
  iconmic: {
    height: 24,
    marginLeft: 16,
    width: 24,
    overflow: "hidden",
  },
  reply: {
    right: 16,
    bottom: 34,
    left: 16,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  footerInputChild: {
    left: 9,
    width: 358,
    height: 54,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  footerInput1: {
    top: 0,
  },
  footerInput: {
    top: 730,
  },
  timestamp: {
    top: 270,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    width: 375,
    left: 0,
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
    height: 11,
    top: 0,
    width: 24,
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
  bicycleRemovebgPreview1Icon: {
    top: 40,
    width: 88,
    height: 63,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    top: 0,
    left: 0,
  },
  myChats: {
    top: 57,
    left: 8,
    fontSize: FontSize.size_10xl,
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  chat1: {
    left: 50,
    top: 6,
    width: 48,
    height: 45,
    position: "absolute",
  },
  rectangleParent: {
    top: 156,
    left: 15,
  },
  sendAnSos: {
    marginLeft: -166.5,
    top: 712,
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    color: Color.colorDarkslategray_100,
    width: 334,
    height: 55,
    left: "50%",
  },
  homePage2: {
    borderRadius: Border.br_xl,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default HomePage1;
