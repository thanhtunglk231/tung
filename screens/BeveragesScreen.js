import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const beverages = [
  { id: '1', name: 'Diet Coke', price: '$1.99', image: 'https://via.placeholder.com/100' },
  { id: '2', name: 'Sprite Can', price: '$1.50', image: 'https://via.placeholder.com/100' },
  { id: '3', name: 'Apple & Grape Juice', price: '$1.99', image: 'https://via.placeholder.com/100' },
  { id: '4', name: 'Orange Juice', price: '$1.99', image: 'https://via.placeholder.com/100' },
  { id: '5', name: 'Coca Cola Can', price: '$1.99', image: 'https://via.placeholder.com/100' },
  { id: '6', name: 'Pepsi Can', price: '$1.99', image: 'https://via.placeholder.com/100' },
];

const BeveragesScreen = ({ navigation }) => {
  const renderBeverage = ({ item }) => (
    <TouchableOpacity
      style={styles.beverageCard}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.beverageImage} />
      <Text style={styles.beverageName}>{item.name}</Text>
      <Text style={styles.beveragePrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Icon name="add" size={20} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
        <Icon name="search" size={24} color="black" />
      </View>

      {/* Beverages List */}
      <FlatList
        data={beverages}
        renderItem={renderBeverage}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.beverageList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  beverageList: {
    padding: 10,
  },
  beverageCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  beverageImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  beverageName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  beveragePrice: {
    fontSize: 14,
    color: 'gray',
  },
  addButton: {
    backgroundColor: '#2ECC71',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
});

export default BeveragesScreen;