import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

export type TitleTrueContentFalseFooType = {
  showLabelTitle?: boolean;

  /** Style props */
  titleTrueContentFalseFooPosition?: string;
  titleTrueContentFalseFooWidth?: number | string;
  titleTrueContentFalseFooTop?: number | string;
  titleTrueContentFalseFooLeft?: number | string;
  labelTimeRight?: number | string;
  contentHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TitleTrueContentFalseFoo = ({
  showLabelTitle,
  titleTrueContentFalseFooPosition,
  titleTrueContentFalseFooWidth,
  titleTrueContentFalseFooTop,
  titleTrueContentFalseFooLeft,
  labelTimeRight,
  contentHeight,
}: TitleTrueContentFalseFooType) => {
  const titleTrueContentFalseFooStyle = useMemo(() => {
    return {
      ...getStyleValue("position", titleTrueContentFalseFooPosition),
      ...getStyleValue("width", titleTrueContentFalseFooWidth),
      ...getStyleValue("top", titleTrueContentFalseFooTop),
      ...getStyleValue("left", titleTrueContentFalseFooLeft),
    };
  }, [
    titleTrueContentFalseFooPosition,
    titleTrueContentFalseFooWidth,
    titleTrueContentFalseFooTop,
    titleTrueContentFalseFooLeft,
  ]);

  const labelTimeStyle = useMemo(() => {
    return {
      ...getStyleValue("right", labelTimeRight),
    };
  }, [labelTimeRight]);

  const contentStyle = useMemo(() => {
    return {
      ...getStyleValue("height", contentHeight),
    };
  }, [contentHeight]);

  return (
    <View
      style={[styles.titletrueContentfalseFoo, titleTrueContentFalseFooStyle]}
    >
      <View style={styles.header}>
        <Text style={[styles.labelTime, styles.labelTypo, labelTimeStyle]}>
          1h ago
        </Text>
        <Text style={[styles.labelAppName, styles.labelFlexBox]}>App Name</Text>
        <Image
          style={styles.icon60}
          contentFit="cover"
          source={require("../assets/icon60.png")}
        />
      </View>
      <View style={[styles.content, contentStyle]}>
        {showLabelTitle && (
          <Text style={[styles.labelTitle, styles.labelFlexBox]}>Title</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 3,
    position: "absolute",
  },
  labelFlexBox: {
    textAlign: "left",
    letterSpacing: -0.1,
  },
  labelTime: {
    right: 16,
    textTransform: "lowercase",
    textAlign: "right",
    letterSpacing: -0.1,
    color: Color.colorGray_300,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 3,
  },
  labelAppName: {
    left: 37,
    textTransform: "uppercase",
    color: Color.colorGray_300,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 3,
    position: "absolute",
    textAlign: "left",
  },
  icon60: {
    top: 0,
    left: 10,
    width: 20,
    position: "absolute",
    height: 20,
    overflow: "hidden",
  },
  header: {
    height: 20,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  labelTitle: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
    color: Color.colorGray_400,
    alignSelf: "stretch",
  },
  content: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    marginTop: 8,
    alignSelf: "stretch",
  },
  titletrueContentfalseFoo: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorDarkgray_300,
    width: 320,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    overflow: "hidden",
  },
});

export default TitleTrueContentFalseFoo;
