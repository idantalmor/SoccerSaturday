import { Text, View, StyleSheet } from "react-native";

function Title({ children }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titles}>{children}</Text>
    </View>
  );
}
export default Title;

const styles = StyleSheet.create({
  titles: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 6,
  
  },
  titleContainer: {
    padding: 6,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});
