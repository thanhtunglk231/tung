import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const EditProfileScreen = ({ navigation, route }) => {
  const [profileImage, setProfileImage] = useState(route.params?.profileImage || 'https://via.placeholder.com/80');
  const [userName, setUserName] = useState(route.params?.userName || 'Rakibul Hasan');

  const requestPermission = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Quyền bị từ chối',
          'Chúng tôi cần quyền truy cập thư viện ảnh để thực hiện chức năng này!',
          [{ text: 'OK' }]
        );
        return false;
      }
      return true;
    }
    return true;
  };

  const pickImage = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const saveChanges = () => {
    if (!userName.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên hợp lệ.');
      return;
    }

    // Điều hướng về Main và chuyển tab sang Profile
    navigation.navigate('Main', {
      screen: 'Profile',
      params: {
        updatedProfileImage: profileImage,
        updatedUserName: userName,
      },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <Text style={styles.changePhotoText}>Thay đổi ảnh</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tên</Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
          placeholder="Nhập tên của bạn"
          placeholderTextColor="#888"
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
        <Text style={styles.saveButtonText}>Lưu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFFFFF' },
  imageContainer: { alignItems: 'center', marginVertical: 32 },
  profileImage: { width: 120, height: 120, borderRadius: 60, borderWidth: 2, borderColor: '#6200EE' },
  changePhotoText: { marginTop: 8, color: '#6200EE', fontSize: 16 },
  inputContainer: { marginVertical: 16 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#000000', marginBottom: 8 },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#000000',
  },
  saveButton: {
    backgroundColor: '#6200EE',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 32,
  },
  saveButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});

export default EditProfileScreen;