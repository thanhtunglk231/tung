import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const defaultImage = require('../assets/burger.png'); // ✅ đúng



const products = [
  { id: '1', name: 'Organic Bananas', price: '$4.99', image: defaultImage },
  { id: '2', name: 'Red Apple', price: '$4.99', image: defaultImage },
];

const groceriesCategories = [
  { id: '1', name: 'Pulses', image: defaultImage },
  { id: '2', name: 'Rice', image: defaultImage },
  { id: '3', name: 'Vegetables', image: defaultImage },
  { id: '4', name: 'Fruits', image: defaultImage },
];

const groceriesProducts = [
  { id: '1', name: 'Beef Bone', weight: '1kg, Price', price: '$4.99', image: defaultImage },
  { id: '2', name: 'Broiler Chicken', weight: '1kg, Price', price: '$4.99', image: defaultImage },
  { id: '3', name: 'Fresh Tomato', weight: '1kg, Price', price: '$3.99', image: defaultImage },
  { id: '4', name: 'Green Chili', weight: '500g, Price', price: '$2.49', image: defaultImage },
];

const bannerImages = [
  { id: '1', title: 'Fresh Vegetables', subtitle: 'Get Up To 40% OFF', image: defaultImage },
  { id: '2', title: 'Fresh Fruits', subtitle: 'Get Up To 30% OFF', image: defaultImage },
];

const HomeScreen = ({ navigation }) => {
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Icon name="add" size={20} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderGroceriesCategory = ({ item }) => (
    <View style={styles.groceriesCategoryCard}>
      <Image source={item.image} style={styles.groceriesCategoryImage} />
      <Text style={styles.groceriesCategoryName}>{item.name}</Text>
    </View>
  );

  const renderGroceriesProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.groceriesProductCard}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={item.image} style={styles.groceriesProductImage} />
      <Text style={styles.groceriesProductName}>{item.name}</Text>
      <Text style={styles.groceriesProductWeight}>{item.weight}</Text>
      <View style={styles.groceriesProductPriceContainer}>
        <Text style={styles.groceriesProductPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderBanner = ({ item }) => (
    <View style={styles.bannerItem}>
      <Image source={item.image} style={styles.bannerImage} />
      <View style={styles.bannerTextContainer}>
        <Text style={styles.bannerTitle}>{item.title}</Text>
        <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View>
      {/* Logo + Địa điểm */}
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <Image
          source={defaultImage}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <Icon name="location-pin" size={18} color="black" />
          <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Dhaka, Banassre</Text>
        </View>
      </View>

      {/* Search bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#999" style={{ marginRight: 8 }} />
        <Text style={{ color: '#999', fontSize: 16 }}>Search Store</Text>
      </View>

      {/* Banner */}
      <FlatList
        data={bannerImages}
        renderItem={renderBanner}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={{ marginTop: 15 }}
      />

      {/* Exclusive Offer */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Exclusive Offer</Text>
        <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.productList}
      />

      {/* Best Selling */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Selling</Text>
        <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.productList}
      />

      {/* Groceries */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Groceries</Text>
        <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
      </View>
      <FlatList
        data={groceriesCategories}
        renderItem={renderGroceriesCategory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.groceriesCategoryList}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={groceriesProducts}
        renderItem={renderGroceriesProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.groceriesProductList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchBar: {
    marginHorizontal: 15,
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 16,
    color: '#2ECC71',
  },
  productList: {
    paddingHorizontal: 10,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 150,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productPrice: {
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
  groceriesCategoryList: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  groceriesCategoryCard: {
    backgroundColor: '#E8F5E9',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    width: 150,
  },
  groceriesCategoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  groceriesCategoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  groceriesProductList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  groceriesProductCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  groceriesProductImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  groceriesProductName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  groceriesProductWeight: {
    fontSize: 14,
    color: 'gray',
  },
  groceriesProductPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  groceriesProductPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bannerItem: {
    width: width - 30,
    marginLeft: 15,
    marginRight: 15,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  bannerTextContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  bannerTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bannerSubtitle: {
    color: 'green',
    fontSize: 16,
    marginTop: 5,
  },
});

export default HomeScreen;
