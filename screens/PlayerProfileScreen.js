import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import { PLAYER } from "../data/dummy-data";
import { LinearGradient } from "expo-linear-gradient";

function PlayerProfileScreen() {
  const route = useRoute();
  const playerId = route.params.playerId;
  // const displayPlayer = PLAYER.filter((playerItem) => {
  //   return playerItem.id == playerId;
  // });
  // console.log(displayPlayer);
  return (
    <ImageBackground>
      <View>
        <Text>This is Profile Screen</Text>
      </View>
    </ImageBackground>
  );
}
export default PlayerProfileScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
