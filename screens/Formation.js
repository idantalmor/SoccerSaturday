import { Text, View, ImageBackground, StyleSheet, Modal } from "react-native";
import PrimaryButton from "../components/MakeTeams/Button";
import FormFormation from "../components/AfterForce/FormFormation";
import TitleTeam from "../components/Formation/TitleTeam";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";

function Formation(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Modal visible={props.visible} animationType="fade">
          <ImageBackground
            source={require("../assets/formation.png")}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
          >
            <FormFormation Team={props.Team} TeamName={props.TeamName} />
          </ImageBackground>
          <TitleTeam name={props.TeamName} grade={props.TeamGrade} />
          <PrimaryButton style={styles.positionButton} onPress={props.onBack}>
            Go back
          </PrimaryButton>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
export default Formation;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 100,
  },
  positionButton: {
    paddingVertical: 20,
  },
  positionAttack1: {
    alignItems: "center",
    paddingVertical: 40,
  },
  positionAttack4: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  positionDefense2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  positionDefense3: {
    paddingVertical: 50,
  },
  positionGoalKeeper: {
    marginVertical: -60,
    alignItems: "center",
  },
});
