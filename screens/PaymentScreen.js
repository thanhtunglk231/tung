import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState("5261 4141 0151 8472");
  const [cardHolder, setCardHolder] = useState("Christie Doe");
  const [expiryDate, setExpiryDate] = useState("06/2024");
  const [cvv, setCvv] = useState("915");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate("Success")}>
  <Icon name="arrow-left" size={20} color="black" />
</TouchableOpacity>

        <Text style={styles.headerText}>Checkout</Text>
      </View>

      <Text style={styles.amount}>₹ 1,527</Text>
      <Text style={styles.subText}>Including GST (18%)</Text>

      {/* Payment Options */}
      <View style={styles.paymentOptions}>
        <TouchableOpacity style={styles.activeButton}>
          <Text style={styles.activeButtonText}>💳 Credit card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveButton}>
          <Text style={styles.inactiveButtonText}> Apple Pay</Text>
        </TouchableOpacity>
      </View>

      {/* Card Details */}
      <Text style={styles.label}>Card number</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={cardNumber} keyboardType="numeric" onChangeText={setCardNumber} />
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" }} style={styles.cardLogo} />
      </View>

      <Text style={styles.label}>Cardholder name</Text>
      <TextInput style={styles.input} value={cardHolder} onChangeText={setCardHolder} />

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Expiry date</Text>
          <TextInput style={styles.input} value={expiryDate} keyboardType="numeric" onChangeText={setExpiryDate} />
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>CVV / CVC</Text>
          <TextInput style={styles.input} value={cvv} keyboardType="numeric" secureTextEntry onChangeText={setCvv} />
        </View>
      </View>

      <Text style={styles.footerText}>We will send you an order details to your email after the successful payment</Text>

      <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate("Success")}>
        <Icon name="lock" size={16} color="white" />
        <Text style={styles.payButtonText}> Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop:30,flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  headerText: { fontSize: 22, fontWeight: "bold", marginLeft: 10 },
  amount: { fontSize: 22, color: "green", fontWeight: "bold", marginTop: 5 },
  subText: { color: "gray", fontSize: 14, marginBottom: 20 },
  paymentOptions: { flexDirection: "row", marginVertical: 10 },
  activeButton: { flex: 1, backgroundColor: "green", padding: 10, borderRadius: 8, alignItems: "center" },
  activeButtonText: { color: "white", fontWeight: "bold" },
  inactiveButton: { flex: 1, backgroundColor: "#ddd", padding: 10, borderRadius: 8, alignItems: "center", marginLeft: 10 },
  inactiveButtonText: { color: "#000" },
  label: { marginTop: 15, fontWeight: "bold", color: "gray" },
  inputContainer: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ddd", padding: 10, borderRadius: 8, marginTop: 5 },
  input: { flex: 1, fontSize: 16 },
  cardLogo: { width: 30, height: 20, marginLeft: 10 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  column: { width: "48%" },
  footerText: { color: "gray", fontSize: 12, textAlign: "center", marginTop: 10 },
  payButton: { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "green", padding: 15, borderRadius: 8, marginTop: 20 },
  payButtonText: { color: "white", fontSize: 16, fontWeight: "bold", marginLeft: 5 },
});

export default PaymentScreen;
