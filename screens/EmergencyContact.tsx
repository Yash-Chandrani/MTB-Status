import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import StatusBarIPhoneXOrNewe from "../components/StatusBarIPhoneXOrNewe";
import DarkModeFalse from "../components/DarkModeFalse";
import DarkModeFalseActionCount from "../components/DarkModeFalseActionCount";
import { Border, Color } from "../GlobalStyles";

const EmergencyContact = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.emergencyContact8}>
      <View style={styles.emergencyContact8Child} />
      <StatusBarIPhoneXOrNewe wifi={require("../assets/wifi1.png")} />
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseTop={778}
        darkModeFalseLeft={0}
        darkModeFalseWidth={375}
      />
      <Image
        style={styles.leftSideIcon}
        contentFit="cover"
        source={require("../assets/left-side1.png")}
      />
      <DarkModeFalseActionCount
        title="MTB alert"
        description="Your friend needs help with his flat tire"
        action="Message"
        action1="Ignore"
        darkModeFalseActionCountPosition="absolute"
        darkModeFalseActionCountTop={269}
        darkModeFalseActionCountLeft={53}
        darkModeFalseActionCountBackgroundColor="rgba(255, 166, 166, 0.8)"
        titleFontWeight="unset"
        titleFontFamily="Actor-Regular"
        descriptionFontFamily="Actor-Regular"
        actionFontFamily="Actor-Regular"
        actionFontWeight="unset"
        actionFontFamily1="Actor-Regular"
        onActionsPress={() => navigation.navigate("HomePage")}
        onActionItemPress={() => navigation.navigate("HomePage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emergencyContact8Child: {
    height: "10.84%",
    top: "0%",
    right: "0%",
    bottom: "89.16%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  leftSideIcon: {
    top: 12,
    left: 7,
    width: 54,
    height: 21,
    position: "absolute",
  },
  emergencyContact8: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default EmergencyContact;
