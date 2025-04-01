import React, { useState, useEffect } from 'react';
import { 
  View, Text, StyleSheet, TextInput, FlatList, 
  Image, TouchableOpacity, Dimensions 
} from 'react-native';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

// Kích thước màn hình
const { width } = Dimensions.get('window');
const CATEGORY_WIDTH = (width - 32) / 4;

// Danh mục món ăn
const categories = [
  { id: '1', name: 'Pizza', icon: 'pizza-outline' },
  { id: '2', name: 'Burger', icon: 'fast-food-outline' },
  { id: '3', name: 'Drink', icon: 'beer-outline' },
  { id: '4', name: 'Rice', icon: 'restaurant-outline' },
];

// Món ăn phổ biến
const popularItems = [
  {
    id: '1',
    name: 'Burger',
    price: '$18',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '2',
    name: 'Pizza',
    price: '$20',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=500&q=60',
  },
];

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [address, setAddress] = useState('Fetching location...');
  const [errorMsg, setErrorMsg] = useState(null);

  // Lấy địa chỉ cụ thể từ GPS
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      let geocode = await Location.reverseGeocodeAsync(currentLocation.coords);

      if (geocode.length > 0) {
        let { district, city, region, country } = geocode[0];
        setAddress(`${district || ''}, ${city || ''}, ${region || ''}, ${country || ''}`);
      } else {
        setAddress('Không tìm thấy địa chỉ');
      }
    };

    getLocation();
  }, []);

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/80' }} style={styles.avatar} />
        <View style={styles.locationContainer}>
          <Text style={styles.locationLabel}>Your Location</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color="#6200EE" />
            <Text style={styles.location}>{errorMsg || address}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#000000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBar} placeholder="Search your food" placeholderTextColor="#888" />
        <Ionicons name="filter" size={24} color="#6200EE" style={styles.filterIcon} />
      </View>

      {/* Categories */}
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedCategory(item.id)}
            style={[
              styles.categoryItem,
              { backgroundColor: selectedCategory === item.id ? '#E8F5E9' : '#FFFFFF', width: CATEGORY_WIDTH },
            ]}
          >
            <Ionicons name={item.icon} size={50} color="#000000" />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />

      {/* Banner Giảm Giá */}
      <View style={styles.banner}>
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>BURGER</Text>
          <Text style={styles.bannerSubtitle}>Today's Hot Offer</Text>
          <Text style={styles.bannerRating}>4.9 (3+ Rating)</Text>
        </View>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60' }}
          style={styles.bannerImage}
        />
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>10% OFF</Text>
        </View>
      </View>

      {/* Popular Items */}
      <View style={styles.popularHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={popularItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.popularItem}>
            <Image source={{ uri: item.image }} style={styles.popularImage} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
      
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container:
   { flex: 1, backgroundColor: '#FFFFFF' },

  header:
   { flexDirection: 'row', alignItems: 'center', padding: 16 },

  avatar: 
   { width: 40, height: 40, borderRadius: 20, marginRight: 12 },

  locationContainer: 
   { flex: 1 },

  locationLabel:
   { fontSize: 12, color: '#888' },

  locationRow:
   { flexDirection: 'row', alignItems: 'center' },

  location:
   { fontSize: 14, fontWeight: 'bold', color: '#000', marginLeft: 4 },

  searchContainer:
   { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginVertical: 16 },

  searchBar:
   { flex: 1, backgroundColor: '#F0F0F0', borderRadius: 8, padding: 10, color: '#000000' },

  filterIcon:
   { marginLeft: 10 },

  categoryList:
   { paddingHorizontal: 16 },

  categoryItem:
   { alignItems: 'center', padding: 16, borderRadius: 8, borderWidth: 1, borderColor: '#E0E0E0' },

  categoryText:
   { marginTop: 8, color: '#000000', fontSize: 14 },

  banner:
   { flexDirection: 'row', backgroundColor: '#000000', borderRadius: 8, margin: 16, padding: 16, alignItems: 'center' },

  bannerTextContainer:
   { flex: 1 },

  bannerTitle:
   { fontSize: 24, fontWeight: 'bold', color: '#FFC107' },

  bannerSubtitle:
   { fontSize: 14, color: '#FFFFFF', marginVertical: 4 },

  bannerRating:
   { fontSize: 14, color: '#FFFFFF' },

  bannerImage:
   { width: 100, height: 100, borderRadius: 8 },

  discountBadge:
   { position: 'absolute', top: 10, right: 10, backgroundColor: '#6200EE', borderRadius: 20, padding: 8 },

  discountText:
   { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' },

  popularHeader:
   { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16, marginVertical: 8 },

  sectionTitle:
   { fontSize: 20, fontWeight: 'bold', color: '#000000' },

  viewAll:
   { fontSize: 14, color: '#6200EE' },

  popularItem:
   { marginRight: 16 },

  popularImage:
   { width: 150, height: 150, borderRadius: 8 },

  itemName:
   { fontSize: 16, fontWeight: 'bold', color: '#000000', marginTop: 8 },

  itemPrice:
   { fontSize: 14, color: '#888' },
});

export default HomeScreen;