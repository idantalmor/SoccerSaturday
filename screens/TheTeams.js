import { View, Text, StyleSheet, FlatList, Saf } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PLAYER } from "../data/dummy-data";
import { useState } from "react";
import PrimaryButton from "../components/MakeTeams/Button";

function TheTeams() {
  const route = useRoute();
  const navigation = useNavigation();
  const [Players, setPlayers] = useState(route.params.Players);
  const ArrayGoalKeeper = Players.filter(function (item) {
    return item.role == "GoalKeeper";
  }).map(function ({ id, fullName, role, grade }) {
    return { id, fullName, role, grade };
  });
  const ArrayBack = Players.filter(function (item) {
    return item.role == "Defense";
  }).map(function ({ id, fullName, role, grade }) {
    return { id, fullName, role, grade };
  });
  const ArrayAttack = Players.filter(function (item) {
    return item.role == "Attack";
  }).map(function ({ id, fullName, role, grade }) {
    return { id, fullName, role, grade };
  });
  function renderGoalKeeper(itemData) {
    return <Text>{itemData.item.fullName}</Text>;
  }
  function renderDefense(itemData) {
    return <Text>{itemData.item.fullName}</Text>;
  }
  function renderAttack(itemData) {
    return <Text>{itemData.item.fullName}</Text>;
  }
  function makeTeamsHandler() {
    navigation.navigate("AfterForce", {
      GoalKeeper: ArrayGoalKeeper,
      Backs: ArrayBack,
      Attacks: ArrayAttack,
    });
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.positions}>
        <View>
          <Text style={styles.titles}>GoalKeepers</Text>
          <FlatList
            data={ArrayGoalKeeper}
            keyExtractor={(item) => item.id}
            renderItem={renderGoalKeeper}
            numColumns={1}
          />
        </View>
        <View>
          <Text style={styles.titles}>Defense</Text>
          <FlatList
            data={ArrayBack}
            keyExtractor={(item) => item.id}
            renderItem={renderDefense}
            numColumns={1}
          />
        </View>
        <View>
          <Text style={styles.titles}>Attacking</Text>
          <FlatList
            data={ArrayAttack}
            keyExtractor={(item) => item.id}
            renderItem={renderAttack}
            numColumns={1}
          />
        </View>
      </View>
      <PrimaryButton onPress={makeTeamsHandler} visible={false}>
        Make 3 Teams of 7 Players
      </PrimaryButton>
    </View>
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
});