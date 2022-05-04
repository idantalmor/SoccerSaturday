import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constans/style";
import Picture from "./Picture";

function Card({ name, role, grade, number }) {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.titles}>{name}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>{role}</Text>
          <Text style={styles.details}>{grade}</Text>
          <Text style={styles.details}>#{number}</Text>
        </View>
      </View>
    </View>
  );
}
export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  titles: {
    fontWeight: "bold",
    fontSize: 40,
    color: Colors.primary500,
    textAlign: "center",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  titleContainer: {
    alignItems: "center",
  },
  detailsContainer: {
      flexDirection:'row',
      justifyContent:'space-around'
  },
  details:{
    fontSize: 30,
    color: Colors.primary600,
    textAlign: "center",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
  }
});
