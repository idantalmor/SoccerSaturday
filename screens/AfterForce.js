import { Text, View, FlatList, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Player from "../models/Player";
import PrimaryButton from "../components/MakeTeams/Button";

function AfterForce() {
  const route = useRoute();
  const navigation = useNavigation();
  const [GoalKeepers, setGoalKeepers] = useState(route.params.GoalKeeper);
  const [Backs, setBacks] = useState(route.params.Backs);
  const [Attackers, setAttackers] = useState(route.params.Attacks);
  const tempBacks = Backs;
  const tempAttackers = Attackers;
  const [TeamA, setTeamA] = useState([]);
  const [TeamB, setTeamB] = useState([]);
  const [TeamC, setTeamC] = useState([]);
  const tempTeamA = TeamA;
  const tempTeamB = TeamB;
  const tempTeamC = TeamC;

  const num = getRandomInt(1, 3);

  function backNow() {
    navigation.navigate("ChoosePlayers");
  }

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
      tempTeamA.push(GoalKeepers[0]);
      tempTeamB.push(changing);
      tempTeamC.push(changing);
      setGoalKeepers("");
    }
    if (GoalKeepers.length === 2) {
      tempTeamA.push(GoalKeepers[0]);
      tempTeamB.push(GoalKeepers[1]);
      tempTeamC.push(changing);
      setGoalKeepers("");
    }
    if (GoalKeepers.length === 3) {
      tempTeamA.push(GoalKeepers[0]);
      tempTeamB.push(GoalKeepers[1]);
      tempTeamC.push(GoalKeepers[2]);
      setGoalKeepers("");
    }
    step2();
  }
  function step2() {
    Backs.sort((a, b) => (a.grade < b.grade ? 1 : -1));
    Attackers.sort((a, b) => (a.grade < b.grade ? 1 : -1));
    step3()
  }

  function step3() {
    while(tempBacks[0] != null)
    {
      if (tempBacks[0] != null && tempBacks[1] != null && tempBacks[2] != null) {
        {
          const num = getRandomInt(1, 3);
          if (num === 1) {
            tempTeamA.push(tempBacks[0]);
          }
          if (num === 2) {
            tempTeamB.push(tempBacks[0]);
          }
          if (num === 3) {
            tempTeamC.push(tempBacks[0]);
          }
          tempBacks.splice(0, 1);
          if (
            tempTeamA.length < tempTeamB.length ||
            tempTeamA.length < tempTeamC.length
          ) {
            tempTeamA.push(tempBacks[0]);
            tempBacks.splice(0, 1);
          }
          if (
            tempTeamB.length < tempTeamA.length ||
            tempTeamB.length < tempTeamC.length
          ) {
            tempTeamB.push(tempBacks[0]);
            tempBacks.splice(0, 1);
          }
          if (
            tempTeamC.length < tempTeamB.length ||
            tempTeamC.length < tempTeamA.length
          ) {
            tempTeamC.push(tempBacks[0]);
            tempBacks.splice(0, 1);
          }
        }
        if (
          tempBacks[0] != null &&
          tempBacks[1] != null &&
          tempBacks[2] == null
        ) {
          const num = getRandomInt(1, 3);
          if (num === 1) {
            tempTeamA.push(tempBacks[0]);
            tempBacks.splice(0, 1);
            const num2 = getRandomInt(2, 3);
            if (num2 === 2) {
              tempTeamB.push(tempBacks[0]);
            }
            if (num2 === 3) {
              tempTeamC.push(tempBacks[0]);
            }
          }
          if (num === 2) {
            tempTeamB.push(tempBacks[0]);
            tempBacks.splice(0, 1);
            const num2 = getRandomInt(1, 2);
            if (num2 === 1) {
              tempTeamA.push(tempBacks[0]);
            }
            if (num2 === 2) {
              tempTeamC.push(tempBacks[0]);
            }
          }
          if (num === 3) {
            tempTeamC.push(tempBacks[0]);
            tempBacks.splice(0, 1);
            const num2 = getRandomInt(1, 2);
            if (num2 === 1) {
              tempTeamA.push(tempBacks[0]);
            }
            if (num2 === 2) {
              tempTeamB.push(tempBacks[0]);
            }
          }
        }
        console.log(tempBacks[0] != null && tempBacks[1] == null);
        if (tempBacks[0] != null && tempBacks[1] == null) {
          {
            const num = getRandomInt(1, 3);
            console.log(num);
            if (num === 1) {
              tempTeamA.push(tempBacks[0]);
            }
            if (num === 2) {
              tempTeamB.push(tempBacks[0]);
            }
            if (num === 3) {
              tempTeamC.push(tempBacks[0]);
            }
            tempBacks.splice(0, 1);
          }
        }
    }
      console.log("Team A");
      console.log("_______");
      console.log(TeamA);
      console.log("Team B");
      console.log("_______");
      console.log(TeamB);
      console.log("Team C");
      console.log("_______");
      console.log(TeamC);
    }
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
        <PrimaryButton onPress={backNow}>Back to choose</PrimaryButton>
      </View>
    </View>
  );
}
export default AfterForce;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
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
