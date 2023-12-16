import { useState } from "react";
import { View, StyleSheet } from "react-native";

import { COLORS } from "../../styles";

import TextButton from "../UI/TextButton";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ onClose }) => {
  const [date, setDate] = useState(new Date());

  // onDateChange = ({ type }, selectedDate) => {};

  return (
    <View style={styles.container}>
      <TextButton
        iconName={"close-outline"}
        iconColor={COLORS.white}
        iconSize={30}
        containerStyle={styles.closeButton}
        onPress={onClose}
      />
      <DateTimePicker
        onChange={onClose}
        textColor="white"
        mode="date"
        display="spinner"
        value={date}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1000,
    backgroundColor: COLORS.dark_blue,
    width: "100%",
    height: 200,
    bottom: 0,

    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  closeButton: {
    position: "absolute",
    zIndex: 1001,
    top: 10,
    right: 10,
    borderRadius: 10,
    backgroundColor: COLORS.light_blue + 30,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
});
