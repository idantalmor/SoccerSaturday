import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Player from "../models/Player";
import PrimaryButton from "../components/MakeTeams/Button";
import Title from "../components/AfterForce/Title";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constans/style";
import PlayerTitle from "../components/AfterForce/PlayerTitle";
import Formation from "./Formation";

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
  const potentialChanges = [];
  const [formationIsVisible, setFormationIsVisible] = useState(false);

  function backNow() {
    navigation.navigate("ChoosePlayers");
  }
  function showFormation() {
    setFormationIsVisible(true);
  }
  function hideFormation() {
    setFormationIsVisible(false);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function renderPlayers(itemData) {
    return (
      <PlayerTitle name={itemData.item.fullName} role={itemData.item.role} />
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
    step7();
  }
  function step7() {
    var grades = checkGrade();
    console.log(grades);
    const difference = (grades[0].grade - grades[2].grade) / 2;
    console.log("the difference is:" + difference);
    for (var i = 0; i < 6; i++) {
      if (grades[0].team === "teamA" && grades[2].team === "teamB") {
        console.log("if 1");
        const playerA = TeamA[i];
        const playerAGrade = playerA.grade;
        for (var j = 0; j < 6; j++) {
          const playerB = TeamB[j];
          const playerBGrade = playerB.grade;
          const myDifference = playerAGrade - playerBGrade;
          if (myDifference <= difference && myDifference > 0) {
            console.log("if 1 changing");
            if (playerA.role != "GoalKeeper" && playerB.role != "GoalKeeper") {
              potentialChanges.push({ replace1: playerA, replace2: playerB });
              // const tempAFirst = TeamA.slice(0, i);
              // const tempASecond = TeamA.slice(i + 1);
              // const tempAThird = tempAFirst.concat(tempASecond);
              // tempAThird.push(playerB);
              // const tempBFirst = TeamB.slice(0, i);
              // const tempBSecond = TeamB.slice(i + 1);
              // const tempBThird = tempBFirst.concat(tempBSecond);
              // tempBThird.push(playerA);
            }
          }
        }
      }
      if (grades[0].team === "teamA" && grades[2].team === "teamC") {
        console.log("if 2");
        const playerA = TeamA[i];
        const playerAGrade = playerA.grade;
        for (var j = 0; j < 6; j++) {
          const playerC = TeamC[j];
          const playerCGrade = playerC.grade;
          const myDifference = playerAGrade - playerCGrade;
          if (myDifference <= difference && myDifference > 0) {
            console.log("if 2 changing");
            if (playerA.role != "GoalKeeper" && playerC.role != "GoalKeeper") {
              potentialChanges.push({ replace1: playerA, replace2: playerC });
              // const tempAFirst = TeamA.slice(0, i);
              // const tempASecond = TeamA.slice(i + 1);
              // const tempAThird = tempAFirst.concat(tempASecond);
              // tempAThird.push(playerC);
              // const tempCFirst = TeamC.slice(0, i);
              // const tempCSecond = TeamC.slice(i + 1);
              // const tempCThird = tempCFirst.concat(tempCSecond);
              // tempCThird.push(playerA);
            }
          }
        }
      }
      if (grades[0].team === "teamB" && grades[2].team === "teamA") {
        console.log("if 3");
        const playerB = TeamB[i];
        const playerBGrade = playerB.grade;
        for (var j = 0; j < 6; j++) {
          const playerA = TeamA[j];
          const playerAGrade = playerA.grade;
          const myDifference = playerBGrade - playerAGrade;
          if (myDifference <= difference && myDifference > 0) {
            console.log("if 3 changing");
            if (playerA.role != "GoalKeeper" && playerB.role != "GoalKeeper") {
              potentialChanges.push({ replace1: playerB, replace2: playerA });
              // const tempBFirst = TeamB.slice(0, i);
              // const tempBSecond = TeamB.slice(i + 1);
              // const tempBThird = tempBFirst.concat(tempBSecond);
              // tempBThird.push(playerA);
              // const tempAFirst = TeamA.slice(0, i);
              // const tempASecond = TeamA.slice(i + 1);
              // const tempAThird = tempAFirst.concat(tempASecond);
              // tempAThird.push(playerB);
            }
          }
        }
      }
      if (grades[0].team === "teamB" && grades[2].team === "teamC") {
        console.log("if 4");
        const playerB = TeamB[i];
        const playerBGrade = playerB.grade;
        for (var j = 0; j < 6; j++) {
          const playerC = TeamC[j];
          const playerCGrade = playerC.grade;
          const myDifference = playerBGrade - playerCGrade;
          if (myDifference <= difference && myDifference > 0) {
            console.log("if 4 changing");
            if (playerC.role != "GoalKeeper" && playerB.role != "GoalKeeper") {
              potentialChanges.push({ replace1: playerB, replace2: playerC });
              // const tempBFirst = TeamB.slice(0, i);
              // const tempBSecond = TeamB.slice(i + 1);
              // const tempBThird = tempBFirst.concat(tempBSecond);
              // tempBThird.push(playerC);
              // const tempCFirst = TeamC.slice(0, i);
              // const tempCSecond = TeamC.slice(i + 1);
              // const tempCThird = tempCFirst.concat(tempCSecond);
              // tempCThird.push(playerB);
            }
          }
        }
      }
      if (grades[0].team === "teamC" && grades[2].team === "teamA") {
        console.log("if 5");
        const playerC = TeamC[i];
        const playerCGrade = playerC.grade;
        for (var j = 0; j < 6; j++) {
          const playerA = TeamA[j];
          const playerAGrade = playerA.grade;
          const myDifference = playerCGrade - playerAGrade;
          if (myDifference <= difference && myDifference > 0) {
            console.log("if 5 changing");
            if (playerA.role != "GoalKeeper" && playerC.role != "GoalKeeper") {
              potentialChanges.push({ replace1: playerC, replace2: playerA });
              // const tempAFirst = TeamA.slice(0, i);
              // const tempASecond = TeamA.slice(i + 1);
              // const tempAThird = tempAFirst.concat(tempASecond);
              // tempAThird.push(playerC);
              // const tempCFirst = TeamC.slice(0, i);
              // const tempCSecond = TeamC.slice(i + 1);
              // const tempCThird = tempCFirst.concat(tempCSecond);
              // tempCThird.push(playerA);
            }
          }
        }
      }
      if (grades[0].team === "teamC" && grades[2].team === "teamB") {
        console.log("if 6");
        const playerC = TeamC[i];
        const playerCGrade = playerC.grade;
        for (var j = 0; j < 6; j++) {
          const playerB = TeamB[j];
          const playerBGrade = playerB.grade;
          const myDifference = playerCGrade - playerBGrade;
          if (myDifference <= difference && myDifference > 0) {
            console.log("if 6 changing");
            if (playerC.role != "GoalKeeper" && playerB.role != "GoalKeeper") {
              potentialChanges.push({ replace1: playerC, replace2: playerB });
              // const tempBFirst = TeamB.slice(0, i);
              // const tempBSecond = TeamB.slice(i + 1);
              // const tempBThird = tempBFirst.concat(tempBSecond);
              // tempBThird.push(playerC);
              // const tempCFirst = TeamC.slice(0, i);
              // const tempCSecond = TeamC.slice(i + 1);
              // const tempCThird = tempCFirst.concat(tempCSecond);
              // tempCThird.push(playerB);
            }
          }
        }
      }
      console.log(potentialChanges);
      step8();
    }
  }
  function step8() {
    var grades = checkGrade();
    console.log("now: " + grades);
    var potentialChanges2 = potentialChanges.filter(
      (pilot) => pilot.replace1.role == pilot.replace2.role
    );
    console.log(potentialChanges2);
    TeamA.sort((a, b) => (a.role < b.role ? 1 : -1));
    TeamB.sort((a, b) => (a.role < b.role ? 1 : -1));
    TeamC.sort((a, b) => (a.role < b.role ? 1 : -1));
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.primary600]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../assets/background3.webp")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <View>
          <Formation visible={formationIsVisible} onBack={hideFormation} />
        </View>
        <View style={styles.rootContainer}>
          <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={step1}>Good Luck</PrimaryButton>
            <PrimaryButton onPress={backNow}>Back</PrimaryButton>
          </View>
          <View style={styles.positions}></View>
          <View style={styles.positions}>
            <View>
              <Title>TeamA</Title>
              <FlatList
                data={TeamA}
                keyExtractor={(item) => item.id}
                renderItem={renderPlayers}
                numColumns={1}
              />
              <PrimaryButton onPress={showFormation}>Show</PrimaryButton>
            </View>
            <View>
              <Title>TeamB</Title>
              <FlatList
                data={TeamB}
                keyExtractor={(item) => item.id}
                renderItem={renderPlayers}
                numColumns={1}
              />
              <PrimaryButton onPress={showFormation}>Show</PrimaryButton>
            </View>
            <View>
              <Title>TeamC</Title>
              <FlatList
                data={TeamC}
                keyExtractor={(item) => item.id}
                renderItem={renderPlayers}
                numColumns={1}
              />
              <PrimaryButton onPress={showFormation}>Show</PrimaryButton>
            </View>
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
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
    justifyContent: "center",
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
