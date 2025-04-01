import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>

      {/* Cart Item */}
      <View style={styles.cartItem}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
          }}
          style={styles.itemImage}
        />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>Burger</Text>
          <Text style={styles.itemPrice}>$28</Text>
        </View>
      </View>

      {/* Delivery Address */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <Text style={styles.sectionText}>Dhaka, Bangladesh</Text>
      </View>

      {/* Payment Method */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <Text style={styles.sectionText}>Credit Card</Text>
      </View>

      {/* Summary */}
      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryText}>$56</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Delivery Fee</Text>
          <Text style={styles.summaryText}>Free</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.total}>Payable Total</Text>
          <Text style={styles.total}>$56.20</Text>
        </View>
      </View>

      {/* Confirm Order Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#FFFFFF" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 16,
  },
  cartItem: { flexDirection: "row", marginBottom: 16 },
  itemImage: { width: 100, height: 100, borderRadius: 8 },
  itemDetails: { marginLeft: 16, justifyContent: "center" },
  itemName: { fontSize: 18, fontWeight: "bold", color: "#000000" },
  itemPrice: { fontSize: 16, color: "#888" },
  section: { marginVertical: 16 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },
  sectionText: { fontSize: 14, color: "#000000" },
  summary: { marginVertical: 16 },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryText: { fontSize: 14, color: "#000000" },
  total: { fontSize: 16, fontWeight: "bold", color: "#000000" },
  confirmButton: {
    backgroundColor: "#6200EE", // Màu tím
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  confirmButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
});

export default CartScreen;
