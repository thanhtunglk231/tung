import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PhoneLogin from "./screens/PhoneLogin";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PhoneLogin" component={PhoneLogin} options={{ title: "Đăng nhập" }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
