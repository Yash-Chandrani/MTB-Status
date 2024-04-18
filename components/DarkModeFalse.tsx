import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

export type DarkModeFalseType = {
  /** Style props */
  darkModeFalsePosition?: string;
  darkModeFalseTop?: number | string;
  darkModeFalseLeft?: number | string;
  darkModeFalseWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeFalse = ({
  darkModeFalsePosition,
  darkModeFalseTop,
  darkModeFalseLeft,
  darkModeFalseWidth,
}: DarkModeFalseType) => {
  const darkModeFalseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", darkModeFalsePosition),
      ...getStyleValue("top", darkModeFalseTop),
      ...getStyleValue("left", darkModeFalseLeft),
      ...getStyleValue("width", darkModeFalseWidth),
    };
  }, [
    darkModeFalsePosition,
    darkModeFalseTop,
    darkModeFalseLeft,
    darkModeFalseWidth,
  ]);

  return (
    <View style={[styles.darkModefalse, darkModeFalseStyle]}>
      <View style={styles.homeIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator: {
    position: "absolute",
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
  },
  darkModefalse: {
    width: 375,
    height: 34,
  },
});

export default DarkModeFalse;
