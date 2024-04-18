import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

export type FrameComponent1Type = {
  ellipse3?: ImageSourcePropType;
  ellipse4?: ImageSourcePropType;
};

const FrameComponent1 = ({ ellipse3, ellipse4 }: FrameComponent1Type) => {
  return (
    <View style={styles.sos1Inner}>
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={ellipse3}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={ellipse4}
        />
        <Text style={[styles.sos, styles.sosClr]}>SOS</Text>
        <Text style={[styles.sos, styles.sosClr]}>SOS</Text>
        <Text style={[styles.press, styles.sosClr]}>{`Press `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  sosClr: {
    color: Color.colorDarkgray_100,
    position: "absolute",
  },
  frameChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  frameItem: {
    height: "74.99%",
    width: "74.99%",
    top: "12.49%",
    right: "12.51%",
    bottom: "12.51%",
    left: "12.49%",
  },
  sos: {
    top: "28.15%",
    left: "33.49%",
    fontSize: FontSize.size_51xl_6,
    lineHeight: 175,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
  },
  press: {
    marginLeft: -28.15,
    top: "60.19%",
    fontSize: FontSize.size_3xl_1,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    left: "50%",
  },
  ellipseParent: {
    marginTop: -228.3,
    marginLeft: -226.5,
    top: "50%",
    width: 455,
    height: 455,
    left: "50%",
    position: "absolute",
  },
  sos1Inner: {
    top: 512,
    left: 95,
    borderRadius: 44,
    backgroundColor: Color.colorGhostwhite,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 2.2,
    width: 185,
    height: 188,
    overflow: "hidden",
    position: "absolute",
  },
});

export default FrameComponent1;
