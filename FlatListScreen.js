import React from 'react';
import { FlatList, Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const FlatListScreen = ({ navigation }) => {
  const products = [
    { id: '1', name: 'Product A', price: '10.00' },
    { id: '2', name: 'Product B', price: '15.00' },
    { id: '3', name: 'Product C', price: '20.00' },
  ];

  const handlePress = (name) => {
    Alert.alert('Thông báo', `Bạn đã chọn ${name}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item.name)}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price} USD</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SectionList')}>
        <Text style={styles.buttonText}>Chuyển sang SectionList</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f8f8f8',
  },
  item: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  button: {
    padding: 15,
    backgroundColor: '#007BFF',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default FlatListScreen;
