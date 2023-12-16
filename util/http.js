import axios from "axios";

const URL = "https://instahub-e9139-default-rtdb.firebaseio.com";

export const addNewDevice = async (deviceData) => {
  try {
    await axios.post(`${URL}/devices.json`, deviceData);
  } catch (error) {
    console.log(error);
  }
};

export const getDevices = async () => {
  try {
    const response = await axios.get(`${URL}/devices.json`);

    const devices = [];

    for (let key in response.data) {
      const deviceData = {
        id: key,
        barcodeId: response.data[key].id,
        deviceName: response.data[key].device,
        deviceStats: response.data[key].device_stats,
      };
      devices.push(deviceData);
    }

    // console.log(devices);
    return devices;
  } catch (error) {
    console.log(error);
  }
};
