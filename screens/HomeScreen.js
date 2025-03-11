import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.username}>Christie Doe</Text>
        </View>
        <Image 
          source={{ uri: 'https://via.placeholder.com/50' }} 
          style={styles.avatar} 
        />
      </View>

      {/* Your Insights Section */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Scan')}>
          <Ionicons name="scan-outline" size={30} color="#4A90E2" />
          <Text style={styles.cardText}>Scan new</Text>
          <Text style={styles.cardSubText}>Scanned 483</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <Ionicons name="alert-circle-outline" size={30} color="#E94E77" />
          <Text style={styles.cardText}>Counterfeits</Text>
          <Text style={styles.cardSubText}>Counterfeited 32</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="checkmark-circle-outline" size={30} color="#4CAF50" />
          <Text style={styles.cardText}>Success</Text>
          <Text style={styles.cardSubText}>Checkouts 8</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="calendar-outline" size={30} color="#1E88E5" />
          <Text style={styles.cardText}>Directory</Text>
          <Text style={styles.cardSubText}>History 26</Text>
        </View>
      </View>

      {/* Explore More */}
      <Text style={styles.sectionTitle}>Explore More</Text>
      <View style={styles.exploreContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} 
          style={styles.exploreImage} 
        />
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} 
          style={styles.exploreImage} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  greeting: { fontSize: 18, color: '#777' },
  username: { fontSize: 22, fontWeight: 'bold' },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 15 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { 
    width: '48%', backgroundColor: '#f5f5f5', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 10 
  },
  cardText: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
  cardSubText: { fontSize: 14, color: '#888' },
  exploreContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  exploreImage: { width: 100, height: 100, borderRadius: 10 }
});

export default HomeScreen;
