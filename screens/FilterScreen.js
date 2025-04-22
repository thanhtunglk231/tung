import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FilterScreen = ({ navigation }) => {
  const [categories, setCategories] = useState({
    eggs: false,
    noodlesPasta: false,
    chipsCrisps: false,
    fastFood: false,
  });

  const [brands, setBrands] = useState({
    individualCollection: false,
    cocola: false,
    ifad: false,
    kaziFarmas: false,
  });

  const handleCategoryChange = (key) => {
    setCategories({ ...categories, [key]: !categories[key] });
  };

  const handleBrandChange = (key) => {
    setBrands({ ...brands, [key]: !brands[key] });
  };

  const categoryLabels = {
    eggs: 'Eggs',
    noodlesPasta: 'Noodles & Pasta',
    chipsCrisps: 'Chips & Crisps',
    fastFood: 'Fast Food',
  };

  const brandLabels = {
    individualCollection: 'Individual Collection',
    cocola: 'Cocola',
    ifad: 'Ifad',
    kaziFarmas: 'Kazi Farmas',
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Category Section */}
        <Text style={styles.sectionTitle}>Categories</Text>
        {Object.keys(categories).map((key) => (
          <TouchableOpacity
            key={key}
            style={styles.option}
            onPress={() => handleCategoryChange(key)}
          >
            <Checkbox
              status={categories[key] ? 'checked' : 'unchecked'}
              onPress={() => handleCategoryChange(key)}
              color="#2ECC71"
            />
            <Text style={categories[key] ? styles.selectedText : styles.optionText}>
              {categoryLabels[key]}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Brand Section */}
        <Text style={styles.sectionTitle}>Brand</Text>
        {Object.keys(brands).map((key) => (
          <TouchableOpacity
            key={key}
            style={styles.option}
            onPress={() => handleBrandChange(key)}
          >
            <Checkbox
              status={brands[key] ? 'checked' : 'unchecked'}
              onPress={() => handleBrandChange(key)}
              color="#2ECC71"
            />
            <Text style={brands[key] ? styles.selectedText : styles.optionText}>
              {brandLabels[key]}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Apply Filter Button */}
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => {
            console.log('Selected Categories:', categories);
            console.log('Selected Brands:', brands);
            navigation.goBack();
          }}
          buttonColor="#2ECC71"
          contentStyle={{ paddingVertical: 8 }}
          style={styles.applyButton}
          labelStyle={styles.applyButtonText}
        >
          Apply Filter
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#333',
  },
  selectedText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#333',
    fontWeight: 'bold',
  },
  buttonContainer: {
    padding: 16,
    borderTopWidth: 0.5,
    borderColor: '#ccc',
  },
  applyButton: {
    paddingVertical: 8,
    borderRadius: 10,
  },
  applyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FilterScreen;