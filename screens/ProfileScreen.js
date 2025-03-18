import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.avatar} />
      <Text style={styles.name}>Hàng Nguyễn</Text>

      <TouchableOpacity style={styles.button} onPress={() => alert('Đăng xuất thành công!')}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  name: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  button: { backgroundColor: 'red', padding: 10, borderRadius: 5 },
  buttonText: { color: 'white' },
});

export default ProfileScreen;
