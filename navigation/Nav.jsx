import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";

import OverviewScreen from "../screens/Overview";
import AnalyticsScreen from "../screens/Analytics";

const Tab = createBottomTabNavigator();

const Nav = () => {
  const screenOptions = ({ navigation }) => {
    return {
      // headerShown: false,
      // tabBarActiveTintColor: COLORS.yellow_dark,
      // tabBarInactiveTintColor: COLORS.yellow_dark,
      // tabBarStyle: {
      //   borderTopWidth: 0,
      //   borderTopColor: "transparent",
      //   elevation: 0,
      //   shadowOpacity: 0,
      // },
      tabBarLabelStyle: {
        fontSize: 12,
        // color: COLORS.black,
      },
      headerLeft: () => {
        return <Ionicons name="grid" size={32} color="green" />;
      },
      headerRight: () => {
        return <Ionicons name="grid" size={32} color="green" />;
      },
    };
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Overview"
          component={OverviewScreen}
          options={{
            tabBarLabel: "Overview",
            tabBarIcon: () => <Ionicons name="grid" size={28} color="green" />,
          }}
        />

        <Tab.Screen
          name="Analytics"
          component={AnalyticsScreen}
          options={{
            tabBarLabel: "Analytics",
            tabBarIcon: () => (
              <Ionicons name="analytics" size={28} color="green" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
