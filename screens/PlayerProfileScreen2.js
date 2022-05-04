import { StyleSheet, ImageBackground, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constans/style";
import PrimaryButton from "../components/MakeTeams/Button";
import { useRoute } from "@react-navigation/native";
import { PLAYER } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import Card from "../components/Profile/Card";
import Shirt from "../components/Profile/Shirt";
import Picture from "../components/Profile/Picture";

function MakeTeams({ navigation }) {
  const route = useRoute();
  const playerId = route.params.playerId;
  const displayPlayer = PLAYER.filter((playerItem) => {
    return playerItem.id == playerId;
  });
  useLayoutEffect(() => {
    const PlayerTitle = PLAYER.find(
      (player) => player.id === playerId
    ).fullName;
    navigation.setOptions({
      title: PlayerTitle,
    });
  }, [playerId, navigation]);
  const player = displayPlayer[0];
  return (
    <>
      <LinearGradient
        colors={[Colors.primary500, Colors.primary600]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("../assets/stadium.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <View style={styles.buttonContainer}>
            <Picture ImageUrl={player.Image} />
            <View style={styles.shirtContainer}>
              <Shirt name={player.fullName} number={player.favoriteNumber} />
            </View>
          </View>
          <Card name={player.fullName} role={player.role} grade={player.grade} number={player.favoriteNumber} />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

export default MakeTeams;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  image: {
    width: 100,
    height: 100,
  },
  shirtContainer: {
    alignItems: "center",
  },
});
