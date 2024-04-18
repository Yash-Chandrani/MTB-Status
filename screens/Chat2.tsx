import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import FooterInput3 from "../components/FooterInput3";
import Header2 from "../components/Header2";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Chat2 = () => {
  return (
    <View style={styles.chat3}>
      <FooterInput3 />
      <View style={[styles.recipientChat, styles.recipientLayout]}>
        <Image
          style={[styles.profileImageIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/profile-image2.png")}
        />
        <View style={styles.messageBubbles}>
          <View style={[styles.messageBubble, styles.messageFlexBox]}>
            <Text style={[styles.meIn, styles.meInTypo]}>me in</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.timestamp, styles.timestampPosition]}>
        Nov 30, 2023, 9:41 AM
      </Text>
      <View style={styles.senderChat}>
        <View style={[styles.messageBubble1, styles.messageFlexBox]}>
          <Text style={[styles.iWantTo, styles.meInTypo]}>
            I want to bike on the Raleigh trail. Who’s in?
          </Text>
        </View>
      </View>
      <Header2 />
      <View style={[styles.statusBar, styles.timestampPosition]}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={[styles.batteryIcon, styles.iconLayout]}
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
          source={require("../assets/left-side3.png")}
        />
      </View>
      <View style={[styles.recipientChat1, styles.recipientLayout]}>
        <Image
          style={[styles.profileImageIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/profile-image3.png")}
        />
        <View style={styles.messageBubbles}>
          <View style={[styles.messageBubble, styles.messageFlexBox]}>
            <Text style={[styles.meIn, styles.meInTypo]}>
              I would also like to join!
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.recipientChat2, styles.recipientLayout]}>
        <Image
          style={[styles.profileImageIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/profile-image4.png")}
        />
        <View style={styles.messageBubbles}>
          <View style={[styles.messageBubble, styles.messageFlexBox]}>
            <Text style={[styles.meIn, styles.meInTypo]}>me too!</Text>
          </View>
        </View>
      </View>
      <View style={[styles.recipientChat3, styles.recipientLayout]}>
        <Image
          style={[styles.profileImageIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/profile-image5.png")}
        />
        <View style={styles.messageBubbles}>
          <View style={[styles.messageBubble, styles.messageFlexBox]}>
            <Text style={[styles.meIn, styles.meInTypo]}>
              I’m not feeling it today. You guys have fun!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recipientLayout: {
    height: 36,
    width: 279,
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    position: "absolute",
  },
  messageFlexBox: {
    maxWidth: 480,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  meInTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    flex: 1,
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
  profileImageIcon: {
    marginTop: -12,
    height: 24,
    left: 0,
    width: 24,
    top: "50%",
  },
  meIn: {
    color: Color.labelColorLightPrimary,
  },
  messageBubble: {
    borderTopLeftRadius: Border.br_lg,
    borderTopRightRadius: Border.br_lg,
    borderBottomRightRadius: Border.br_lg,
    borderBottomLeftRadius: Border.br_9xs,
    backgroundColor: Color.colorWhitesmoke_500,
  },
  messageBubbles: {
    left: 32,
    width: 247,
    top: 0,
    position: "absolute",
  },
  recipientChat: {
    marginTop: -136,
    left: 16,
    height: 36,
    width: 279,
    top: "50%",
  },
  timestamp: {
    top: 270,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_200,
    textAlign: "center",
  },
  iWantTo: {
    color: Color.colorWhite,
  },
  messageBubble1: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.labelColorLightPrimary,
  },
  senderChat: {
    top: 210,
    left: 93,
    width: 267,
    alignItems: "flex-end",
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
    height: 11,
    top: 0,
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
    width: 375,
  },
  recipientChat1: {
    marginTop: -89,
    left: 16,
    height: 36,
    width: 279,
    top: "50%",
  },
  recipientChat2: {
    marginTop: -41,
    left: 16,
    height: 36,
    width: 279,
    top: "50%",
  },
  recipientChat3: {
    marginTop: 7,
    left: 15,
    height: 36,
    width: 279,
    top: "50%",
  },
  chat3: {
    borderRadius: Border.br_xl,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Chat2;
