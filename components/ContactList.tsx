import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

export type ContactListType = {
  group232?: ImageSourcePropType;
  jackHou?: string;
  prop?: string;

  /** Style props */
  propTop?: number | string;
  propWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContactList = ({
  group232,
  jackHou,
  prop,
  propTop,
  propWidth,
}: ContactListType) => {
  const contactList1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.contactList, contactList1Style]}>
      <Image
        style={[styles.contactListChild, styles.jackHouParentPosition1]}
        contentFit="cover"
        source={group232}
      />
      <View style={[styles.contactListItem, styles.jackHouParentPosition]} />
      <View
        style={[
          styles.jackHouParent,
          styles.jackHouParentPosition,
          groupView1Style,
        ]}
      >
        <Text style={[styles.jackHou, styles.textPosition]}>{jackHou}</Text>
        <Text style={[styles.text, styles.textPosition]}>{prop}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jackHouParentPosition1: {
    height: 40,
    top: "50%",
    marginTop: -20,
  },
  jackHouParentPosition: {
    left: 63,
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
    left: 15,
    width: 40,
    position: "absolute",
    top: "50%",
  },
  contactListItem: {
    right: 16,
    bottom: 0,
    backgroundColor: Color.textDisable,
    height: 1,
  },
  jackHou: {
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
  jackHouParent: {
    width: 96,
    height: 40,
    top: "50%",
    marginTop: -20,
  },
  contactList: {
    top: 330,
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 60,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
});

export default ContactList;
