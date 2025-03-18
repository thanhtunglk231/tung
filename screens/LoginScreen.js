import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import IconButton from '../components/IconButton';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      
      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Đăng nhập thành công!')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Google & Facebook Login */}
      <View style={styles.socialButtons}>
        <IconButton icon="logo-google" text="Google" />
        <IconButton icon="logo-facebook" text="Facebook" />
      </View>

      {/* Điều hướng sang màn hình khác */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', height: 50, borderColor: '#ccc', borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, marginBottom: 10 },
  button: { backgroundColor: '#ff8c00', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16 },
  socialButtons: { flexDirection: 'row', marginTop: 10 },
  link: { color: 'blue', marginTop: 10 },
});

export default LoginScreen;
