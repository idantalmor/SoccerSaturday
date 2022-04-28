import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { PLAYER } from "../data/dummy-data";
import Colors from "../constans/style";
import Subtitle from "../components/MakeTeams/SubTitle";
import PrimaryButton from "../components/MakeTeams/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function ChoosePlayers() {
  const navigation = useNavigation();
  function makeTeamsHandler() {
    navigation.navigate("TheTeams", { Players: PlayersAreCome });
  }
  function cleanListHandler() {
    setPlayersAreCome("");
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
    setAllPlayers((oldArray) => [myPlayer, ...oldArray]);
    setPlayersAreCome(AllPlayers.filter((item) => item != myPlayer));
  }
  return (
    <View>
      <Text style={styles.title}>Press on the Players are Attend</Text>
      <View style={styles.flatListContainer}>
        <Text Text style={styles.titleContainer}>
          All Player
        </Text>
        <View>
          <FlatList
            data={AllPlayers}
            keyExtractor={(item) => item.id}
            renderItem={renderPlayersItem}
            numColumns={3}
          />
        </View>
      </View>
      <View>
        <Text style={styles.titleContainer}>Who's Come</Text>
        <FlatList
          data={PlayersAreCome}
          keyExtractor={(item) => item.id}
          renderItem={renderPlayersChosenItem}
          numColumns={3}
        />
      </View>
      <View>
        <PrimaryButton onPress={makeTeamsHandler}>Come on!</PrimaryButton>
        <PrimaryButton onPress={cleanListHandler}>Clean List</PrimaryButton>
      </View>
    </View>
  );
}

export default ChoosePlayers;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "blue",
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
  flatListContainer: {
    textAlign: "center",
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
});
