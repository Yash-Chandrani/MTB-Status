import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Header from "../components/Header";
import ChatContainer from "../components/ChatContainer";
import SectionFilter from "../components/SectionFilter";
import FrameComponent1 from "../components/FrameComponent1";
import DarkModeFalseActionCount from "../components/DarkModeFalseActionCount";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const SOS1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.sos2, styles.sos2FlexBox]}>
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
      <Header propBackgroundColor="#b0adad" />
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
      <Image
        style={styles.bicycleRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/bicycleremovebgpreview-1.png")}
      />
      <ChatContainer />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.myFriends, styles.labelTypo]}>My Friends</Text>
        <Image
          style={styles.profileImageIcon}
          contentFit="cover"
          source={require("../assets/profile-image.png")}
        />
      </View>
      <SectionFilter />
      <Text style={[styles.sendAnSos, styles.timestampFlexBox]}>
        Send an SOS signal to your emergency contacts
      </Text>
      <FrameComponent1
        ellipse3={require("../assets/ellipse-3.png")}
        ellipse4={require("../assets/ellipse-42.png")}
      />
      <DarkModeFalseActionCount
        title="SOS Signal Sent"
        description="Emergency contacts have been notified of your SOS signal. Would you like to raise an alarm from your device?"
        action="Yes"
        action1="No"
        darkModeFalseActionCountPosition="absolute"
        darkModeFalseActionCountTop={338}
        darkModeFalseActionCountLeft={52}
        darkModeFalseActionCountBackgroundColor="rgba(242, 242, 242, 0.8)"
        titleFontWeight="unset"
        titleFontFamily="Actor-Regular"
        descriptionFontFamily="Actor-Regular"
        actionFontFamily="Actor-Regular"
        actionFontWeight="unset"
        actionFontFamily1="Actor-Regular"
        onActionsPress={() => navigation.navigate("HomePage")}
        onActionItemPress={() => navigation.navigate("HomePage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sos2FlexBox: {
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
    backgroundColor: Color.colorDarkgray_100,
  },
  footerInputChild: {
    left: 9,
    width: 358,
    height: 54,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorDarkgray_100,
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
    backgroundColor: Color.colorDarkgray_100,
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
  myFriends: {
    top: 59,
    left: 6,
    fontSize: FontSize.size_7xl,
    color: Color.labelColorLightPrimary,
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
  sos2: {
    borderRadius: Border.br_xl,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorDarkgray_100,
  },
});

export default SOS1;
