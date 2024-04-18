const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomePage from "./screens/HomePage";
import SOS2 from "./screens/SOS2";
import SOS3 from "./screens/SOS3";
import HomePage1 from "./screens/HomePage1";
import EmergencyContact from "./screens/EmergencyContact1";
import EmergencyContact2 from "./screens/EmergencyContact2";
import EmergencyContact3 from "./screens/EmergencyContact3";
import EmergencyContact4 from "./screens/EmergencyContact4";
import EmergencyContact5 from "./screens/EmergencyContact5";
import FriendList1 from "./screens/FriendList1";
import FooterInput from "./components/FooterInput";
import EmergencyContact6 from "./screens/EmergencyContact6";
import EmergencyContact from "./screens/EmergencyContact";
import SOS from "./screens/SOS";
import SOS1 from "./screens/SOS1";
import FriendList from "./screens/FriendList";
import EmergencyContact1 from "./screens/EmergencyContact11";
import Chat from "./screens/Chat";
import Chat1 from "./screens/Chat1";
import Chat2 from "./screens/Chat2";
import ChatList from "./screens/ChatList";
import ChatList1 from "./screens/ChatList1";
import DarkModeFalseTypeDefault from "./components/DarkModeFalseTypeDefault";
import DarkModeFalse from "./components/DarkModeFalse";
import Property1left from "./components/Property1left";
import TitleTrueContentFalseFoo from "./components/TitleTrueContentFalseFoo";
import DarkModeFalseActionCount from "./components/DarkModeFalseActionCount";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-ExtraLight": require("./assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Actor-Regular": require("./assets/fonts/Actor-Regular.ttf"),
    "ABeeZee-Regular": require("./assets/fonts/ABeeZee-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Alice-Regular": require("./assets/fonts/Alice-Regular.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SOS2"
              component={SOS2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SOS3"
              component={SOS3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage1"
              component={HomePage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmergencyContact"
              component={EmergencyContact}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmergencyContact2"
              component={EmergencyContact2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmergencyContact3"
              component={EmergencyContact3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmergencyContact4"
              component={EmergencyContact4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmergencyContact5"
              component={EmergencyContact5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FriendList1"
              component={FriendList1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmergencyContact6"
              component={EmergencyContact6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmergencyContact1"
              component={EmergencyContact}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SOS"
              component={SOS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SOS1"
              component={SOS1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FriendList"
              component={FriendList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmergencyContact11"
              component={EmergencyContact1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat1"
              component={Chat1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat2"
              component={Chat2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatList"
              component={ChatList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatList1"
              component={ChatList1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
