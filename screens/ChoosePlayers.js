import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { PLAYER } from "../data/dummy-data";
import Colors from "../constans/style";
import Subtitle from "../components/MakeTeams/SubTitle";
import PrimaryButton from "../components/MakeTeams/Button";
import { useState } from "react";

function ChoosePlayers() {
  function renderPlayersItem(itemData) {
    const myPlayer = itemData.item
    return <Subtitle onPress={ChooseMe.bind(this,myPlayer)}>{itemData.item.fullName}</Subtitle>;
  }
  const [PlayersAreCome, setPlayersAreCome] = useState([])
  console.log(PlayersAreCome)
  function ChooseMe(myPlayer) {
    setPlayersAreCome((oldArray) => [myPlayer,...oldArray])
  }
  return (
    <View>
      <Text style={styles.title}>Press on the Players are Attend</Text>
      <FlatList
        data={PLAYER}
        keyExtractor={(item) => item.id}
        renderItem={renderPlayersItem}
        numColumns={3}
      />
      <View>
        <PrimaryButton>Come on!</PrimaryButton>
      </View>
    </View>
  );
}

export default ChoosePlayers;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
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
});
