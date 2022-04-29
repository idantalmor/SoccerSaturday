import { Text, View, FlatList, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
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
  var isPaused = false;

  const num = getRandomInt(1, 3);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function renderGoalKeeper(itemData) {
    return (
      <Text>
        {itemData.item.fullName} {itemData.item.grade}
      </Text>
    );
  }
  function renderDefense(itemData) {
    return (
      <Text>
        {itemData.item.fullName} : {itemData.item.grade}
      </Text>
    );
  }
  function renderAttack(itemData) {
    return (
      <Text>
        {itemData.item.fullName} : {itemData.item.grade}
      </Text>
    );
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
      setGoalKeepers('')
    }
    if (GoalKeepers.length === 2) {
      setTeamA((oldArray) => [GoalKeepers[0], ...oldArray]);
      setTeamB((oldArray) => [GoalKeepers[1], ...oldArray]);
      setTeamC((oldArray) => [changing, ...oldArray]);
      setGoalKeepers('')
    }
    if (GoalKeepers.length === 3) {
      setTeamA((oldArray) => [GoalKeepers[0], ...oldArray]);
      setTeamB((oldArray) => [GoalKeepers[1], ...oldArray]);
      setTeamC((oldArray) => [GoalKeepers[2], ...oldArray]);
      setGoalKeepers('')
    }
    step2();
  }
  function step2() {
    Backs.sort((a, b) => (a.grade < b.grade ? 1 : -1));
    Attackers.sort((a, b) => (a.grade < b.grade ? 1 : -1));
    step3();
  }

  function step3() {
    const num = getRandomInt(0, 2);
    setTeamA((oldArray) => [Backs[num], ...oldArray]);
    const num2 = getRandomInt(0, 2);
    setTeamA((oldArray) => [
      Attackers[Attackers.length - num2 - 1],
      ...oldArray,
    ]);
    setBacks(Backs.filter((item) => item != Backs[num]));
    setAttackers(
      Attackers.filter((item) => item != Attackers[Attackers.length - num2 - 1])
    );
  }
  function step4() {
    const num = getRandomInt(0, 2);
    setTeamB((oldArray) => [Backs[num], ...oldArray]);
    setBacks(Backs.filter((item) => item != Backs[num]));
    const num2 = getRandomInt(0, 2);
    setTeamB((oldArray) => [
      Attackers[Attackers.length - num2 - 1],
      ...oldArray,
    ]);
    setAttackers(
      Attackers.filter((item) => item != Attackers[Attackers.length - num2 - 1])
    );
  }

  function step5() {
    const num = getRandomInt(0, 2);
    setTeamC((oldArray) => [Backs[num], ...oldArray]);
    setBacks(Backs.filter((item) => item != Backs[num]));
    const num2 = getRandomInt(0, 2);
    setTeamC((oldArray) => [
      Attackers[Attackers.length - num2 - 1],
      ...oldArray,
    ]);
    setAttackers(
      Attackers.filter((item) => item != Attackers[Attackers.length - num2 - 1])
    );
  }
  function step6() {
    const num = getRandomInt(0, 2);
    setTeamA((oldArray) => [Attackers[num], ...oldArray]);
    const num2 = getRandomInt(0, 2);
    setTeamA((oldArray) => [Backs[Backs.length - num2 - 1], ...oldArray]);
    setBacks(Backs.filter((item) => item != Backs[Backs.length - num2 - 1]));
    setAttackers(Attackers.filter((item) => item != Attackers[num]));
  }
  function step7() {
    const num = getRandomInt(0, 2);
    setTeamB((oldArray) => [Attackers[num], ...oldArray]);
    const num2 = getRandomInt(0, 2);
    setTeamB((oldArray) => [Backs[Backs.length - num2 - 1], ...oldArray]);
    setBacks(Backs.filter((item) => item != Backs[Backs.length - num2 - 1]));
    setAttackers(Attackers.filter((item) => item != Attackers[num]));
  }
  function step8() {
    const num = getRandomInt(0, 2);
    setTeamC((oldArray) => [Attackers[num], ...oldArray]);
    const num2 = getRandomInt(0, Backs.length);
    setTeamC((oldArray) => [Backs[Backs.length - num2 - 1], ...oldArray]);
    setBacks(Backs.filter((item) => item != Backs[Backs.length - num2 - 1]));
    setAttackers(Attackers.filter((item) => item != Attackers[num]));
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
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={step1}>step1</PrimaryButton>
        <PrimaryButton onPress={step4}>step4</PrimaryButton>
        <PrimaryButton onPress={step5}>step5</PrimaryButton>
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={step6}>step6</PrimaryButton>
        <PrimaryButton onPress={step7}>step7</PrimaryButton>
        <PrimaryButton onPress={step8}>step8</PrimaryButton>
      </View>
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
  buttonsContainer: {
    flexDirection: "row",
  },
});
