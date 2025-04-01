import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";

const ProfileScreen = ({ navigation, route }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/80"
  );
  const [userName, setUserName] = useState("Rakibul Hasan");

  // Nhận dữ liệu từ EditProfileScreen
  useEffect(() => {
    if (route.params?.updatedProfileImage) {
      setProfileImage(route.params.updatedProfileImage);
    }
    if (route.params?.updatedUserName) {
      setUserName(route.params.updatedUserName);
    }
  }, [route.params]);

  // Truyền dữ liệu sang HomeScreen khi điều hướng
  const navigateToHome = () => {
    navigation.navigate("Home", {
      profileImage: profileImage,
      userName: userName,
    });
  };

  return (
    <View style={styles.container}>
      {/* Profile Info */}
      <View style={styles.profileInfo}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <Text style={styles.profileName}>{userName}</Text>
        <Text style={styles.profileEmail}>rakibul@gmail.com</Text>
      </View>

      {/* Options */}
      <TouchableOpacity style={styles.option} onPress={navigateToHome}>
        <Text style={styles.optionText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>My Card</Text>
      </TouchableOpacity>
      <View style={styles.option}>
        <Text style={styles.optionText}>Dark Mood</Text>
        <Switch
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
          trackColor={{ false: "#767577", true: "#6200EE" }}
          thumbColor={isDarkMode ? "#FFFFFF" : "#f4f3f4"}
        />
      </View>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Track Your Order</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() =>
          navigation.navigate("EditProfile", {
            profileImage: profileImage,
            userName: userName,
          })
        }
      >
        <Text style={styles.optionText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Help Center</Text>
      </TouchableOpacity>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#FFFFFF" },
  profileInfo: { alignItems: "center", marginBottom: 32 },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#6200EE",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 8,
  },
  profileEmail: { fontSize: 14, color: "#888" },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  optionText: { fontSize: 16, color: "#000000" },
  logoutButton: {
    backgroundColor: "#6200EE",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 32,
  },
  logoutButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
});

export default ProfileScreen;
