import {
  Pressable,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS } from "../../styles";

const TextButton = ({
  onPress,
  label,
  textStyle,
  containerStyle,
  isLoading,
  spinnerColor,
  iconName,
  iconSize,
  iconColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        containerStyle ? containerStyle : null,
        pressed && styles.btnPressed,
      ]}
    >
      <View style={styles.container}>
        {iconName ? (
          <Ionicons
            name={iconName}
            size={iconSize || 25}
            color={iconColor || COLORS.white}
          />
        ) : null}
        {isLoading ? (
          <ActivityIndicator size="large" color={spinnerColor} />
        ) : (
          <Text style={[styles.label, textStyle]}>{label}</Text>
        )}
      </View>
    </Pressable>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnPressed: {
    opacity: 0.9,
  },
  iconStyle: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    color: COLORS.white,
  },
});
