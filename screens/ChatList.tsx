import * as React from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Chat4 from "../components/Chat4";
import Chat3 from "../components/Chat3";
import IPhoneX11ProLightBas from "../components/IPhoneX11ProLightBas";
import DarkModeFalse from "../components/DarkModeFalse";
import { Border, Color } from "../GlobalStyles";

const ChatList = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.chatList1}>
      <View style={styles.chatParent}>
        <Chat4 />
        <Chat3
          avatar={require("../assets/avatar11.png")}
          calvinEdwards="Jane Cooper"
          prop="16:41"
          cteDIvoire="I hope it goes well."
        />
        <Chat3
          avatar={require("../assets/avatar2.png")}
          calvinEdwards="Annette Black"
          prop="08:39"
          cteDIvoire="mountain bike on Sunday?"
        />
        <Chat3
          avatar={require("../assets/avatar3.png")}
          calvinEdwards="Robert Fox"
          prop="Yesterday"
          cteDIvoire="IDK what else is there to do"
        />
        <Chat3
          avatar={require("../assets/avatar4.png")}
          calvinEdwards="Wade Warren"
          prop="Friday"
          cteDIvoire="Go to hell"
        />
        <Chat3
          avatar={require("../assets/avatar5.png")}
          calvinEdwards="Cody Fisher"
          prop="Thursday"
          cteDIvoire="No, I can't come tomorrow."
        />
        <Chat3
          avatar={require("../assets/avatar6.png")}
          calvinEdwards="Darlene Robertson"
          prop="Tuesday"
          cteDIvoire="Yeah! You're right."
        />
        <Chat3
          avatar={require("../assets/avatar7.png")}
          calvinEdwards="Marvin McKinney"
          prop="8/2/19"
          cteDIvoire="I went there yesterday"
        />
        <Chat3
          avatar={require("../assets/avatar8.png")}
          calvinEdwards="Ralph Edwards"
          prop="7/11/19"
          cteDIvoire="Hey, how are you?"
        />
        <Chat3
          avatar={require("../assets/avatar9.png")}
          calvinEdwards="Savannah Nguyen"
          prop="6/21/19"
          cteDIvoire="Yeah"
        />
      </View>
      <IPhoneX11ProLightBas
        leftSide={require("../assets/left-side.png")}
        onPolygonPressablePress={() => navigation.navigate("HomePage")}
      />
      <DarkModeFalse
        darkModeFalsePosition="absolute"
        darkModeFalseTop={778}
        darkModeFalseLeft={-15}
        darkModeFalseWidth={375}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatParent: {
    position: "absolute",
    top: 88,
    left: 0,
    height: 641,
    alignItems: "center",
  },
  chatList1: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ChatList;
