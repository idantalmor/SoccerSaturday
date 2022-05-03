import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
  SafeAreaView,
  VirtualizedList,
} from "react-native";
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
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.title}>
            Click on the players who have confirmed arrival
          </Text>
          <View style={styles.flatList1Container}>
            <Text Text style={styles.titleContainer}>
              All Players ({AllPlayers.length})
            </Text>
            <View>
              <FlatList
                data={AllPlayers}
                keyExtractor={(item) => item.id}
                renderItem={renderPlayersItem}
                numColumns={2}
              />
            </View>
          </View>
          <View style={styles.flatList2Container}>
            <Text style={styles.titleContainer}>
              Who's Coming ({PlayersAreCome.length}){" "}
            </Text>
            <FlatList
              data={PlayersAreCome}
              keyExtractor={(item) => item.id}
              renderItem={renderPlayersChosenItem}
              numColumns={2}
            />
          </View>
          <View>
            <PrimaryButton onPress={makeTeamsHandler}>Come on!</PrimaryButton>
            <PrimaryButton onPress={cleanListHandler}>Clean List</PrimaryButton>
            <PrimaryButton onPress={chooseAllHandler}>Choose All</PrimaryButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ChoosePlayers;

const styles = StyleSheet.create({
  flatList1Container: {
    flex: 1,
    justifyContent: "space-around",
  },
  flatList2Container: {
    justifyContent: "space-around",
  },
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