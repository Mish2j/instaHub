import uuid from "react-native-uuid";

export default class DeviceStats {
  constructor(hour) {
    this.id = uuid.v4();
    this.hour = hour;
    this.isOccupied = Math.random() < 0.5;
    this.isLightON = Math.random() < 0.5;
    this.energyWaste = Math.random() < 0.5;
  }
}
