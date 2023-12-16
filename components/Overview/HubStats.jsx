import { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";

import { COLORS } from "../../styles";

import Ionicons from "@expo/vector-icons/Ionicons";
import DatePicker from "./DatePicker";

const HubStats = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => setShowDatePicker((prevState) => !prevState);

  return (
    <>
      {showDatePicker && (
        <DatePicker onClose={() => setShowDatePicker(false)} />
      )}
      <View style={styles.hubStats}>
        <Pressable
          onPress={toggleDatePicker}
          style={{
            marginBottom: 20,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="calendar-outline" size={25} color={COLORS.white} />
          <Text
            style={{
              color: COLORS.white,
              fontSize: 15,
              marginLeft: 5,
              backgroundColor: "#131e6e",
              borderRadius: 10,
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}
          >
            Oct 17, 2022
          </Text>
        </Pressable>
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{ color: COLORS.white, fontSize: 18, textAlign: "center" }}
          >
            InstaHub Office
          </Text>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
          >
            <Pressable
              // onPress={}
              style={({ pressed }) => [styles.hubData]}
            >
              <Text>Rooms Occupied</Text>
              <Text>12/50</Text>
              <Text></Text>
              <Text>as of 3:12 PM</Text>
            </Pressable>

            <Pressable
              // onPress={}
              style={({ pressed }) => [styles.hubData]}
            >
              <Text>Rooms Occupied</Text>
              <Text>12/50</Text>
              <Text>64%</Text>
              <Text>as of 3:12 PM</Text>
            </Pressable>

            <Pressable
              // onPress={}
              style={({ pressed }) => [styles.hubData]}
            >
              <Text>Rooms Occupied</Text>
              <Text>12/50</Text>
              <Text>64%</Text>
              <Text>as of 3:12 PM</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default HubStats;

const styles = StyleSheet.create({
  hubStats: {
    backgroundColor: COLORS.dark_blue,
    padding: 15,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    position: "relative",
  },
  scrollView: {},
  hubData: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 100,
    width: 110,
    backgroundColor: COLORS.light_grey,
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    gap: 5,

    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
