import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";

import { BarCodeScanner } from "expo-barcode-scanner";
import { addNewDevice } from "../../util/http";
import { COLORS } from "../../styles";
import Device from "../../models/device";
import DeviceStats from "../../models/deviceStats";

import { HOURS } from "../../util/hours";

const Scanner = ({ cameraBox }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const createNewDevice = (barcode) => {
    const deviceStats = HOURS.map((h) => new DeviceStats(h));
    const deviceName = `Device barcode: ${barcode}`;
    const newDevice = new Device(barcode, deviceName, deviceStats);
    addNewDevice(newDevice);
  };

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(
      "The bar code has been successfully scanned!",
      `Press "Save" to add this device or "Cancel" to scan another bar code.`,
      [
        {
          text: "Save",
          onPress: () => {
            createNewDevice(data);
            setScanned(false);
          },
        },
        {
          text: "Cancel",
          onPress: () => setScanned(false),
          style: "destructive",
        },
      ]
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={cameraBox}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 1 }}
      />
      <View style={styles.dashedBorder} />
    </View>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  dashedBorder: {
    position: "absolute",
    width: 300,
    height: 150,
    bottom: "40%",
    alignSelf: "center",
    zIndex: 1001,
    borderRadius: 20,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: COLORS.light_blue,
  },
});
