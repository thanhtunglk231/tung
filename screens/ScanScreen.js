import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Camera, CameraView } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert("Scanned!", `Type: ${type}\nData: ${data}`);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View style={styles.overlay}>
          <View style={styles.scanBox}></View>
        </View>
      </CameraView>

      {scanned && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setScanned(false)}
        >
          <Text style={styles.buttonText}>Tap to Scan Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1, justifyContent: "center" },
  overlay: { flex: 1, justifyContent: "center", alignItems: "center" },
  scanBox: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },
  button: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: { color: "white", fontSize: 16 },
});