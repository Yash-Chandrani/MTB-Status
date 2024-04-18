import React, { useMemo } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

export type FrameComponentType = {
  ellipse3?: ImageSourcePropType;
  ellipse4?: ImageSourcePropType;

  /** Style props */
  propTop?: number | string;

  /** Action props */
  onFramePressablePress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({
  ellipse3,
  ellipse4,
  propTop,
  onFramePressablePress,
}: FrameComponentType) => {
  const framePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <Pressable
      style={[styles.homePage1Inner, framePressableStyle]}
      onPress={onFramePressablePress}
    >
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
    </Pressable>
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
    color: Color.colorWhite,
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
  homePage1Inner: {
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

export default FrameComponent;
