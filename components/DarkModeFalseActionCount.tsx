import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

export type DarkModeFalseActionCountType = {
  title?: string;
  description?: string;
  action?: string;
  action1?: string;

  /** Style props */
  darkModeFalseActionCountPosition?: string;
  darkModeFalseActionCountTop?: number | string;
  darkModeFalseActionCountLeft?: number | string;
  darkModeFalseActionCountBackgroundColor?: string;
  titleFontWeight?: string;
  titleFontFamily?: string;
  descriptionFontFamily?: string;
  actionFontFamily?: string;
  actionFontWeight?: string;
  actionFontFamily1?: string;

  /** Action props */
  onActionsPress?: () => void;
  onActionItemPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeFalseActionCount = ({
  title,
  description,
  action,
  action1,
  darkModeFalseActionCountPosition,
  darkModeFalseActionCountTop,
  darkModeFalseActionCountLeft,
  darkModeFalseActionCountBackgroundColor,
  titleFontWeight,
  titleFontFamily,
  descriptionFontFamily,
  actionFontFamily,
  actionFontWeight,
  actionFontFamily1,
  onActionsPress,
  onActionItemPress,
}: DarkModeFalseActionCountType) => {
  const darkModeFalseActionCountStyle = useMemo(() => {
    return {
      ...getStyleValue("position", darkModeFalseActionCountPosition),
      ...getStyleValue("top", darkModeFalseActionCountTop),
      ...getStyleValue("left", darkModeFalseActionCountLeft),
      ...getStyleValue(
        "backgroundColor",
        darkModeFalseActionCountBackgroundColor
      ),
    };
  }, [
    darkModeFalseActionCountPosition,
    darkModeFalseActionCountTop,
    darkModeFalseActionCountLeft,
    darkModeFalseActionCountBackgroundColor,
  ]);

  const titleStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", titleFontWeight),
      ...getStyleValue("fontFamily", titleFontFamily),
    };
  }, [titleFontWeight, titleFontFamily]);

  const descriptionStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", descriptionFontFamily),
    };
  }, [descriptionFontFamily]);

  const action1Style = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", actionFontFamily),
    };
  }, [actionFontFamily]);

  const action2Style = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", actionFontWeight),
      ...getStyleValue("fontFamily", actionFontFamily1),
    };
  }, [actionFontWeight, actionFontFamily1]);

  return (
    <View
      style={[styles.darkModefalseActionCount, darkModeFalseActionCountStyle]}
    >
      <View style={styles.content}>
        <Text style={[styles.title, styles.titleFlexBox, titleStyle]}>
          {title}
        </Text>
        <Text
          style={[styles.description, styles.titleFlexBox, descriptionStyle]}
        >
          {description}
        </Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.actions} onPress={onActionsPress}>
        <View style={[styles.actionItem, styles.actionItemFlexBox]}>
          <Text style={[styles.action, styles.actionTypo, action1Style]}>
            {action}
          </Text>
        </View>
        <View style={[styles.separator1, styles.separator1SpaceBlock]} />
        <View
          style={[styles.actionItem1, styles.separator1SpaceBlock]}
          onPress={onActionItemPress}
        >
          <Text style={[styles.action1, styles.actionTypo, action2Style]}>
            {action1}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  actionItemFlexBox: {
    paddingVertical: Padding.p_2xs,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  actionTypo: {
    color: Color.defaultSystemBlueLight,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.defaultBoldBody_size,
  },
  separator1SpaceBlock: {
    marginLeft: 0.5,
    alignSelf: "stretch",
  },
  title: {
    fontFamily: FontFamily.defaultBoldSubheadline,
    fontWeight: "600",
    lineHeight: 22,
    fontSize: FontSize.defaultBoldBody_size,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
  },
  description: {
    fontSize: FontSize.defaultRegularFootnote_size,
    lineHeight: 18,
    marginTop: 2,
    fontFamily: FontFamily.defaultRegularFootnote,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
  },
  content: {
    overflow: "hidden",
    padding: Padding.p_base,
    alignItems: "center",
    alignSelf: "stretch",
  },
  separator: {
    height: 1,
    backgroundColor: Color.separatorColorLightWithTransparency,
    alignSelf: "stretch",
  },
  action: {
    fontFamily: FontFamily.defaultRegularFootnote,
  },
  actionItem: {
    paddingHorizontal: Padding.p_24xl,
    alignSelf: "stretch",
  },
  separator1: {
    width: 1,
    backgroundColor: Color.separatorColorLightWithTransparency,
  },
  action1: {
    fontFamily: FontFamily.defaultBoldSubheadline,
    fontWeight: "600",
  },
  actionItem1: {
    paddingHorizontal: Padding.p_22xl,
    paddingVertical: Padding.p_2xs,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  actions: {
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
  },
  darkModefalseActionCount: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorWhitesmoke_700,
    width: 270,
    height: 137,
  },
});

export default DarkModeFalseActionCount;
