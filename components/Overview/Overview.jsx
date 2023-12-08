import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LineChart } from "react-native-gifted-charts";

import HubStats from "./HubStats";

const DATALOGGER = [
  {
    displayName: "Space",
    iconName: "people",
  },
  {
    displayName: "Temp F", // TODO: change F
    iconName: "thermometer-outline",
  },
  {
    displayName: "Light",
    iconName: "bulb-outline",
  },
  {
    displayName: "Humidity",
    iconName: "pulse-outline",
  },
  {
    displayName: "Pressure",
    iconName: "speedometer-outline",
  },
];

const Overview = () => {
  const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];

  const datalogger_data = DATALOGGER.map((data) => {
    return (
      <Pressable
        key={data.displayName}
        style={({ pressed }) => [styles.hubData]}
      >
        <Text style={{ fontSize: 13 }}>{data.displayName}</Text>
        <Ionicons name={data.iconName} size={25} color="#266beb" />
      </Pressable>
    );
  });

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <HubStats />
        <View>
          <View style={{ marginVertical: 25 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.scrollView}
            >
              {datalogger_data}
            </ScrollView>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "lightgray",
                // gap: 5,
                padding: 3,
                borderRadius: 7,
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#266beb",
                  borderRadius: 7,
                  paddingVertical: 5,
                  paddingHorizontal: 27,
                }}
              >
                <Text
                  style={{
                    color: "#ffffff",
                  }}
                >
                  Days
                </Text>
              </Pressable>
              <Pressable
                style={{
                  //   backgroundColor: "#266beb",
                  borderRadius: 7,
                  paddingVertical: 5,
                  paddingHorizontal: 27,
                }}
              >
                <Text>Weeks</Text>
              </Pressable>
              <Pressable
                style={{
                  //   backgroundColor: "#266beb",
                  borderRadius: 7,
                  paddingVertical: 5,
                  paddingHorizontal: 27,
                }}
              >
                <Text>Months</Text>
              </Pressable>
            </View>
            <LineChart curved data={data} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Overview;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  hubStats: {
    backgroundColor: "#0c0c64",
    padding: 15,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  scrollView: {
    paddingVertical: 15,
  },
  hubData: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 70,
    width: 70,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginHorizontal: 3,
    padding: 7,
    gap: 5,

    shadowColor: "#266beb",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
