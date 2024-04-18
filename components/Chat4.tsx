import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Chat4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.chatFlexBox}>
      <Pressable
        style={styles.individualChat}
        onPress={() => navigation.navigate("Chat")}
      >
        <View style={[styles.avatarAndName, styles.chatFlexBox]}>
          <Image
            style={styles.avatarIcon}
            contentFit="cover"
            source={require("../assets/avatar1.png")}
          />
          <View style={styles.name}>
            <View style={[styles.avatarAndName, styles.chatFlexBox]}>
              <Text style={styles.calvinEdwards}>
                Jack, Dylan, Sumedh, Yash...
              </Text>
              <Text style={[styles.text, styles.textTypo]}>15:41</Text>
            </View>
            <Text style={[styles.cteDivoire, styles.textTypo]} />
          </View>
        </View>
      </Pressable>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  chatFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  avatarIcon: {
    width: 40,
    height: 40,
  },
  calvinEdwards: {
    fontSize: FontSize.defaultBoldBody_size,
    color: Color.labelColorLightPrimary,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    flex: 1,
  },
  text: {
    color: Color.colorSilver_100,
    textAlign: "right",
    marginLeft: 12,
  },
  avatarAndName: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  cteDivoire: {
    lineHeight: 17,
    color: Color.colorDarkgray_200,
    marginTop: 4,
    textAlign: "left",
    alignSelf: "stretch",
  },
  name: {
    marginLeft: 10,
    flex: 1,
    overflow: "hidden",
  },
  individualChat: {
    backgroundColor: Color.colorWhite,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    width: 375,
    overflow: "hidden",
  },
  divider: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 1,
    width: 375,
  },
});

export default Chat4;
