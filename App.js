import React from 'react';
import { FlatList, SectionList, Text, View, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  // Danh sách sản phẩm cho FlatList
  const products = [
    { id: '1', name: 'Product A', price: '10.00' },
    { id: '2', name: 'Product B', price: '15.00' },
    { id: '3', name: 'Product C', price: '20.00' },
  ];

  // Danh sách nhóm sản phẩm cho SectionList
  const groupedProducts = [
    { title: 'Danh mục A', data: ['Sản phẩm A1', 'Sản phẩm A2', 'Sản phẩm A3'] },
    { title: 'Danh mục B', data: ['Sản phẩm B1', 'Sản phẩm B2'] },
    { title: 'Danh mục C', data: ['Sản phẩm C1', 'Sản phẩm C2', 'Sản phẩm C3'] },
  ];

  // Hàm xử lý khi
  const handlePress = (name) => {
    Alert.alert('Thông báo', `Bạn đã chọn ${name}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Danh sách sản phẩm (FlatList)</Text>
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

      <Text style={styles.header}>Danh sách nhóm sản phẩm (SectionList)</Text>
      <SectionList
        sections={groupedProducts}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Text style={styles.name}>{item}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  sectionHeader: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: '#fff',
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
});

export default App;
