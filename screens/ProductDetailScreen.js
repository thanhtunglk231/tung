import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Product Image */}
        <Image source={product.image} style={styles.productImage} />

        {/* Product Info */}
        <View style={styles.productInfo}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.productName}>{product.name}</Text>
            <TouchableOpacity>
              <Icon name="favorite-border" size={24} color="gray" />
            </TouchableOpacity>
          </View>

          {/* Weight */}
          <Text style={styles.productWeight}>{product.weight || '1kg, Price'}</Text>

          {/* Quantity & Price */}
          <View style={styles.quantityPrice}>
            <View style={styles.quantity}>
              <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
                <Icon name="remove" size={20} color="gray" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Icon name="add" size={20} color="gray" />
              </TouchableOpacity>
            </View>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>

          {/* Product Detail Section */}
          <TouchableOpacity style={styles.detailSection}>
            <Text style={styles.detailTitle}>Product Detail</Text>
            <Icon name="chevron-right" size={24} color="gray" />
          </TouchableOpacity>
          <Text style={styles.detailText}>
            This product is fresh and perfect for your healthy meals. Packed with nutrition and taste!
          </Text>

          {/* Nutrition */}
          <TouchableOpacity style={styles.detailSection}>
            <Text style={styles.detailTitle}>Nutrition</Text>
            <Icon name="chevron-right" size={24} color="gray" />
          </TouchableOpacity>

          {/* Review */}
          <TouchableOpacity style={styles.detailSection}>
            <Text style={styles.detailTitle}>Review</Text>
            <Icon name="star" size={24} color="gold" />
          </TouchableOpacity>

          {/* Add to Basket */}
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add To Basket</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  productInfo: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productWeight: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 5,
  },
  quantityPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2ECC71',
  },
  detailSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#2ECC71',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
