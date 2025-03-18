import React from 'react';
import { SectionList, Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const SectionListScreen = ({ navigation }) => {
  const groupedProducts = [
    { title: 'Danh mục A', data: ['Sản phẩm A1', 'Sản phẩm A2', 'Sản phẩm A3'] },
    { title: 'Danh mục B', data: ['Sản phẩm B1', 'Sản phẩm B2'] },
    { title: 'Danh mục C', data: ['Sản phẩm C1', 'Sản phẩm C2', 'Sản phẩm C3'] },
  ];

  const handlePress = (name) => {
    Alert.alert('Thông báo', `Bạn đã chọn ${name}`);
  };

  return (
    <View style={styles.container}>
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
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FlatList')}>
        <Text style={styles.buttonText}>Chuyển sang FlatList</Text>
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
    fontSize: 16,
    color: '#333',
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

export default SectionListScreen;
