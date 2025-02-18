import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const PhoneLogin = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePhoneChange = (text) => {
    setPhone(text);
    const phoneRegex = /^(\+84|0)[3-9][0-9]{8}$/;
    if (phoneRegex.test(text)) {
      setError("");
      setSuccess("Số điện thoại hợp lệ");
    } else {
      setSuccess("");
      setError("Số điện thoại không đúng định dạng. Vui lòng nhập lại");
    }
  };
  //hello

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.label}>Nhập số điện thoại</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Nhập số điện thoại"
        value={phone}
        onChangeText={handlePhoneChange}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {success ? <Text style={styles.success}>{success}</Text> : null}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  success: {
    color: "green",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default PhoneLogin;
