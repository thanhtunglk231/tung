import React from 'react';
import { FlatList, Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const App = () => {
  // Danh sách sản phẩm
  const danhSachSanPham = [
    { id: '1', name: 'Sản phẩm A', price: '10.00' },
    { id: '2', name: 'Sản phẩm B', price: '15.00' },
    { id: '3', name: 'Sản phẩm C', price: '20.00' },
  ];

  // Hàm xử lý khi bấm vào sản phẩm
  const xuLyBamSanPham = (tenSanPham) => {
    Alert.alert('Thông báo', `Bạn đã chọn ${tenSanPham}`);
  };

  // Hàm hiển thị từng sản phẩm
  const renderSanPham = ({ item }) => (
    <TouchableOpacity style={styles.hopSanPham} onPress={() => xuLyBamSanPham(item.name)}>
      <Text style={styles.tenSanPham}>{item.name}</Text>
      <Text style={styles.giaSanPham}>{item.price} ₫</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.manHinhChinh}>
      <FlatList
        data={danhSachSanPham} // Truyền danh sách sản phẩm vào
        keyExtractor={(item) => item.id} // Sử dụng id làm khóa duy nhất
        renderItem={renderSanPham} // Hiển thị từng sản phẩm
      />
    </View>
  );
};

const styles = StyleSheet.create({
  manHinhChinh: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  hopSanPham: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tenSanPham: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  giaSanPham: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});

export default App;
