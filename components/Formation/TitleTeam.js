import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constans/style";

function TitleTeam({ name, grade }) {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titlesContainer}>
        <Text style={styles.titles}>{name}</Text>
        <Text style={styles.titles}>Group score: {grade}</Text>
      </View>
    </View>
  );
}
export default TitleTeam;

const styles = StyleSheet.create({
  titles: {
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.primary700,
    textAlign: "center",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  titlesContainer:{
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  titleContainer: {
    padding: 2,
  },
});
