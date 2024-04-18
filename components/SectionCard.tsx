import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

export type SectionCardType = {
  /** Action props */
  onGroupPressablePress?: () => void;
};

const SectionCard = ({ onGroupPressablePress }: SectionCardType) => {
  return (
    <Pressable
      style={[styles.rectangleParent, styles.groupChildLayout]}
      onPress={onGroupPressablePress}
    >
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={styles.emergencyContactsAddContainer}>
        <Text style={styles.emergencyContacts}>{`Emergency Contacts
`}</Text>
        <Text style={styles.addEmergencyContacts}>{`
Add emergency contacts before a ride so that you can get help on the way`}</Text>
      </Text>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 184,
    width: 346,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGainsboro_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  emergencyContacts: {
    fontSize: FontSize.size_10xl,
    fontFamily: FontFamily.interRegular,
    color: Color.labelColorLightPrimary,
  },
  addEmergencyContacts: {
    fontSize: FontSize.size_2xs,
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
    color: Color.colorDarkslategray_100,
  },
  emergencyContactsAddContainer: {
    top: 97,
    left: 20,
    textAlign: "center",
    width: 306,
    position: "absolute",
  },
  image1Icon: {
    top: 13,
    left: 127,
    width: 70,
    height: 58,
    position: "absolute",
  },
  rectangleParent: {
    top: 279,
    left: 16,
  },
});

export default SectionCard;
