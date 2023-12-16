import { View, StyleSheet } from "react-native";

import { COLORS } from "../../styles";

import TextButton from "../UI/TextButton";
import Scanner from "./Scanner";

const Camera = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <TextButton
        iconName={"close-outline"}
        iconColor={COLORS.light_blue}
        iconSize={30}
        containerStyle={styles.buttonContainer}
        onPress={onClose}
      />
      <Scanner cameraBox={{ width: "100%", height: "100%" }} />
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 1000,
    top: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    zIndex: 1001,
    bottom: 20,
    right: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLORS.light_blue,
    backgroundColor: COLORS.light_blue + 30,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
});
