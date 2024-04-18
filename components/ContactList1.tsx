import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

export type ContactList1Type = {
  dylanLang?: string;
  prop?: string;
  profileImage?: ImageSourcePropType;

  /** Style props */
  propTop?: number | string;
  propWidth?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContactList1 = ({
  dylanLang,
  prop,
  profileImage,
  propTop,
  propWidth,
  propLeft,
}: ContactList1Type) => {
  const contactListStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const profileImageIconStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.contactList, contactListStyle]}>
      <View style={styles.contactListChild} />
      <View
        style={[
          styles.dylanLangParent,
          styles.dylanLangParentPosition,
          groupViewStyle,
        ]}
      >
        <Text style={[styles.dylanLang, styles.textPosition]}>{dylanLang}</Text>
        <Text style={[styles.text, styles.textPosition]}>{prop}</Text>
      </View>
      <Image
        style={[
          styles.profileImageIcon,
          styles.dylanLangParentPosition,
          profileImageIconStyle,
        ]}
        contentFit="cover"
        source={profileImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dylanLangParentPosition: {
    height: 40,
    top: "50%",
    marginTop: -20,
    position: "absolute",
  },
  textPosition: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 18,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  contactListChild: {
    right: 16,
    bottom: 0,
    backgroundColor: Color.textDisable,
    height: 1,
    left: 63,
    position: "absolute",
  },
  dylanLang: {
    fontSize: FontSize.defaultBoldBody_size,
    color: Color.labelColorLightPrimary,
    marginTop: -20,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 18,
  },
  text: {
    marginTop: 2,
    fontSize: FontSize.size_sm,
    color: Color.textLight,
  },
  dylanLangParent: {
    width: 96,
    left: 63,
  },
  profileImageIcon: {
    left: 16,
    width: 40,
  },
  contactList: {
    top: 150,
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 60,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
});

export default ContactList1;
