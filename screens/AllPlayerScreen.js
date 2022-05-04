import { FlatList, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { PLAYER } from "../data/dummy-data";
import PlayersGrid from "../components/PlayersGrid";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constans/style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function AllPlayersScreen() {
  const navigation = useNavigation();
  function renderPlayersItem(itemData) {
    function pressHandler() {
      // navigation.navigate("PlayerProfileScreen" , {playerId: itemData.item.id});
      navigation.navigate("PlayerProfileScreen2",  {playerId: itemData.item.id});
    }
    return (
      <PlayersGrid
        name={itemData.item.fullName}
        role={itemData.item.role}
        onPress={pressHandler}
      />
    );
  }
  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.primary600]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../assets/background1.jpeg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <FlatList
          data={PLAYER}
          keyExtractor={(item) => item.id}
          renderItem={renderPlayersItem}
          numColumns={2}
        />
      </ImageBackground>
    </LinearGradient>
  );
}
export default AllPlayersScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
