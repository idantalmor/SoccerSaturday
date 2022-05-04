import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

function Shirt({ name, number }) {
    const stringArray1 = name.split(/(\s+)/);
    const playerName = stringArray1[2];
  return (
    <View style={styles.imageWrapper}>
      <ImageBackground
        style={styles.theImage}
        source={require("../../assets/shirtProfileNoBackground.png")}
      >
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{playerName}</Text>
          <View style={styles.numberStyle}>
            <Text style={styles.numberStyle2}>{number}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Shirt;

const styles = StyleSheet.create({
  imageWrapper: {
    height: 200,
    width: 200,
    overflow: "hidden",
  },
  theImage: {
    width: "100%",
    height: "100%",
    resizeMode:'stretch',
    alignItems: "center",
    justifyContent: 'center'
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 20,
    color: 'white',
  },
  numberStyle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
    color: 'white',
  },
  numberStyle2: {
    fontWeight: "bold",
    fontSize: 50,
    color: 'white',
    paddingHorizontal:10,
  },
  textContainer: {
    paddingVertical: 30,
    alignItems:'center'
  },
});
