import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type HeaderType = {
  /** Style props */
  propBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Header = ({ propBackgroundColor }: HeaderType) => {
  const headerStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View style={[styles.header, headerStyle]}>
      <Image
        style={[styles.iconchevronLeft, styles.iconphonePosition]}
        contentFit="cover"
        source={require("../assets/iconmic.png")}
      />
      <View style={styles.text}>
        <Text style={styles.mtbstatus}>MTB Status</Text>
      </View>
      <Image
        style={[styles.iconphone, styles.iconphonePosition]}
        contentFit="cover"
        source={require("../assets/iconmic.png")}
      />
      <Image
        style={[styles.iconvideo, styles.iconphonePosition]}
        contentFit="cover"
        source={require("../assets/iconmic.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconphonePosition: {
    height: 24,
    width: 24,
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  iconchevronLeft: {
    left: 16,
  },
  mtbstatus: {
    fontSize: FontSize.size_13xl,
    lineHeight: 45,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
    width: 249,
  },
  text: {
    marginTop: -22,
    left: 85,
    width: 266,
    height: 34,
    top: "50%",
    position: "absolute",
  },
  iconphone: {
    left: 287,
    overflow: "hidden",
  },
  iconvideo: {
    left: 335,
    overflow: "hidden",
  },
  header: {
    top: 44,
    left: 0,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderBottomWidth: 0.5,
    width: 375,
    height: 56,
    overflow: "hidden",
    position: "absolute",
  },
});

export default Header;
