import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phạm Thanh Tùng</Text>
      <Text style={styles.subtitle}>Mobile Developer</Text>
      <Text>Tôi chưa có kinh nghiệm  trong lập trình mobilemobile</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace("Login")}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" },
  title: { fontSize: 24, fontWeight: "bold" },
  subtitle: { fontSize: 16, color: "blue" },
  button: { backgroundColor: "orange", padding: 10, marginTop: 20 },
  buttonText: { color: "white" },
});

export default ProfileScreen;
