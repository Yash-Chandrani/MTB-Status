import * as React from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Chat5 from "../components/Chat5";
import Chat3 from "../components/Chat3";
import IPhoneX11ProLightBas from "../components/IPhoneX11ProLightBas";
import DarkModeFalse from "../components/DarkModeFalse";
import { Border, Color } from "../GlobalStyles";

const ChatList1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.chatList2}>
      <View style={styles.chatParent}>
        <Chat5 />
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
          prop="8/2/23"
          cteDIvoire="I went there yesterday"
        />
        <Chat3
          avatar={require("../assets/avatar8.png")}
          calvinEdwards="Ralph Edwards"
          prop="7/11/23"
          cteDIvoire="Hey, how are you?"
        />
        <Chat3
          avatar={require("../assets/avatar9.png")}
          calvinEdwards="Savannah Nguyen"
          prop="6/21/23"
          cteDIvoire="Yeah"
        />
      </View>
      <IPhoneX11ProLightBas
        leftSide={require("../assets/left-side3.png")}
        onPolygonPressablePress={() => navigation.navigate("HomePage1")}
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
  chatList2: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ChatList1;
