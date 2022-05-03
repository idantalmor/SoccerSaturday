import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  FlatList,
  SectionList,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constans/style";
import TitleTeam from "../components/subScreen/Title";
import TitleSub from "../components/subScreen/TitleSub";
import Sub from "../components/subScreen/sub";
import { useState } from "react";

function SubsScreen() {
  const route = useRoute();
  const TeamAGrade = route.params.TeamAGrade;
  const TeamBGrade = route.params.TeamBGrade;
  const TeamCGrade = route.params.TeamCGrade;
  const potentialChanges = route.params.potentialChanges;
  const [textIsVisible, setTextIsVisible] = useState(potentialChanges.length > 0)
  console.log(textIsVisible)

  function renderPlayersItem(itemData) {
    const myPlayer1 = itemData.item.replace1.fullName;
    const myPlayer2 = itemData.item.replace2.fullName;
    console.log(myPlayer1);
    console.log(myPlayer2);
    return (
      <Sub name1={myPlayer1} name2={myPlayer2} />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.primary600]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../assets/subs.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <View>
          <TitleTeam name={"Team A"} grade={TeamAGrade} />
          <TitleTeam name={"Team B"} grade={TeamBGrade} />
          <TitleTeam name={"Team C"} grade={TeamCGrade} />
        </View>
        <View>
          <TitleSub>Suggested Subs</TitleSub>
        </View>
        <View style={styles.messageContainer}>
          <View>
            <Text style={styles.message}>
              *The proposed substitutions are meant to balance
            </Text>
            <View style={styles.messageContainer} >
              <Text style={styles.message}>
                the game in case there is one team that stands
              </Text>
            </View>
            <View style={styles.messageContainer} >
              <Text style={styles.message}>out above the rest</Text>
            </View>
          </View>
        </View>
        <View style={styles.subContainer}>
          <FlatList
            data={potentialChanges}
            keyExtractor={(item) => item.id}
            renderItem={renderPlayersItem}
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}
export default SubsScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
  subContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  message: {
    fontSize: 16,
    fontWeight: "bold",
  },
  messageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  messageNoSubs:{
    fontSize: 40,
    fontWeight: "bold",
  }
});
