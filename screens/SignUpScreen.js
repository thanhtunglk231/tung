import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AppContext } from "../AppContext";

export default function SignUpScreen({ navigation }) {
    const { setIsLoggedIn } = useContext(AppContext);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Sign Up Screen</Text>
            <Button title="Register & Login" onPress={() => setIsLoggedIn(true)} />
            <Button title="Back to Sign In" onPress={() => navigation.goBack()} />
        </View>
    );
}
