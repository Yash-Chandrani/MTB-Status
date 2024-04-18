import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

export type IPhoneX11ProLightBasType = {
  leftSide?: ImageSourcePropType;

  /** Action props */
  onPolygonPressablePress?: () => void;
};

const IPhoneX11ProLightBas = ({
  leftSide,
  onPolygonPressablePress,
}: IPhoneX11ProLightBasType) => {
  return (
    <View style={[styles.iphoneX11ProLightBas, styles.iphonePosition]}>
      <View style={styles.rightAccessoryIcon}>
        <Image
          style={styles.spaceIcon}
          contentFit="cover"
          source={require("../assets/space.png")}
        />
      </View>
      <View style={styles.rightAccessoryTextbold}>
        <Text style={[styles.rightTitle, styles.newTypo]}>Right Title</Text>
      </View>
      <View style={styles.leftTitleRightLight}>
        <View style={[styles.rightAccessoryTextdefault, styles.rightPosition]}>
          <Text style={[styles.new, styles.newTypo]}>New</Text>
          <Image
            style={styles.iconLightAdd}
            contentFit="cover"
            source={require("../assets/icon--light--add.png")}
          />
        </View>
        <View style={[styles.rightAccessoryTextbold1, styles.rightPosition]}>
          <Text style={[styles.rightTitle, styles.newTypo]}>Right Title</Text>
          <Image
            style={styles.iconLightAdd}
            contentFit="cover"
            source={require("../assets/icon--light--add.png")}
          />
        </View>
        <View style={[styles.title, styles.rightPosition]}>
          <Text style={styles.title1}>Chat</Text>
        </View>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={onPolygonPressablePress}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/polygon-2.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.iphoneX11ProLightBas1, styles.batteryIconPosition]}>
        <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={[styles.batteryIcon, styles.wrapperLayout]}
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
            style={styles.recordingIndicatorIcon}
            contentFit="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          contentFit="cover"
          source={leftSide}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphonePosition: {
    left: 0,
    position: "absolute",
  },
  newTypo: {
    color: Color.defaultSystemBlueLight,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
  },
  rightPosition: {
    top: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  wrapperLayout: {
    width: 24,
    position: "absolute",
  },
  batteryIconPosition: {
    right: 0,
    top: 0,
  },
  spaceIcon: {
    width: 44,
    height: 44,
  },
  rightAccessoryIcon: {
    top: 44,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    right: 0,
    position: "absolute",
  },
  rightTitle: {
    textAlign: "right",
  },
  rightAccessoryTextbold: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_4xs,
    top: 46,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    right: 0,
    position: "absolute",
  },
  new: {
    textAlign: "left",
  },
  iconLightAdd: {
    height: 18,
    marginLeft: 10,
    width: 17,
    display: "none",
  },
  rightAccessoryTextdefault: {
    marginTop: -21,
    top: "50%",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_4xs,
    right: 0,
  },
  rightAccessoryTextbold1: {
    marginTop: -21,
    top: "50%",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_4xs,
    right: 0,
    display: "none",
  },
  title1: {
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
  },
  title: {
    marginTop: -12,
    marginLeft: -16.5,
    left: "50%",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 17,
    top: 9,
    height: 24,
  },
  leftTitleRightLight: {
    height: 42,
    top: 46,
    right: 0,
    left: 0,
    position: "absolute",
  },
  bgIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
  },
  batteryIcon: {
    height: 11,
    right: 0,
    top: 0,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    height: 11,
    width: 17,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
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
  iphoneX11ProLightBas1: {
    overflow: "hidden",
    height: 44,
    left: 0,
    position: "absolute",
  },
  iphoneX11ProLightBas: {
    backgroundColor: Color.colorWhitesmoke_600,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    width: 375,
    height: 88,
    top: 0,
    left: 0,
  },
});

export default IPhoneX11ProLightBas;
