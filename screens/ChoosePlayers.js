import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
  SafeAreaView,
  VirtualizedList,
  ImageBackground,
} from "react-native";
import { PLAYER } from "../data/dummy-data";
import Colors from "../constans/style";
import Subtitle from "../components/MakeTeams/SubTitle";
import PrimaryButton from "../components/MakeTeams/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import okButton from "../components/MakeTeams/OkButton";

function ChoosePlayers() {
  const navigation = useNavigation();
  function makeTeamsHandler() {
    navigation.navigate("TheTeams", { Players: PlayersAreCome });
  }
  function cleanListHandler() {
    setPlayersAreCome("");
    setAllPlayers(PLAYER);
  }
  function chooseAllHandler() {
    setPlayersAreCome(PLAYER);
    setAllPlayers("");
  }

  function renderPlayersItem(itemData) {
    const myPlayer = itemData.item;
    return (
      <Subtitle onPress={ChooseMe.bind(this, myPlayer)}>
        {itemData.item.fullName}
      </Subtitle>
    );
  }
  function renderPlayersChosenItem(itemData) {
    const myPlayer = itemData.item;
    return (
      <Subtitle onPress={DontChooseMe.bind(this, myPlayer)}>
        {itemData.item.fullName}
      </Subtitle>
    );
  }
  const [PlayersAreCome, setPlayersAreCome] = useState([]);
  const [AllPlayers, setAllPlayers] = useState(PLAYER);
  function ChooseMe(myPlayer) {
    setPlayersAreCome((oldArray) => [myPlayer, ...oldArray]);
    setAllPlayers(AllPlayers.filter((item) => item != myPlayer));
  }
  function DontChooseMe(myPlayer) {
    setPlayersAreCome(PlayersAreCome.filter((item) => item != myPlayer));
    setAllPlayers((oldArray) => [myPlayer, ...oldArray]);
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.primary600]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../assets/background4.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <View>
          <View>
            <Text style={styles.title}>
              Click on the players who have confirmed arrival
            </Text>
            <View>
              <PrimaryButton onPress={chooseAllHandler}>
                Choose All
              </PrimaryButton>
              <PrimaryButton onPress={cleanListHandler}>
                Clean List
              </PrimaryButton>
              <PrimaryButton onPress={makeTeamsHandler}>Come on!</PrimaryButton>
            </View>
          </View>
          <View style={styles.titlePositions}>
            <Text Text style={styles.titleContainer}>
              All Players ({AllPlayers.length})
            </Text>
            <Text Text style={styles.titleContainer}>
              Who's Coming ({PlayersAreCome.length}){" "}
            </Text>
          </View>
          <View style={styles.titlePositions}>
            <View>
              <FlatList
                data={AllPlayers}
                keyExtractor={(item) => item.id}
                renderItem={renderPlayersItem}
                numColumns={1}
              />
            </View>
            <View>
              <FlatList
                data={PlayersAreCome}
                keyExtractor={(item) => item.id}
                renderItem={renderPlayersChosenItem}
                numColumns={1}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

export default ChoosePlayers;

const styles = StyleSheet.create({
  flatList1Container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
  titlePositions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titlePositions2: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  pressed: {
    opacity: 0.75,
  },
  titleContainer: {
    color: Colors.primary500,
    textAlign: "center",
    fontSize: 20,
    borderBottomWidth: 3,
    fontWeight: "bold",
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
