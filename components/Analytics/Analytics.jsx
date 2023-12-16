import { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import { COLORS } from "../../styles";
import { Dropdown } from "react-native-element-dropdown";
import { getDevices } from "../../util/http";

import TextButton from "../UI/TextButton";
import PowerUsageMonitor from "./PowerUsageMonitor";
import HourlyEnergyStats from "./HourlyEnergyStats";
import Camera from "./Camera";

const Analytics = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(null);

  const openCamera = () => setIsCameraOpen(true);
  const closeCamera = () => setIsCameraOpen(false);

  useEffect(() => {
    if (isCameraOpen) return;
    const fetchDevicesData = async () => {
      setIsLoading(true);
      try {
        const devicesData = await getDevices();
        if (!devicesData.length) return;
        setDevices(devicesData);
        setValue(devicesData[0].barcodeId);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDevicesData();
  }, [isCameraOpen]);

  const dropdownData = devices.map((data) => {
    return { room: data.deviceName, id: data.barcodeId };
  });

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.selectedTextStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            iconColor={COLORS.white}
            // data={data}
            data={dropdownData}
            search
            maxHeight={300}
            labelField="room"
            valueField="id"
            // labelField="label"
            // valueField="value"
            placeholder={
              isLoading ? "Loading..." : !isFocus ? "Select item" : "..."
            }
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
          <TextButton
            containerStyle={styles.buttonContainer}
            label={"Oct 17, 2022"}
            textStyle={{ fontSize: 18 }}
          />
          <TextButton
            containerStyle={styles.buttonContainer}
            label={"Add new device"}
            textStyle={{ fontSize: 18 }}
            onPress={openCamera}
          />
        </View>
        <PowerUsageMonitor />
        <HourlyEnergyStats
          stats={devices.length > 0 ? devices[0].deviceStats : []}
          isLoading={isLoading}
        />
      </ScrollView>
      {isCameraOpen && <Camera onClose={closeCamera} />}
    </>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: COLORS.white,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginVertical: 15,
  },
  buttonContainer: {
    borderRadius: 10,
    backgroundColor: COLORS.light_blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    maxWidth: 320,
    width: "100%",
  },
  // Dropdown styles
  dropdown: {
    maxWidth: 320,
    width: "100%",
    // height: 50,
    // borderColor: "gray",
    // borderWidth: 0.5,
    // borderRadius: 8,
    // paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: COLORS.light_blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    maxWidth: 320,
    width: "100%",
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  // placeholderStyle: {
  //   fontSize: 16,
  // },
  selectedTextStyle: {
    fontSize: 18,
    color: COLORS.white,
    textAlign: "center",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
