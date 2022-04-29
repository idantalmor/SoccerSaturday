import { Text, View, FlatList, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import Player from "../models/Player";
import PrimaryButton from "../components/MakeTeams/Button";

function AfterForce() {
  const route = useRoute();
  const [GoalKeepers, setGoalKeepers] = useState(route.params.GoalKeeper);
  const [Backs, setBacks] = useState(route.params.Backs);
  const [Attackers, setAttackers] = useState(route.params.Attacks);
  const [TeamA, setTeamA] = useState([]);
  const [TeamB, setTeamB] = useState([]);
  const [TeamC, setTeamC] = useState([]);

  const num = getRandomInt(1, 3);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function renderGoalKeeper(itemData) {
    return <Text>{itemData.item.fullName}</Text>;
  }
  function renderDefense(itemData) {
    return <Text>{itemData.item.fullName} : {itemData.item.grade}</Text>;

  }
  function renderAttack(itemData) {
    return <Text>{itemData.item.fullName} : {itemData.item.grade}</Text>;
  }

  function step1() {
    const changing = new Player(
      "p100",
      "A changing goalkeeper",
      "GoalKeeper",
      "4"
    );
    if (GoalKeepers.length === 1) {
      setTeamA((oldArray) => [GoalKeepers[0], ...oldArray]);
      setTeamB((oldArray) => [changing, ...oldArray]);
      setTeamC((oldArray) => [changing, ...oldArray]);
    }
    if (GoalKeepers.length === 2) {
      setTeamA((oldArray) => [GoalKeepers[0], ...oldArray]);
      setTeamB((oldArray) => [GoalKeepers[1], ...oldArray]);
      setTeamC((oldArray) => [changing, ...oldArray]);
    }
    if (GoalKeepers.length === 3) {
      setTeamA((oldArray) => [GoalKeepers[0], ...oldArray]);
      setTeamB((oldArray) => [GoalKeepers[1], ...oldArray]);
      setTeamC((oldArray) => [GoalKeepers[2], ...oldArray]);
    }
    step2();
  }
  function step2() {
    Backs.sort((a, b) => (a.grade < b.grade ? 1 : -1));
    Attackers.sort((a, b) => (a.grade < b.grade ? 1 : -1));
    step3();
  }
  function step3(){
      console.log('step3')
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.positions}>
        <View>
          <Text style={styles.titles}>GoalKeepers</Text>
          <FlatList
            data={GoalKeepers}
            keyExtractor={(item) => item.id}
            renderItem={renderGoalKeeper}
            numColumns={1}
          />
        </View>
        <View>
          <Text style={styles.titles}>Defense</Text>
          <FlatList
            data={Backs}
            keyExtractor={(item) => item.id}
            renderItem={renderDefense}
            numColumns={1}
          />
        </View>
        <View>
          <Text style={styles.titles}>Attacking</Text>
          <FlatList
            data={Attackers}
            keyExtractor={(item) => item.id}
            renderItem={renderAttack}
            numColumns={1}
          />
        </View>
      </View>
      <View style={styles.positions}>
        <View>
          <Text style={styles.titles}>Team A</Text>
          <FlatList
            data={TeamA}
            keyExtractor={(item) => item.id}
            renderItem={renderGoalKeeper}
            numColumns={1}
          />
        </View>
        <View>
          <Text style={styles.titles}>Team B</Text>
          <FlatList
            data={TeamB}
            keyExtractor={(item) => item.id}
            renderItem={renderGoalKeeper}
            numColumns={1}
          />
        </View>
        <View>
          <Text style={styles.titles}>Team C</Text>
          <FlatList
            data={TeamC}
            keyExtractor={(item) => item.id}
            renderItem={renderGoalKeeper}
            numColumns={1}
          />
        </View>
      </View>
      <PrimaryButton onPress={step1}>Click here to make Teams</PrimaryButton>
    </View>
  );
}
export default AfterForce;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  positions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titles: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
