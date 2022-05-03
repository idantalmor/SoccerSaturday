import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constans/style";

function TitleTeam({ name, grade }) {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titlesContainer}>
        <Text style={styles.titles}>The Grade of {name} is {grade}</Text>
      </View>
    </View>
  );
}
export default TitleTeam;

const styles = StyleSheet.create({
  titles: {
    fontWeight: "bold",
    fontSize: 20,
    color: 'white',
    textAlign: "center",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  titlesContainer:{

    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 6,
    
  },
  titleContainer: {
    padding: 2,
  },
});
