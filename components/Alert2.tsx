import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import DarkModeFalseTypeDefault from "./DarkModeFalseTypeDefault";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

export type Alert2Type = {
  /** Action props */
  onActionItemPress?: () => void;
};

const Alert2 = ({ onActionItemPress }: Alert2Type) => {
  return (
    <View style={styles.alert}>
      <View style={styles.content}>
        <Text style={[styles.title, styles.titleFlexBox]}>
          Emergency Contacts Added
        </Text>
        <Text style={[styles.description, styles.titleFlexBox]}>
          You’ve added Dylan, Sumedh, Yash, and Jack as emergency contacts!
        </Text>
      </View>
      <View style={styles.separator} />
      <DarkModeFalseTypeDefault
        actionLabel="Ok"
        darkModeFalseTypeDefaultPosition="unset"
        darkModeFalseTypeDefaultPaddingHorizontal="unset"
        darkModeFalseTypeDefaultAlignSelf="stretch"
        darkModeFalseTypeDefaultMarginLeft="unset"
        actionFontFamily="Actor-Regular"
        actionFlex={1}
        actionFontWeight="unset"
        onActionItemPress={() => navigation.navigate("HomePage")}
      />
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
  title: {
    fontSize: FontSize.defaultBoldBody_size,
    lineHeight: 22,
    fontFamily: FontFamily.actorRegular,
  },
  description: {
    fontSize: FontSize.defaultRegularFootnote_size,
    lineHeight: 18,
    fontFamily: FontFamily.aBeeZeeRegular,
    marginTop: 2,
  },
  content: {
    overflow: "hidden",
    alignItems: "center",
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
  separator: {
    backgroundColor: Color.separatorColorLightWithTransparency,
    height: 1,
    alignSelf: "stretch",
  },
  alert: {
    position: "absolute",
    top: 321,
    left: 63,
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorWhitesmoke_700,
    width: 270,
  },
});

export default Alert2;
