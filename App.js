import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import BeveragesScreen from './screens/BeveragesScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProductListScreen from './screens/ProductListScreen'; // Thêm import

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Placeholder screens for Cart, Favourites, and Account
const CartScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Cart"
      component={() => <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>Cart Screen</Text>}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const FavouritesScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Favourites"
      component={() => <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>Favourites Screen</Text>}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const AccountScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={() => <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>Account Screen</Text>}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

// Home Stack: Shop tab
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

// Explore Stack: Explore tab + Beverages + ProductDetail + ProductList
const ExploreStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Explore"
      component={ExploreScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Beverages"
      component={BeveragesScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetailScreen}
      options={{ headerTitle: '', headerBackTitleVisible: false }}
    />
    <Stack.Screen
      name="ProductList"
      component={ProductListScreen}
      options={{ headerShown: false }}
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
        <Tab.Screen name="Explore" component={ExploreStack} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Favourites" component={FavouritesScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;