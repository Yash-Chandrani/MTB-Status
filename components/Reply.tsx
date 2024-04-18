import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Reply = () => {
  return (
    <View style={styles.reply}>
      <Text style={styles.label} numberOfLines={1}>
        Message...
      </Text>
      <Image
        style={styles.iconmic}
        contentFit="cover"
        source={require("../assets/iconmic.png")}
      />
      <Image
        style={styles.iconmic}
        contentFit="cover"
        source={require("../assets/iconmic.png")}
      />
      <Image
        style={styles.iconmic}
        contentFit="cover"
        source={require("../assets/iconmic.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    flex: 1,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_200,
    textAlign: "left",
    overflow: "hidden",
  },
  iconmic: {
    width: 24,
    height: 24,
    marginLeft: 16,
    overflow: "hidden",
  },
  reply: {
    position: "absolute",
    right: 16,
    bottom: 34,
    left: 16,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
});

export default Reply;
