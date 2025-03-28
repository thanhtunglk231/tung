import React from 'react';
import { View, Text, Image, TouchableOpacity, Switch, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Avatar & Info */}
      <View style={styles.profileContainer}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="create-outline" size={18} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>Rakibul Hasan</Text>
        <Text style={styles.profileEmail}>rakibbrand@gmail.com</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <MenuItem icon="home-outline" title="Home" />
        <MenuItem icon="card-outline" title="My Card" />
        <MenuItem icon="moon-outline" title="Dark Mood" switchComponent={<Switch value={darkMode} onValueChange={setDarkMode} />} />
        <MenuItem icon="location-outline" title="Truck Your Order" />
        <MenuItem icon="settings-outline" title="Settings" />
        <MenuItem icon="help-circle-outline" title="Help Center" />
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
        <Ionicons name="log-out-outline" size={20} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const MenuItem = ({ icon, title, switchComponent }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Ionicons name={icon} size={22} color="black" />
    <Text style={styles.menuText}>{title}</Text>
    {switchComponent ? switchComponent : <Ionicons name="chevron-forward-outline" size={22} color="gray" />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingHorizontal: 20 },
  
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },

  profileContainer: { alignItems: 'center', marginTop: 20 },
  avatarWrapper: { position: 'relative', borderWidth: 4, borderColor: 'gold', borderRadius: 80, padding: 5 },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  editIcon: { position: 'absolute', bottom: 5, right: 5, backgroundColor: 'blue', borderRadius: 15, padding: 4 },

  profileName: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  profileEmail: { fontSize: 14, color: 'gray' },

  menuContainer: { marginTop: 20 },
  menuItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderColor: '#eee' },
  menuText: { fontSize: 16, marginLeft: 10, flex: 1 },

  logoutButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue', padding: 15, borderRadius: 10, marginTop: 20 },
  logoutText: { color: 'white', fontSize: 16, fontWeight: 'bold', marginRight: 5 },
});

export default ProfileScreen;
