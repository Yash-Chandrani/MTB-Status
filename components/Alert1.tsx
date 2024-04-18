import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import DarkModeFalseTypeDefault from "./DarkModeFalseTypeDefault";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

export type Alert1Type = {
  /** Action props */
  onActionItemPress?: () => void;
  onActionItemPress1?: () => void;
};

const Alert1 = ({ onActionItemPress, onActionItemPress1 }: Alert1Type) => {
  return (
    <View style={styles.alert}>
      <View style={styles.content}>
        <Text style={[styles.title, styles.titleFlexBox]}>
          Confirm SOS Signal Transmission
        </Text>
        <Text style={[styles.description, styles.titleFlexBox]}>
          Are you sure you want to send an SOS signal to all of your emergency
          contacts?
        </Text>
      </View>
      <View style={[styles.separator, styles.separatorBg]} />
      <View style={styles.actions}>
        <DarkModeFalseTypeDefault
          actionLabel="Yes"
          darkModeFalseTypeDefaultPosition="unset"
          darkModeFalseTypeDefaultPaddingHorizontal="unset"
          darkModeFalseTypeDefaultAlignSelf="stretch"
          darkModeFalseTypeDefaultFlex={1}
          darkModeFalseTypeDefaultMarginLeft="unset"
          actionFontFamily="Actor-Regular"
          actionFontWeight="unset"
          onActionItemPress={() => navigation.navigate("SOS1")}
        />
        <View style={[styles.separator1, styles.separatorBg]} />
        <DarkModeFalseTypeDefault
          actionLabel="No"
          darkModeFalseTypeDefaultPosition="unset"
          darkModeFalseTypeDefaultPaddingHorizontal="unset"
          darkModeFalseTypeDefaultAlignSelf="stretch"
          darkModeFalseTypeDefaultFlex={1}
          darkModeFalseTypeDefaultMarginLeft={0.5}
          actionFontFamily="Actor-Regular"
          actionFontWeight="unset"
          onActionItemPress={() => navigation.navigate("HomePage")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.actorRegular,
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  separatorBg: {
    backgroundColor: Color.separatorColorLightWithTransparency,
    alignSelf: "stretch",
  },
  title: {
    fontSize: FontSize.defaultBoldBody_size,
    lineHeight: 22,
  },
  description: {
    fontSize: FontSize.defaultRegularFootnote_size,
    lineHeight: 18,
    marginTop: 2,
  },
  content: {
    overflow: "hidden",
    alignItems: "center",
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
  separator: {
    height: 1,
  },
  separator1: {
    width: 1,
    marginLeft: 0.5,
  },
  actions: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  alert: {
    position: "absolute",
    top: 338,
    left: 52,
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorWhitesmoke_700,
    width: 270,
    height: 137,
  },
});

export default Alert1;
