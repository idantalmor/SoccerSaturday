import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PLAYER } from "../data/dummy-data";
import { useState } from "react";

function TheTeams(navigation) {
  const route = useRoute();
  const [Players, setPlayers] = useState(route.params.Players);
  let ArrayGoalKeeper = Players.filter(function (item) {
    return item.role == "GoalKeeper";
  }).map(function ({ id, fullName, role, grade }) {
    return { id, fullName, role, grade };
  });
  let ArrayBack = Players.filter(function (item) {
    return item.role == "Defense";
  }).map(function ({ id, fullName, role, grade }) {
    return { id, fullName, role, grade };
  });
  let ArrayAttack = Players.filter(function (item) {
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

  console.log(ArrayGoalKeeper);
  console.log("__________");
  console.log(ArrayBack);
  console.log("__________");
  console.log(ArrayAttack);
  console.log("__________");
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
    </View>
  );
}
export default TheTeams;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  positions:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  titles:{
    fontWeight:'bold',
    fontSize: 16
  }
});
