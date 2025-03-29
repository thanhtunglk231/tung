import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PaymentScreen from "./screens/PaymentScreen";
import SuccessScreen from "./screens/SuccessScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
