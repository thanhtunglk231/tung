import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import BeveragesScreen from './screens/BeveragesScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator cho Home Screen và Product Detail
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetailScreen}
      options={{ headerTitle: '', headerBackTitleVisible: false }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Shop') iconName = 'store';
            else if (route.name === 'Explore') iconName = 'explore';
            else if (route.name === 'Cart') iconName = 'shopping-cart';
            else if (route.name === 'Favourites') iconName = 'favorite';
            else if (route.name === 'Account') iconName = 'person';
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2ECC71',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Shop" component={HomeStack} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Cart" component={HomeScreen} />
        <Tab.Screen name="Favourites" component={HomeScreen} />
        <Tab.Screen name="Account" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;