import React from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const categories = [
  { id: "1", name: "Pizza", image: "🍕" },
  { id: "2", name: "Burgers", image: "🍔" },
  { id: "3", name: "Steak", image: "🥩" },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explorer</Text>
      <TextInput style={styles.searchBox} placeholder="Search for meals or area" />

      <Text style={styles.sectionTitle}>Top Categories</Text>
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Text style={styles.emoji}>{item.image}</Text>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.sectionTitle}>Popular Items</Text>
      <View style={styles.popularItem}>
        <Text>Food 1 - $1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },
  header: { fontSize: 22, fontWeight: "bold" },
  searchBox: { borderWidth: 1, padding: 10, marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 20 },
  category: { alignItems: "center", marginRight: 15 },
  emoji: { fontSize: 30 },
  popularItem: { padding: 15, backgroundColor: "#eee", marginTop: 10 },
});

export default HomeScreen;
