import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";

const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={BottomTab} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
