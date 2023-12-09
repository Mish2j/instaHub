import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

import { COLORS } from "../../styles";

const Tab = ({ labels, activeLabel = labels[0] }) => {
  const [activeTab, setActiveTab] = useState(activeLabel);

  const onTabPress = (newActiveLabel) => {
    setActiveTab(newActiveLabel);
  };

  return (
    <View style={styles.tabContainer}>
      <View style={styles.labelsContainer}>
        {labels.map((label) => {
          return (
            <Pressable
              key={label}
              onPress={onTabPress.bind(null, label)}
              style={[
                styles.tabItem,
                {
                  backgroundColor:
                    activeTab === label ? COLORS.light_blue : "transparent",
                },
              ]}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: activeTab === label ? COLORS.white : COLORS.black,
                }}
              >
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tabContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelsContainer: {
    minWidth: 250,
    width: 350,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: COLORS.light_grey,
    padding: 3,
    borderRadius: 7,
  },
  tabItem: {
    width: "33.333%",
    borderRadius: 7,
    paddingVertical: 5,
  },
});
