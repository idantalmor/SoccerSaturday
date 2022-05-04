import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  ImageBackground,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PLAYER } from "../data/dummy-data";
import { useState } from "react";
import PrimaryButton from "../components/MakeTeams/Button";
import GoalKeeper from "../components/TheTeams/Goalkeeper";
import Backs from "../components/TheTeams/Backs";
import Attack from "../components/TheTeams/Attack";

function TheTeams() {
  const route = useRoute();
  const navigation = useNavigation();
  const [Players, setPlayers] = useState(route.params.Players);
  var validation = true;

  const ArrayGoalKeeper = Players.filter(function (item) {
    return item.role == "GoalKeeper";
  }).map(function ({ id, fullName, role, grade, favoriteNumber }) {
    return { id, fullName, role, grade, favoriteNumber };
  });
  const ArrayBack = Players.filter(function (item) {
    return item.role == "Defense";
  }).map(function ({ id, fullName, role, grade, favoriteNumber }) {
    return { id, fullName, role, grade, favoriteNumber };
  });
  const ArrayAttack = Players.filter(function (item) {
    return item.role == "Attack";
  }).map(function ({ id, fullName, role, grade, favoriteNumber }) {
    return { id, fullName, role, grade, favoriteNumber };
  });
  // function renderGoalKeeper(itemData) {
  //   return <Text>{itemData.item.fullName}</Text>;
  // }
  // function renderDefense(itemData) {
  //   return <Text>{itemData.item.fullName}</Text>;
  // }
  // function renderAttack(itemData) {
  //   return <Text>{itemData.item.fullName}</Text>;
  // }

  function createTwoButtonAlert() {
    var sumPlayers = ArrayBack.length + ArrayAttack.length;
    var TotalPlayers =
      ArrayBack.length + ArrayAttack.length + ArrayGoalKeeper.length;
    if (sumPlayers < 18) {
      validation = false;
      Alert.alert(
        "Not enough Players",
        "Must have at least 18 fielders players to make teams",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
        ]
      );
    }
    if (TotalPlayers > 21) {
      validation = false;
      Alert.alert("Too Much Players", "You have more than 21 Players", [
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
    }
    if (validation == true) {
      makeTeamsHandler();
    }
  }

  function makeTeamsHandler() {
    navigation.navigate("AfterForce", {
      GoalKeeper: ArrayGoalKeeper,
      Backs: ArrayBack,
      Attacks: ArrayAttack,
    });
  }

  function renderPlayersItem(itemData) {
    return (
      <Title
        name={itemData.item.fullName}
        number={itemData.item.favoriteNumber}
      />
    );
  }

  return (
      <View>
        <Text>GoalKeeper</Text>
      </View>
        // <PrimaryButton onPress={createTwoButtonAlert} visible={false}>
        //   Make 3 Teams of 7 Players
        // </PrimaryButton>
  );
}
export default TheTeams;

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
  titleContainer: {
    alignItems: "center",
  },
  GoalKeeperContainer: {
    flex: 0.2,
  },
  BacksContainer: {
    flex: 0.3,
  },
  AttackContainer: {
    flex: 0.4,
  },
});
