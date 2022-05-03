import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Colors from "./constans/style";
import AllPlayersScreen from "./screens/AllPlayerScreen";
import MakeTeams from "./screens/MakeTeams";
import ChoosePlayers from "./screens/ChoosePlayers";
import TheTeams from "./screens/TheTeams";
import AfterForce from "./screens/AfterForce";
import Formation from "./screens/Formation";
import SubsScreen from "./screens/SubScreen";


const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator();

function TabBarOverView(){
  return(
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
  )

}

export default function App() {
  return (
    <>
    <StatusBar style= 'light'/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabBarOverView" component={TabBarOverView} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="ChoosePlayers" component={ChoosePlayers}/>
        <Stack.Screen name="TheTeams" component={TheTeams}/>
        <Stack.Screen name="AfterForce" component={AfterForce} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Formation" component={Formation}/>
        <Stack.Screen name="SubsScreen" component={SubsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
    
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
