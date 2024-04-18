import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type DarkModeFalseTypeDefaultType = {
  actionLabel?: string;

  /** Style props */
  darkModeFalseTypeDefaultPosition?: string;
  darkModeFalseTypeDefaultPaddingHorizontal?: number | string;
  darkModeFalseTypeDefaultAlignSelf?: string;
  darkModeFalseTypeDefaultFlex?: number;
  darkModeFalseTypeDefaultMarginLeft?: number | string;
  actionFontFamily?: string;
  actionFlex?: number;
  actionFontWeight?: string;

  /** Action props */
  onActionItemPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeFalseTypeDefault = ({
  actionLabel,
  darkModeFalseTypeDefaultPosition,
  darkModeFalseTypeDefaultPaddingHorizontal,
  darkModeFalseTypeDefaultAlignSelf,
  darkModeFalseTypeDefaultFlex,
  darkModeFalseTypeDefaultMarginLeft,
  actionFontFamily,
  actionFlex,
  actionFontWeight,
  onActionItemPress,
}: DarkModeFalseTypeDefaultType) => {
  const darkModeFalseTypeDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", darkModeFalseTypeDefaultPosition),
      ...getStyleValue(
        "paddingHorizontal",
        darkModeFalseTypeDefaultPaddingHorizontal
      ),
      ...getStyleValue("alignSelf", darkModeFalseTypeDefaultAlignSelf),
      ...getStyleValue("flex", darkModeFalseTypeDefaultFlex),
      ...getStyleValue("marginLeft", darkModeFalseTypeDefaultMarginLeft),
    };
  }, [
    darkModeFalseTypeDefaultPosition,
    darkModeFalseTypeDefaultPaddingHorizontal,
    darkModeFalseTypeDefaultAlignSelf,
    darkModeFalseTypeDefaultFlex,
    darkModeFalseTypeDefaultMarginLeft,
  ]);

  const actionStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", actionFontFamily),
      ...getStyleValue("flex", actionFlex),
      ...getStyleValue("fontWeight", actionFontWeight),
    };
  }, [actionFontFamily, actionFlex, actionFontWeight]);

  return (
    <View
      style={[styles.darkModefalseTypedefault, darkModeFalseTypeDefaultStyle]}
      onPress={onActionItemPress}
    >
      <Text style={[styles.action, actionStyle]}>{actionLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  action: {
    fontSize: FontSize.defaultBoldBody_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FontFamily.defaultRegularFootnote,
    color: Color.defaultSystemBlueLight,
    textAlign: "center",
  },
  darkModefalseTypedefault: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_24xl,
    paddingVertical: Padding.p_2xs,
  },
});

export default DarkModeFalseTypeDefault;
