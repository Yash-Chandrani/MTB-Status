import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Property1left from "../components/Property1left";
import ContactList1 from "../components/ContactList1";
import ContactList from "../components/ContactList";
import StatusBarIPhoneXOrNewe from "../components/StatusBarIPhoneXOrNewe";
import DarkModeFalse from "../components/DarkModeFalse";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const EmergencyContact3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.emergencyContact5}>
      <View style={styles.emergencyContact5Child} />
      <View style={styles.emergencyContact5Item} />
      <Pressable
        style={[styles.ic24arrowleft, styles.icoAddLayout]}
        onPress={() => navigation.navigate("HomePage1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ic24arrowleft.png")}
        />
      </Pressable>
      <Text style={styles.title}>My Friends</Text>
      <Pressable
        style={[styles.icoAdd, styles.icoAddLayout]}
        onPress={() => navigation.navigate("EmergencyContact4")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icoadd.png")}
        />
      </Pressable>
      <Property1left
        searchButtonText="Dylan, Sumedh, Yash, Jack"
        property1leftPosition="absolute"
        property1leftTop={104}
        property1leftLeft={27}
        searchFontFamily="ABeeZee-Regular"
        searchColor="#8a8a8d"
      />
      <ContactList1
        dylanLang="Dylan Lang"
        prop="(270) 555-0117"
        profileImage={require("../assets/profile-image6.png")}
        propTop={150}
        propWidth={96}
        propLeft={16}
      />
      <ContactList1
        dylanLang="Sumedh Deepak Patkar"
        prop="(308) 555-0121"
        profileImage={require("../assets/profile-image7.png")}
        propTop={210}
        propWidth={177}
        propLeft={15}
      />
      <ContactList1
        dylanLang="Yash Chandrani"
        prop="(684) 555-0102"
        profileImage={require("../assets/profile-image8.png")}
        propTop={270}
        propWidth={119}
        propLeft={15}
      />
      <ContactList
        group232={require("../assets/group-232.png")}
        jackHou="Jack Hou"
        prop="(704) 555-0127"
        propTop={330}
        propWidth={96}
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
  icoAddLayout: {
    height: 24,
    width: 24,
    top: 54,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  emergencyContact5Child: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhitesmoke_300,
    width: 375,
    height: 88,
    position: "absolute",
  },
  emergencyContact5Item: {
    height: "10.84%",
    top: "0%",
    right: "0%",
    bottom: "89.16%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  ic24arrowleft: {
    left: 15,
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
  icon1: {
    overflow: "hidden",
  },
  icoAdd: {
    left: 336,
  },
  leftSideIcon: {
    top: 12,
    left: 7,
    width: 54,
    height: 21,
    position: "absolute",
  },
  emergencyContact5: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default EmergencyContact3;
