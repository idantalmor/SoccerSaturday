import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
  SafeAreaView,
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
          <Text style={styles.title}>Press on the Players are Attend</Text>
          <View style={styles.flatListContainer}>
            <Text Text style={styles.titleContainer}>
              All Player ({AllPlayers.length})
            </Text>
            <ScrollView>
              <View>
                <FlatList
                  data={AllPlayers}
                  keyExtractor={(item) => item.id}
                  renderItem={renderPlayersItem}
                  numColumns={3}
                />
              </View>
            </ScrollView>
          </View>
          <View>
            <Text style={styles.titleContainer}>
              Who's Come ({PlayersAreCome.length}){" "}
            </Text>
            <ScrollView>
              <View></View>
              <FlatList
                data={PlayersAreCome}
                keyExtractor={(item) => item.id}
                renderItem={renderPlayersChosenItem}
                numColumns={3}
              />
            </ScrollView>
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
  scrollView: {
    marginHorizontal: 20,
  },
});
