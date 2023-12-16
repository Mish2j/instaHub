import { Text, View, StyleSheet, FlatList } from "react-native";

import { COLORS } from "../../styles";

import HourData from "./HourData";

const HourlyEnergyStats = ({ stats, isLoading }) => {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.textContainer}>
          <Text style={styles.text}>Loading...</Text>
        </View>
      ) : stats.length === 0 ? (
        <View style={styles.textContainer}>
          <Text style={styles.text}>No Data</Text>
        </View>
      ) : (
        <FlatList
          data={stats}
          renderItem={({ item }) => <HourData data={item} />}
          keyExtractor={(item) => item.id}
          horizontal
        />
      )}
    </View>
  );
};

export default HourlyEnergyStats;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.baby_blue,
    borderRadius: 10,
    marginHorizontal: 10,
    minHeight: 100,
  },
  textContainer: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  text: { fontSize: 18 },
});
