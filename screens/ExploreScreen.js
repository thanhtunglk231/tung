import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const categories = [
  { id: '1', name: 'Fresh Fruits', image: 'https://example.com/images/fresh-fruits.jpg' },
  { id: '2', name: 'Cooking Oil & Ghee', image: 'https://example.com/images/cooking-oil.jpg' },
  { id: '3', name: 'Meat & Fish', image: 'https://example.com/images/meat-fish.jpg' },
  { id: '4', name: 'Bakery & Snacks', image: 'https://example.com/images/bakery-snacks.jpg' },
  { id: '5', name: 'Dairy & Eggs', image: 'https://example.com/images/dairy-eggs.jpg' },
  { id: '6', name: 'Beverages', image: 'https://example.com/images/beverages.jpg' },
];

const ExploreScreen = ({ navigation }) => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => navigation.navigate('Shop', { screen: 'Beverages' })}
    >
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Products</Text>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="gray" />
          <Text style={styles.searchText}>Search Store</Text>
        </View>
      </View>

      {/* Categories */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
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
    padding: 10,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    padding: 10,
  },
  searchText: {
    flex: 1,
    fontSize: 16,
    color: 'gray',
    marginLeft: 5,
  },
  categoryList: {
    padding: 10,
  },
  categoryCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ExploreScreen;
