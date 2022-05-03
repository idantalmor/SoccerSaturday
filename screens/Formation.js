import { Text, View, ImageBackground, StyleSheet,Modal } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import Shirt from "../components/Formation/Shirt";
import PrimaryButton from "../components/MakeTeams/Button";
function Formation(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
    <ImageBackground
      source={require("../assets/formation.png")}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <View>
        <Shirt name={'check'} style={styles.positionAttack1} />
      </View>
    </ImageBackground>
    <PrimaryButton style={styles.positionButton} onPress={props.onBack}>Go back</PrimaryButton>
    </Modal>
  );
}
export default Formation;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 100,
  },
  positionButton: {
    paddingVertical: 20,
  },
  positionAttack1: {
      
  },
  positionAttack2: {},
  positionAttack3: {},
});
