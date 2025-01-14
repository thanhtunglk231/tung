import React from 'react';
import { SectionList, Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const App = () => {
  // Danh sách nhóm sản phẩm
  const danhSachNhomSanPham = [
    { title: 'Danh mục A', data: ['Sản phẩm A1', 'Sản phẩm A2', 'Sản phẩm A3'] },
    { title: 'Danh mục B', data: ['Sản phẩm B1', 'Sản phẩm B2'] },
    { title: 'Danh mục C', data: ['Sản phẩm C1', 'Sản phẩm C2', 'Sản phẩm C3'] },
  ];

  // Hàm xử lý khi bấm vào sản phẩm
  const xuLyBamSanPham = (tenSanPham) => {
    Alert.alert('Thông báo', `Bạn đã chọn ${tenSanPham}`);
  };

  return (
    <View style={styles.manHinhChinh}>
      <SectionList
        sections={danhSachNhomSanPham} // Truyền danh sách nhóm sản phẩm
        keyExtractor={(item, index) => item + index} // Khóa duy nhất
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.hopSanPham} onPress={() => xuLyBamSanPham(item)}>
            <Text style={styles.tenSanPham}>{item}</Text>
          </TouchableOpacity>
        )} // Hiển thị từng sản phẩm
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.tieuDeNhom}>
            <Text style={styles.tenNhom}>{title}</Text>
          </View>
        )} // Hiển thị tiêu đề nhóm
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
  tieuDeNhom: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  tenNhom: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  hopSanPham: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tenSanPham: {
    fontSize: 16,
    color: '#333',
  },
});

export default App;
