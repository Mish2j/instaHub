import { Text, View, StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../../styles";

const HourData = ({ data }) => {
  const bulbIcon = data.energyWaste
    ? COLORS.danger_red
    : data.isLightON
    ? COLORS.yellow
    : COLORS.dark_grey;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.hour}</Text>
      <View>
        <Ionicons
          name={data.isLightON ? "bulb" : "bulb-outline"}
          size={25}
          color={bulbIcon}
        />
      </View>
      <View>
        <Ionicons
          name={data.isOccupied ? "man" : "square-outline"}
          size={25}
          color={data.isOccupied ? COLORS.black : COLORS.dark_grey}
        />
      </View>
    </View>
  );
};

export default HourData;

const styles = StyleSheet.create({
  container: {
    gap: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
  },
});
