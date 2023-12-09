import { ScrollView, Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS } from "../../styles";

import TextButton from "../UI/TextButton";

const Analytics = () => {
  return (
    <ScrollView
      style={{ flex: 1, paddingHorizontal: 5, backgroundColor: COLORS.white }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          marginVertical: 15,
        }}
      >
        <TextButton
          containerStyle={{
            backgroundColor: COLORS.light_blue,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
            maxWidth: 320,
            width: "100%",
          }}
          label={"Room 1"}
        />

        <TextButton
          containerStyle={{
            backgroundColor: COLORS.light_blue,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 20,
            maxWidth: 320,
            width: "100%",
          }}
          label={"Room 1"}
        />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          marginVertical: 15,
          backgroundColor: COLORS.light_grey,
          borderRadius: 10,
          marginHorizontal: 10,
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <Text>InstaHub Office, Demo Room #1</Text>
        <Text>October 17</Text>
        <Text>Total Hours Light ON - 8</Text>
        <View>
          <View>
            <Text>Lights ON Unused</Text>
            <Text>25.00%</Text>
          </View>
          <View>
            <Text>Total Waste</Text>
            <Text>2 Hours</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
