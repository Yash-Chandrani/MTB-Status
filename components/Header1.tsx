import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type Header1Type = {
  /** Style props */
  propTop?: number | string;

  /** Action props */
  onPolygonPressablePress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Header1 = ({ propTop, onPolygonPressablePress }: Header1Type) => {
  const polygonPressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={styles.header}>
      <Image
        style={[styles.iconchevronLeft, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/iconmic.png")}
      />
      <Image
        style={styles.profileImageIcon}
        contentFit="cover"
        source={require("../assets/profile-image1.png")}
      />
      <View style={styles.text}>
        <Text style={styles.jackDylanSumedh}>Jack, Dylan, Sumedh, Yash...</Text>
      </View>
      <Image
        style={[styles.iconphone, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/iconmic.png")}
      />
      <Image
        style={[styles.iconvideo, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/iconmic.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout, polygonPressableStyle]}
        onPress={onPolygonPressablePress}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/polygon-2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconchevronLeft: {
    left: 16,
    width: 24,
    top: "50%",
    marginTop: -12,
  },
  profileImageIcon: {
    marginTop: -16,
    left: 52,
    width: 32,
    height: 32,
    top: "50%",
    position: "absolute",
  },
  jackDylanSumedh: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    width: 249,
  },
  text: {
    marginTop: -11,
    left: 92,
    width: 266,
    top: "50%",
    position: "absolute",
  },
  iconphone: {
    left: 287,
    top: "50%",
    marginTop: -12,
    overflow: "hidden",
  },
  iconvideo: {
    left: 335,
    top: "50%",
    marginTop: -12,
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    top: 13,
    left: 16,
    width: 24,
  },
  header: {
    top: 44,
    left: 0,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderBottomWidth: 0.5,
    width: 375,
    height: 56,
    overflow: "hidden",
    position: "absolute",
  },
});

export default Header1;
