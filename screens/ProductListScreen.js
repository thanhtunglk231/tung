import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Modal,
  ScrollView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Checkbox, Button } from 'react-native-paper';

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://67f685aa42d6c71cca626458.mockapi.io/api/todo_app/product');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); // Ban đầu, hiển thị tất cả sản phẩm
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategoryChange = (key) => {
    setFilterCategories({ ...filterCategories, [key]: !filterCategories[key] });
  };

  const handleBrandChange = (key) => {
    setFilterBrands({ ...filterBrands, [key]: !filterBrands[key] });
  };

  const applyFilters = () => {
    let filtered = products;

    // Lọc theo danh mục
    const selectedCategories = Object.keys(filterCategories).filter(
      (key) => filterCategories[key]
    );
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.some((category) =>
          product.name.toLowerCase().includes(category.toLowerCase())
        )
      );
    }

    // Lọc theo thương hiệu
    const selectedBrands = Object.keys(filterBrands).filter(
      (key) => filterBrands[key]
    );
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.some((brand) =>
          product.brand?.toLowerCase().includes(brand.toLowerCase())
        )
      );
    }

    setFilteredProducts(filtered);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      activeOpacity={0.8}
      onPress={() => console.log('Navigate to product detail:', item.id)}
    >
      <Image
        source={{ uri: item.images || 'https://via.placeholder.com/150' }}
        style={styles.productImage}
      />
      <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">
        {item.name}
      </Text>
      <View style={styles.priceRow}>
        <Text style={styles.productPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.addButton} activeOpacity={0.7}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#2ECC71" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Search with icon */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.filterButton}>
          <Icon name="filter" size={20} color="#2ECC71" />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
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
                <Icon name="x" size={24} color="black" />
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
                onPress={applyFilters}
                buttonColor="#2ECC71"
                contentStyle={{ paddingVertical: 14 }}
                style={styles.applyButton}
                labelStyle={styles.applyButtonText}
              >
                Apply Filter
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 50,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#333',
    fontSize: 16,
  },
  filterButton: {
    padding: 5,
  },
  productList: {
    paddingBottom: 20,
  },
  productContainer: {
    flex: 1,
    margin: 8,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  productName: {
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    color: '#333',
    textAlign: 'left',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  productPrice: {
    color: '#2ECC71',
    fontWeight: 'bold',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#2ECC71',
    borderRadius: 20,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  addButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
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
    color: '#333',
  },
  scrollContent: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    color: '#333',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 5,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#555',
  },
  selectedText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
    fontWeight: 'bold',
  },
  buttonContainer: {
    paddingTop: 15,
    borderTopWidth: 0.5,
    borderColor: '#ddd',
  },
  applyButton: {
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  applyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ProductListScreen;