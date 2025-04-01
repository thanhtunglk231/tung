import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExplorerScreen from "../screens/explorerscreenn";
import AccountScreen from "../screens/accountscreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Import thư viện icon

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Explorer") {
            iconName = "compass-outline"; // Icon cho Explorer
          } else if (route.name === "Account") {
            iconName = "account-circle-outline"; // Icon cho Account
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FFA500", // Màu icon khi active
        tabBarInactiveTintColor: "gray", // Màu icon khi không active
      })}
    >
      <Tab.Screen name="Explorer" component={ExplorerScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;
