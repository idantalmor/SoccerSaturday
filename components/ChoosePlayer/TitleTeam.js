import {StyleSheet,Text,View} from 'react-native'
import Colors from '../../constans/style';

function TitleTeam({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default TitleTeam;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primary500,
    padding: 8,
    backgroundColor: Colors.primary600,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
