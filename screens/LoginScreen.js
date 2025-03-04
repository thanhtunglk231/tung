import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      
      <TextInput style={styles.input} placeholder="Email ID" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />
      
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace("Main")}> 
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      
      <Text style={styles.orText}>Or sign in with</Text>
      
      <View style={styles.socialButtons}>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Image style={styles.icon} />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Image  style={styles.icon} />
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.signUpContainer}>
        <Text>Not yet a member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}> 
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20, color: "#333" },
  input: { width: "100%", height: 50, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 15, marginBottom: 12, fontSize: 16 },
  forgotPassword: { color: "#f4a261", alignSelf: "flex-end", marginBottom: 15 },
  button: { backgroundColor: "#f4a261", padding: 15, width: "100%", alignItems: "center", borderRadius: 8, marginBottom: 15 },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  orText: { marginVertical: 10, color: "#666" },
  socialButtons: { flexDirection: "row", justifyContent: "center", gap: 15 },
  socialButton: { flexDirection: "row", alignItems: "center", padding: 10, borderRadius: 8, width: 130, justifyContent: "center" },
  googleButton: { backgroundColor: "#fff", borderWidth: 1, borderColor: "#ddd" },
  facebookButton: { backgroundColor: "#3b5998" },
  icon: { width: 20, height: 20, marginRight: 8 },
  socialText: { color: "#333", fontSize: 14 },
  signUpContainer: { flexDirection: "row", marginTop: 20 },
  signUpText: { color: "#f4a261", fontWeight: "bold" },
});

export default LoginScreen;