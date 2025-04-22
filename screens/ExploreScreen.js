import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Checkbox, Button } from 'react-native-paper';

const defaultImage = require('../assets/burger.png'); // Hình ảnh cục bộ
const categories = [
  { id: '1', name: 'Fresh Fruits', image: defaultImage },
  { id: '2', name: 'Cooking Oil & Ghee', image: defaultImage },
  { id: '3', name: 'Meat & Fish', image: defaultImage },
  { id: '4', name: 'Bakery & Snacks', image: 'https://example.com/images/bakery-snacks.jpg' },
  { id: '5', name: 'Dairy & Eggs', image: 'https://example.com/images/dairy-eggs.jpg' },
  { id: '6', name: 'Beverages', image: 'https://example.com/images/beverages.jpg' },
];

const ExploreScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filterCategories, setFilterCategories] = useState({
    eggs: false,
    noodlesPasta: false,
    chipsCrisps: false,
    fastFood: false,
  });

  const [filterBrands, setFilterBrands] = useState({
    individualCollection: false,
    cocola: false,
    ifad: false,
    kaziFarmas: false,
  });

  const handleCategoryChange = (key) => {
    setFilterCategories({ ...filterCategories, [key]: !filterCategories[key] });
  };

  const handleBrandChange = (key) => {
    setFilterBrands({ ...filterBrands, [key]: !filterBrands[key] });
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

  // Hàm render các category
  const renderCategory = ({ item }) => {
    const handlePress = () => {
      if (item.name === 'Dairy & Eggs') {
        navigation.navigate('ProductList'); // Điều hướng đến ProductListScreen
      } else if (item.name === 'Beverages') {
        navigation.navigate('Beverages'); // Điều hướng đến màn hình BeveragesScreen
      } else {
        console.log('No screen defined for:', item.name);
      }
    };
  
    return (
      <TouchableOpacity style={styles.categoryCard} onPress={handlePress}>
        <Image
          source={
            typeof item.image === 'string' && item.image.startsWith('http')
              ? { uri: item.image }
              : item.image
          }
          style={styles.categoryImage}
        />
        <Text style={styles.categoryName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  // Hàm xử lý khi nhấn vào biểu tượng kính lúp
  const handleSearchPress = () => {
    setModalVisible(true); // Hiển thị modal
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Products</Text>
        <TouchableOpacity style={styles.searchBar} onPress={handleSearchPress}>
          <Icon name="search" size={20} color="gray" />
          <Text style={styles.searchText}>Search Store</Text>
        </TouchableOpacity>
      </View>

      {/* Danh sách các danh mục */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />

      {/* Modal Filter */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.headerText}>Filters</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>

            {/* Nội dung cuộn được */}
            <ScrollView style={styles.scrollContent}>
              {/* Categories Section */}
              <Text style={styles.sectionTitle}>Categories</Text>
              {Object.keys(filterCategories).map((key) => (
                <TouchableOpacity
                  key={key}
                  style={styles.option}
                  onPress={() => handleCategoryChange(key)}
                >
                  <Checkbox
                    status={filterCategories[key] ? 'checked' : 'unchecked'}
                    onPress={() => handleCategoryChange(key)}
                    color="#2ECC71"
                  />
                  <Text style={filterCategories[key] ? styles.selectedText : styles.optionText}>
                    {categoryLabels[key]}
                  </Text>
                </TouchableOpacity>
              ))}

              {/* Brands Section */}
              <Text style={styles.sectionTitle}>Brand</Text>
              {Object.keys(filterBrands).map((key) => (
                <TouchableOpacity
                  key={key}
                  style={styles.option}
                  onPress={() => handleBrandChange(key)}
                >
                  <Checkbox
                    status={filterBrands[key] ? 'checked' : 'unchecked'}
                    onPress={() => handleBrandChange(key)}
                    color="#2ECC71"
                  />
                  <Text style={filterBrands[key] ? styles.selectedText : styles.optionText}>
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
                  console.log('Selected Categories:', filterCategories);
                  console.log('Selected Brands:', filterBrands);
                  setModalVisible(false);
                }}
                buttonColor="#2ECC71"
                contentStyle={{ paddingVertical: 12 }}
                style={styles.applyButton}
                labelStyle={styles.applyButtonText}
              >
                Apply Filter
              </Button>
            </View>
          </View>
        </View>
      </Modal>
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
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContent: {
    flex: 1,
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
    paddingTop: 10,
    borderTopWidth: 0.5,
    borderColor: '#ccc',
  },
  applyButton: {
    borderRadius: 10,
  },
  applyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;