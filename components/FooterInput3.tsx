import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Reply from "./Reply";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const FooterInput3 = () => {
  return (
    <View style={[styles.footerInput, styles.footerLayout]}>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1} />
      </View>
      <Reply />
      <View style={[styles.footerInput1, styles.footerLayout]}>
        <View style={styles.reply}>
          <Text style={styles.label} numberOfLines={1}>
            Message...
          </Text>
          <Image
            style={[styles.iconemoji, styles.iconemojiLayout]}
            contentFit="cover"
            source={require("../assets/iconmic.png")}
          />
          <Image
            style={[styles.iconemoji, styles.iconemojiLayout]}
            contentFit="cover"
            source={require("../assets/iconmic.png")}
          />
          <Image
            style={[styles.iconemoji, styles.iconemojiLayout]}
            contentFit="cover"
            source={require("../assets/iconmic.png")}
          />
          <Image
            style={[styles.iconemoji, styles.iconemojiLayout]}
            contentFit="cover"
            source={require("../assets/iconemoji.png")}
          />
          <Image
            style={[styles.iconemoji, styles.iconemojiLayout]}
            contentFit="cover"
            source={require("../assets/iconimage.png")}
          />
          <Image
            style={styles.iconemojiLayout}
            contentFit="cover"
            source={require("../assets/polygon-1.png")}
          />
        </View>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerLayout: {
    height: 82,
    overflow: "hidden",
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconemojiLayout: {
    marginLeft: 16,
    height: 24,
    width: 24,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    bottom: 0,
    height: 34,
    width: 375,
    left: 0,
    position: "absolute",
  },
  label: {
    flex: 1,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_200,
    textAlign: "left",
    overflow: "hidden",
  },
  iconemoji: {
    overflow: "hidden",
  },
  reply: {
    right: 17,
    bottom: 34,
    left: 15,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    position: "absolute",
  },
  footerInput1: {
    top: 0,
    overflow: "hidden",
  },
  footerInput: {
    top: 730,
    overflow: "hidden",
  },
});

export default FooterInput3;
