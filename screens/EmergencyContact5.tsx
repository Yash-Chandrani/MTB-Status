import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Property1left from "../components/Property1left";
import StatusBarIPhoneXOrNewe from "../components/StatusBarIPhoneXOrNewe";
import DarkModeFalse from "../components/DarkModeFalse";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const EmergencyContact5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.emergencyContact4}>
      <View style={styles.emergencyContact4Child} />
      <View style={styles.emergencyContact4Item} />
      <Pressable
        style={styles.ic24arrowleft}
        onPress={() => navigation.navigate("HomePage1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ic24arrowleft.png")}
        />
      </Pressable>
      <Text style={styles.title}>My Emergency Contacts</Text>
      <Property1left
        searchButtonText="Search"
        property1leftPosition="absolute"
        property1leftTop={104}
        property1leftLeft={27}
        searchFontFamily="ABeeZee-Regular"
        searchColor="#8a8a8d"
        onSearchBarPress={() => navigation.navigate("EmergencyContact3")}
      />
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
        source={require("../assets/left-side3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emergencyContact4Child: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhitesmoke_300,
    width: 375,
    height: 88,
    position: "absolute",
  },
  emergencyContact4Item: {
    height: "10.84%",
    top: "0%",
    right: "0%",
    bottom: "89.16%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  ic24arrowleft: {
    left: 15,
    top: 54,
    width: 24,
    height: 24,
    position: "absolute",
  },
  title: {
    top: 55,
    left: 88,
    fontSize: FontSize.size_base,
    lineHeight: 21,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    width: 200,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 7,
    width: 54,
    height: 21,
    position: "absolute",
  },
  emergencyContact4: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default EmergencyContact5;
