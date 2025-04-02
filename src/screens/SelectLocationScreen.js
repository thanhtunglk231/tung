import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SelectLocationScreen = ({ navigation }) => {
  const [zone, setZone] = useState('');
  const [area, setArea] = useState('');

  const handleSubmit = async () => {
    await AsyncStorage.setItem('location', JSON.stringify({ zone, area }));
    alert('Location saved successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Location</Text>
      <TextInput
        placeholder="Your Zone"
        style={styles.input}
        value={zone}
        onChangeText={setZone}
      />
      <TextInput
        placeholder="Your Area"
        style={styles.input}
        value={area}
        onChangeText={setArea}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', padding: 12, borderWidth: 1, borderRadius: 8, marginBottom: 10 },
  button: { backgroundColor: 'green', padding: 12, borderRadius: 8 },
  buttonText: { color: 'white', fontSize: 16 }
});

export default SelectLocationScreen;
