import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const categories = ['Pizza', 'Burger', 'Sushi', 'Noodles'];
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search for food..." />

      <Text style={styles.sectionTitle}>Top Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  searchBar: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
  item: { backgroundColor: '#ff8c00', padding: 10, margin: 5, borderRadius: 5, color: 'white' },
});

export default HomeScreen;
