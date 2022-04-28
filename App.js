import { StyleSheet, Text, View } from "react-native";
import AllPlayersScreen from "./screens/AllPlayerScreen";
import MakeTeams from "./screens/MakeTeams";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "./constans/style";
import { Ionicons, FontAwesome } from "@expo/vector-icons";


const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="All Players"
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary700 },
          headerTintColor: Colors.primary600,
          tabBarActiveTintColor: Colors.primary700,
          headerTitleAlign: "center",
        }}
      >
        <BottomTab.Screen
          name="All Players"
          component={AllPlayersScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-people-circle" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Make Teams"
          component={MakeTeams}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="soccer-ball-o" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
