import { useState } from "react";
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

import { COLORS } from "../../styles";
import Tab from "../UI/Tab";
import ScrollWrapper from "../UI/ScrollWrapper";

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

const TAB_LABELS = ["Days", "Weeks", "Months"];
const Overview = () => {
  const data = [
    { value: 0 },
    { value: 2 },
    { value: 6 },
    { value: 14 },
    { value: 4 },
    { value: 4 },
    { value: 4 },
  ];

  const datalogger_data = DATALOGGER.map((data) => {
    return (
      <Pressable
        key={data.displayName}
        style={({ pressed }) => [styles.hubData]}
      >
        <Text style={{ fontSize: 14 }}>{data.displayName}</Text>
        <Ionicons name={data.iconName} size={25} color={COLORS.light_blue} />
      </Pressable>
    );
  });

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View style={styles.container}>
          <HubStats />
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.scrollView}
            >
              {datalogger_data}
            </ScrollView>
            <View style={styles.tabContainer}>
              <Tab labels={TAB_LABELS} />
            </View>
            <View style={styles.chartContainer}>
              <LineChart
                rulesType="solid"
                rulesColor={COLORS.light_grey}
                showVerticalLines
                verticalLinesColor={COLORS.light_grey}
                noOfSections={3}
                color={COLORS.light_blue}
                hideDataPoints
                // stepValue={2}
                stepHeight={70}
                xAxisLabelTexts={[
                  "Mon",
                  "Tue",
                  "Wed",
                  "Thu",
                  "Fri",
                  "Sat",
                  "Sun",
                ]}
                // yAxisLabelTexts
                // yAxisSide="Right"
                // width={500}
                curved
                data={data}
                // adjustToWidth
                xAxisLabelTextStyle={{ color: COLORS.dark_grey }}
                yAxisTextStyle={{ color: COLORS.dark_grey }}
                xAxisColor={COLORS.dark_grey}
                // textColor={COLORS.dark_grey}
                yAxisColor={COLORS.dark_grey}
                yAxisType={"dotted"}
                // isAnimated
                // animateOnDataChange
                // onDataChangeAnimationDuration={400}
              />
            </View>
          </View>
        </View>
      </ScrollView>
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
    backgroundColor: COLORS.white,
  },
  hubStats: {
    backgroundColor: COLORS.dark_blue,
    padding: 15,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  scrollView: {
    marginTop: 15,
    marginBottom: 5,
  },
  hubData: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 70,
    width: 73,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginHorizontal: 3,
    marginVertical: 15,
    padding: 7,
    gap: 10,

    shadowColor: COLORS.light_blue,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  tabContainer: {
    marginBottom: 5,
  },
  chartContainer: {
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "pink",
    width: "100%",
    maxWidth: 500,
  },
});
