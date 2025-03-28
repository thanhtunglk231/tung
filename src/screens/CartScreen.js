import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Product Image */}
      <View style={styles.productContainer}>
        <View style={styles.discountTag}>
          <Text style={styles.discountText}>QUÀN</Text>
        </View>
        <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.productImage} />
        <View style={styles.thumbnailContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.thumbnail} />
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.thumbnail} />
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.thumbnail} />
        </View>
      </View>

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>BURGER</Text>
        <Text style={styles.productPrice}>$28</Text>
      </View>

      {/* Rating & Quantity */}
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>⭐ 4.9 (3k+ Rating)</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity>
            <Ionicons name="remove-circle-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantity}>02</Text>
          <TouchableOpacity>
            <Ionicons name="add-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Delivery Address */}
      <View style={styles.deliveryContainer}>
        <Ionicons name="location-outline" size={24} color="black" />
        <Text style={styles.deliveryText}>Delivery Address</Text>
        <Text style={styles.deliveryAddress}>Dhaka, Bangladesh</Text>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={24} color="blue" />
        </TouchableOpacity>
      </View>

      {/* Payment Method */}
      <View style={styles.paymentContainer}>
        <Ionicons name="card-outline" size={24} color="black" />
        <Text style={styles.paymentText}>Payment Method</Text>
        <TouchableOpacity>
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>
      </View>

      {/* Checkout Summary */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text>Subtotal (2)</Text>
          <Text>$56</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Delivery Fee</Text>
          <Text>$6.20</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Payable Total</Text>
          <Text style={styles.totalPrice}>$62.2</Text>
        </View>
      </View>

      {/* Confirm Order Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirm Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: 'white', flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },

  productContainer: { alignItems: 'center', position: 'relative' },
  discountTag: { position: 'absolute', top: 10, left: 10, backgroundColor: 'purple', padding: 5, borderRadius: 5 },
  discountText: { color: 'white', fontSize: 12 },
  productImage: { width: 250, height: 150, borderRadius: 10 },
  thumbnailContainer: { flexDirection: 'row', marginTop: 10 },
  thumbnail: { width: 60, height: 60, borderRadius: 10, marginHorizontal: 5 },

  infoContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  productName: { fontSize: 18, fontWeight: 'bold' },
  productPrice: { fontSize: 18, color: 'blue' },

  ratingContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  rating: { fontSize: 14, color: 'gray' },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  quantity: { fontSize: 16, marginHorizontal: 10 },

  deliveryContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f5f5f5', padding: 10, borderRadius: 10, marginTop: 15 },
  deliveryText: { fontSize: 14, marginLeft: 10 },
  deliveryAddress: { fontSize: 14, fontWeight: 'bold', marginLeft: 5, flex: 1 },

  paymentContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f5f5f5', padding: 10, borderRadius: 10, marginTop: 15 },
  paymentText: { fontSize: 14 },
  changeText: { color: 'blue', fontSize: 14 },

  summaryContainer: { backgroundColor: '#f5f5f5', padding: 10, borderRadius: 10, marginTop: 15 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  totalText: { fontSize: 16, fontWeight: 'bold' },
  totalPrice: { fontSize: 16, fontWeight: 'bold', color: 'blue' },

  confirmButton: { backgroundColor: 'blue', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  confirmText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default CartScreen;
