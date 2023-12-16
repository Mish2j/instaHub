import { Text, View, StyleSheet } from "react-native";

import { COLORS } from "../../styles";

const PowerUsageMonitor = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.roomName}>InstaHub Office, Demo Room #1</Text>
      <Text style={styles.date}>October 17</Text>
      <Text style={{ marginBottom: 10, fontSize: 16 }}>
        Total Hours Light ON - 8
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={styles.dataColumn}>
          <Text style={styles.columnHeading}>Lights ON Unused</Text>
          <Text style={styles.statsText}>25.00%</Text>
        </View>
        <View style={styles.dataColumn}>
          <Text style={styles.columnHeading}>Total Waste</Text>
          <Text style={styles.statsText}>2 Hours</Text>
        </View>
      </View>
    </View>
  );
};

export default PowerUsageMonitor;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginVertical: 15,
    backgroundColor: COLORS.light_grey,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  roomName: {
    color: COLORS.light_blue,
    fontSize: 15,
  },
  date: {
    color: COLORS.light_blue,
    marginBottom: 10,
    fontSize: 15,
  },
  dataColumn: {
    width: "50%",
    alignItems: "center",
  },
  columnHeading: {
    fontSize: 16,
    marginBottom: 5,
  },
  statsText: {
    color: COLORS.red,
    fontWeight: "bold",
    fontSize: 16,
  },
});
