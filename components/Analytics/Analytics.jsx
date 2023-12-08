import { Text, View,  } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const Analytics = () => {
  return (
    <View style={{ width: "100", height: "100", backgroundColor: "pink" }}>
      <Text>Analytics</Text>

      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
  );
};

export default Analytics;
