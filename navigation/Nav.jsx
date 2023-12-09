import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { COLORS } from "../styles";

import Ionicons from "@expo/vector-icons/Ionicons";

import OverviewScreen from "../screens/Overview";
import AnalyticsScreen from "../screens/Analytics";

const Tab = createBottomTabNavigator();

const Nav = () => {
  const screenOptions = ({ navigation }) => {
    return {
      tabBarActiveTintColor: COLORS.light_blue,
      tabBarInactiveTintColor: COLORS.dark_grey,
      headerTitleAlign: "left",
      headerLeftContainerStyle: {
        paddingLeft: 15,
      },
      headerTitleStyle: {
        marginLeft: -10,
      },
      headerRightContainerStyle: {
        paddingRight: 15,
      },
      headerStyle: {
        backgroundColor: COLORS.light_grey,
      },
      tabBarStyle: {
        backgroundColor: COLORS.light_grey,
      },
      tabBarLabelStyle: {
        fontSize: 13,
      },
      headerLeft: () => {
        return (
          <Image
            style={{ width: 32, height: 32 }}
            source={require("../assets/images/instaHub_logo.png")}
          />
        );
      },
      headerRight: () => {
        return (
          <Ionicons
            name="person-circle-outline"
            size={28}
            color={COLORS.black}
          />
        );
      },
    };
  };

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Overview" screenOptions={screenOptions}>
        <Tab.Screen
          name="Overview"
          component={OverviewScreen}
          options={{
            tabBarLabel: "Overview",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Analytics"
          component={AnalyticsScreen}
          options={{
            tabBarLabel: "Analytics",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="analytics" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
