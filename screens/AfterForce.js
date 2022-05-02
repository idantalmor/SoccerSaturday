<script src="http://localhost:8097"></script>;
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
    step3();
  }

  function step3() {
    while (tempBacks[0] != null) {
      if (
        tempBacks[0] != null &&
        tempBacks[1] != null &&
        tempBacks[2] != null
      ) {
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
            tempBacks.splice(0, 1);
          }
          if (num2 === 3) {
            tempTeamC.push(tempBacks[0]);
            tempBacks.splice(0, 1);
          }
        }
        if (num === 2) {
          tempTeamB.push(tempBacks[0]);
          tempBacks.splice(0, 1);
          const num2 = getRandomInt(1, 2);
          if (num2 === 1) {
            tempTeamA.push(tempBacks[0]);
            tempBacks.splice(0, 1);
          }
          if (num2 === 2) {
            tempTeamC.push(tempBacks[0]);
            tempBacks.splice(0, 1);
          }
        }
        if (num === 3) {
          tempTeamC.push(tempBacks[0]);
          tempBacks.splice(0, 1);
          const num2 = getRandomInt(1, 2);
          if (num2 === 1) {
            tempTeamA.push(tempBacks[0]);
            tempBacks.splice(0, 1);
          }
          if (num2 === 2) {
            tempTeamB.push(tempBacks[0]);
            tempBacks.splice(0, 1);
          }
        }
      }
      if (tempBacks[0] != null && tempBacks[1] == null) {
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
        }
      }
    }
    step4();
  }

  function checkGrade() {
    var gradeA = 0;
    var gradeB = 0;
    var gradeC = 0;
    for (var i = 0; i < tempTeamA.length; i++) {
      gradeA = gradeA + tempTeamA[i].grade;
    }
    for (var i = 0; i < tempTeamB.length; i++) {
      gradeB = gradeB + tempTeamB[i].grade;
    }
    for (var i = 0; i < tempTeamC.length; i++) {
      gradeC = gradeC + tempTeamC[i].grade;
    }
    const Grades = [
      { team: "teamA", grade: gradeA },
      { team: "teamB", grade: gradeB },
      { team: "teamC", grade: gradeC },
    ];
    Grades.sort((a, b) => (a.grade < b.grade ? 1 : -1));
    return Grades;
  }
  function checkNumberOfPlayers() {
    var playersA = tempTeamA.length;
    var playersB = tempTeamB.length;
    var playersC = tempTeamC.length;
    const NumberOfPlayers = { playersA, playersB, playersC };
    return NumberOfPlayers;
  }

  function step4() {
    var numOfPlayers = checkNumberOfPlayers();
    const teams = [];
    if (
      numOfPlayers.playersA > numOfPlayers.playersB ||
      numOfPlayers.playersA > numOfPlayers.playersB
    ) {
      teams.push("TeamA");
    }
    if (
      numOfPlayers.playersB > numOfPlayers.playersA ||
      numOfPlayers.playersB > numOfPlayers.playersC
    ) {
      teams.push("TeamB");
    }
    if (
      numOfPlayers.playersC > numOfPlayers.playersA ||
      numOfPlayers.playersC > numOfPlayers.playersB
    ) {
      teams.push("TeamC");
    }
    if (teams.length === 1) {
      if (teams[0] === "TeamA" || teams[1] === "TeamA") {
        TeamA.push(tempAttackers[0]);
        tempAttackers.splice(0, 1);
      }
      if (teams[0] === "TeamB" || teams[1] === "TeamB") {
        TeamB.push(tempAttackers[0]);
        tempAttackers.splice(0, 1);
      }
      if (teams[0] === "TeamC" || teams[1] === "TeamC") {
        TeamC.push(tempAttackers[0]);
        tempAttackers.splice(0, 1);
      }
    }
    if (teams.length === 2) {
      if (teams[0] == "TeamA" || teams[1] == "TeamA") {
        const num = getRandomInt(1, 2);
        if (num === 1) {
          TeamA.push(tempAttackers[0]);
          tempAttackers.splice(0, 1);
        }
        if (num === 2) {
          TeamA.push(tempAttackers[0]);
          tempAttackers.splice(0, 1);
        }
      }
      if (teams[0] == "TeamB" || teams[1] == "TeamB") {
        const num = getRandomInt(1, 2);
        if (num === 1) {
          TeamB.push(tempAttackers[0]);
          tempAttackers.splice(0, 1);
        }
        if (num === 2) {
          TeamB.push(tempAttackers[0]);
          tempAttackers.splice(0, 1);
        }
      }
      if (teams[0] == "TeamC" || teams[1] == "TeamC") {
        const num = getRandomInt(1, 2);
        if (num === 1) {
          TeamC.push(tempAttackers[0]);
          tempAttackers.splice(0, 1);
        }
        if (num === 2) {
          TeamC.push(tempAttackers[0]);
          tempAttackers.splice(0, 1);
        }
      }
    }
    step5();
  }

  function step5() {
    var numOfPlayers = checkNumberOfPlayers();
    while (
      numOfPlayers.playersA != numOfPlayers.playersB ||
      numOfPlayers.playersB != numOfPlayers.playersC ||
      numOfPlayers.playersA != numOfPlayers.playersC
    ) {
      const teams = [];
      if (
        numOfPlayers.playersA < numOfPlayers.playersB ||
        numOfPlayers.playersA < numOfPlayers.playersB
      ) {
        teams.push("TeamA");
      }
      if (
        numOfPlayers.playersB < numOfPlayers.playersA ||
        numOfPlayers.playersB < numOfPlayers.playersC
      ) {
        teams.push("TeamB");
      }
      if (
        numOfPlayers.playersC < numOfPlayers.playersA ||
        numOfPlayers.playersC < numOfPlayers.playersB
      ) {
        teams.push("TeamC");
      }
      if (teams.length === 1) {
        if (teams[0] === "TeamA" || teams[1] === "TeamA") {
          TeamA.push(tempAttackers[0]);
          tempAttackers.splice(0, 1);
        }
        if (teams[0] === "TeamB" || teams[1] === "TeamB") {
          TeamB.push(tempAttackers[0]);
          tempAttackers.splice(0, 1);
        }
        if (teams[0] === "TeamC" || teams[1] === "TeamC") {
          TeamC.push(tempAttackers[0]);
          tempAttackers.splice(0, 1);
        }
      }
      if (teams.length === 2) {
        if (teams[0] != "TeamA" && teams[1] != "TeamA") {
          const num = getRandomInt(1, 2);
          if (num === 1) {
            TeamB.push(tempAttackers[0]);
            tempAttackers.splice(0, 1);
          }
          if (num === 2) {
            TeamC.push(tempAttackers[0]);
            tempAttackers.splice(0, 1);
          }
        }
        if (teams[0] != "TeamB" && teams[1] != "TeamB") {
          const num = getRandomInt(1, 2);
          if (num === 1) {
            TeamA.push(tempAttackers[0]);
            tempAttackers.splice(0, 1);
          }
          if (num === 2) {
            TeamC.push(tempAttackers[0]);
            tempAttackers.splice(0, 1);
          }
        }
        if (teams[0] != "TeamC" && teams[1] != "TeamC") {
          const num = getRandomInt(1, 2);
          if (num === 1) {
            TeamA.push(tempAttackers[0]);
            tempAttackers.splice(0, 1);
          }
          if (num === 2) {
            TeamB.push(tempAttackers[0]);
            tempAttackers.splice(0, 1);
          }
        }
      }
      numOfPlayers = checkNumberOfPlayers();
    }
    step6();
  }

  function step6() {
    var grades = checkGrade();
    var badTeam = grades[2].team;
    var middleTeam = grades[1].team;
    var bestTeam = grades[0].team;
    while (tempAttackers.length > 0) {
      if (badTeam === "teamA") {
        TeamA.push(tempAttackers[0]);
        tempAttackers.splice(0, 1);
      }
      if (badTeam === "teamB") {
        TeamB.push(tempAttackers[0]);
        tempAttackers.splice(0, 1);
      }
      if (badTeam === "teamC") {
        TeamC.push(tempAttackers[0]);
        tempAttackers.splice(0, 1);
      }
      if (middleTeam === "teamA") {
        TeamA.push(tempAttackers[0]);
        tempAttackers.splice(0, 1);
      }
      if (middleTeam === "teamB") {
        TeamB.push(tempAttackers[0]);
        tempAttackers.splice(0, 1);
      }
      if (middleTeam === "teamC") {
        TeamC.push(tempAttackers[0]);
        tempAttackers.splice(0, 1);
      }
      if (bestTeam === "teamA") {
        TeamA.push(tempAttackers[0]);
        tempAttackers.splice(0, 1);
      }
      if (bestTeam === "teamB") {
        TeamB.push(tempAttackers[0]);
        tempAttackers.splice(0, 1);
      }
      if (bestTeam === "teamC") {
        TeamC.push(tempAttackers[0]);
        tempAttackers.splice(0, 1);
      }
    }
    TeamA.sort((a, b) => (a.grade < b.grade ? 1 : -1));
    TeamB.sort((a, b) => (a.grade < b.grade ? 1 : -1));
    TeamC.sort((a, b) => (a.grade < b.grade ? 1 : -1));
  }
  function step7() {
    var grades = checkGrade();
    console.log(grades);
    const difference = (grades[0].grade - grades[2].grade) / 2;
    console.log("the difference is:" + difference);
    for (var i = 0; i < 6; i++) {
      if (grades[0].team === "teamA" && grades[2].team === "teamB") {
        console.log('if 1')
        console.log(TeamA[i].grade - TeamB[i].grade <= difference)
        if (TeamA[i].grade - TeamB[i].grade <= difference) {
          const playerA = TeamA[i];
          const playerB = TeamB[i];
          TeamA[i] === playerB;
          TeamB[i] === playerA;
        }
      }
      if (grades[0].team === "teamA" && grades[2].team === "teamC") {
        console.log('if 2')
        console.log(TeamA[i].grade - TeamC[i].grade <= difference)
        if (TeamA[i].grade - TeamC[i].grade <= difference) {
          const playerA = TeamA[i];
          const playerC = TeamC[i];
          TeamA[i] === playerC;
          TeamC[i] === playerA;
        }
      }
      if (grades[0].team === "teamB" && grades[2].team === "teamA") {
        console.log('if 3')
        console.log(TeamB[i].grade - TeamA[i].grade <= difference)
        if (TeamB[i].grade - TeamA[i].grade <= difference) {
          const playerB = TeamB[i];
          const playerA = TeamA[i];
          TeamB[i] === playerA;
          TeamA[i] === playerB;
        }
      }
      if (grades[0].team === "teamB" && grades[2].team === "teamC") {
        console.log('if 4')
        console.log(TeamB[i].grade - TeamC[i].grade <= difference)
        if (TeamB[i].grade - TeamC[i].grade <= difference) {
          const playerB = TeamC[i];
          const playerC = TeamC[i];
          TeamC[i] === playerC;
          TeamB[i] === playerB;
        }
      }
      if (grades[0].team === "teamC" && grades[2].team === "teamA") {
        console.log('if 5')
        console.log(TeamC[i].grade - TeamA[i].grade <= difference)
        if (TeamC[i].grade - TeamA[i].grade <= difference) {
          const playerC = TeamC[i];
          const playerA = TeamA[i];
          TeamC[i] === playerA;
          TeamA[i] === playerC;
        }
      }
      if (grades[0].team === "teamC" && grades[2].team === "teamB") {
        console.log('if 6')
        console.log(TeamC[i].grade - TeamB[i].grade <= difference)
        if (TeamC[i].grade - TeamB[i].grade <= difference) {
          const playerC = TeamC[i];
          const playerB = TeamB[i];
          TeamC[i] === playerB;
          TeamB[i] === playerC;
        }
      }
    }
  }
  function step8() {
    var grades = checkGrade();
    console.log("now: " + grades);
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
        <PrimaryButton onPress={step7}>step7</PrimaryButton>
        <PrimaryButton onPress={step8}>step8</PrimaryButton>

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
