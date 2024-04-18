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

const FriendList1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.friendList2}>
      <View style={styles.friendList2Child} />
      <View style={styles.friendList2Item} />
      <Pressable
        style={[styles.ic24arrowleft, styles.icoAddIconLayout]}
        onPress={() => navigation.navigate("HomePage1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ic24arrowleft.png")}
        />
      </Pressable>
      <Text style={styles.title}>My Friends</Text>
      <Image
        style={[styles.icoAddIcon, styles.icoAddIconLayout]}
        contentFit="cover"
        source={require("../assets/icoadd.png")}
      />
      <Property1left
        searchButtonText="Search"
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
      <ContactList
        group232={require("../assets/group-2321.png")}
        jackHou="Courtney Henry"
        prop="(505) 555-0125"
        propTop={390}
        propWidth={117}
      />
      <ContactList
        group232={require("../assets/group-2322.png")}
        jackHou="Wade Warren"
        prop="(225) 555-0118"
        propTop={450}
        propWidth={101}
      />
      <ContactList
        group232={require("../assets/group-2323.png")}
        jackHou="Bessie Cooper"
        prop="(406) 555-0120"
        propTop={510}
        propWidth={110}
      />
      <ContactList
        group232={require("../assets/group-2324.png")}
        jackHou="Jusin Bieber"
        prop="(480) 555-0103"
        propTop={570}
        propWidth={96}
      />
      <ContactList
        group232={require("../assets/group-2325.png")}
        jackHou="Lebron James"
        prop="(702) 555-0122"
        propTop={630}
        propWidth={108}
      />
      <ContactList
        group232={require("../assets/group-2326.png")}
        jackHou="Jenny Wilson"
        prop="(239) 555-0108"
        propTop={690}
        propWidth={101}
      />
      <StatusBarIPhoneXOrNewe wifi={require("../assets/wifi3.png")} />
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseTop={778}
        darkModeFalseLeft={0}
        darkModeFalseWidth={375}
      />
      <Image
        style={styles.leftSideIcon}
        contentFit="cover"
        source={require("../assets/left-side2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icoAddIconLayout: {
    height: 24,
    width: 24,
    top: 54,
    position: "absolute",
  },
  friendList2Child: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhitesmoke_300,
    width: 375,
    height: 88,
    position: "absolute",
  },
  friendList2Item: {
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
  icoAddIcon: {
    left: 336,
    overflow: "hidden",
  },
  leftSideIcon: {
    top: 12,
    left: 7,
    width: 54,
    height: 21,
    position: "absolute",
  },
  friendList2: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default FriendList1;
