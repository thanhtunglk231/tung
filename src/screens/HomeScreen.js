import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} />
        <View>
          <Text style={styles.locationText}>Your Location</Text>
          <Text style={styles.cityText}>Savar, Dhaka</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.notificationIcon} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="gray" />
        <TextInput placeholder="Search your food" style={styles.searchInput} />
        <Ionicons name="filter-outline" size={20} color="black" />
      </View>

      {/* Categories */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={[styles.categoryButton, { backgroundColor: '#32CD32' }]}>
          <Text style={styles.categoryText}>PIZZA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>BURGER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>DRINK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>RICI</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Banner */}
      <View style={styles.banner}>
        <Image source={{ uri: 'https://via.placeholder.com/250' }} style={styles.bannerImage} />
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>BURGER</Text>
          <Text style={styles.bannerSubtitle}>Today's Hot offer</Text>
          <Text style={styles.bannerRating}>⭐ 4.9 (3k+ Rating)</Text>
        </View>
        <View style={styles.discountTag}>
          <Text style={styles.discountText}>10% OFF</Text>
        </View>
      </View>

      {/* Popular Items */}
      <View style={styles.popularSection}>
        <Text style={styles.popularTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularScroll}>
        <View style={styles.popularItem}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.popularImage} />
          <Text style={styles.popularText}>Burger</Text>
        </View>
        <View style={styles.popularItem}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.popularImage} />
          <Text style={styles.popularText}>Pizza</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: 'white', flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  locationText: { fontSize: 12, color: 'gray' },
  cityText: { fontSize: 16, fontWeight: 'bold' },
  notificationIcon: { padding: 10, backgroundColor: '#f5f5f5', borderRadius: 10 },

  searchContainer: { flexDirection: 'row', backgroundColor: '#f0f0f0', padding: 12, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  searchInput: { marginLeft: 10, flex: 1 },

  categoryContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
  categoryButton: { backgroundColor: '#f0f0f0', padding: 12, borderRadius: 10, flex: 1, marginHorizontal: 5, alignItems: 'center' },
  categoryText: { fontSize: 14, fontWeight: 'bold' },

  banner: { position: 'relative', backgroundColor: '#000', borderRadius: 10, overflow: 'hidden', marginBottom: 20 },
  bannerImage: { width: '100%', height: 150 },
  bannerTextContainer: { position: 'absolute', left: 10, bottom: 10 },
  bannerTitle: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  bannerSubtitle: { fontSize: 14, color: 'white' },
  bannerRating: { fontSize: 12, color: 'white' },
  discountTag: { position: 'absolute', top: 10, right: 10, backgroundColor: 'yellow', padding: 5, borderRadius: 5 },
  discountText: { fontSize: 12, fontWeight: 'bold' },

  popularSection: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  popularTitle: { fontSize: 18, fontWeight: 'bold' },
  viewAll: { fontSize: 14, color: 'blue' },

  popularScroll: { marginTop: 10 },
  popularItem: { marginRight: 15, alignItems: 'center' },
  popularImage: { width: 100, height: 100, borderRadius: 10 },
  popularText: { marginTop: 5, fontSize: 14, fontWeight: 'bold' },
});

export default HomeScreen;
