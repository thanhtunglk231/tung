import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const SuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={20} color="black" />
      </TouchableOpacity>

      <Text style={styles.successText}>🎉 Payment Success, Yayy!</Text>
      <Text style={styles.message}>We will send order details and invoice to your registered email.</Text>

      <TouchableOpacity onPress={() => {}} style={styles.detailsButton}>
        <Text style={styles.detailsButtonText}>Check Details</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}} style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: 20 },
  backButton: { position: "absolute", top: 50, left: 20 },
  successText: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginTop: 20 },
  message: { fontSize: 16, color: "gray", textAlign: "center", marginVertical: 10 },
  detailsButton: { marginTop: 20 },
  detailsButtonText: { color: "blue", fontSize: 16 },
  downloadButton: { backgroundColor: "blue", padding: 15, borderRadius: 10, marginTop: 20 },
  downloadButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default SuccessScreen;
