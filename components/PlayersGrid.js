import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constans/style";

function PlayersGrid({ name, role, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable style={({pressed}) => [styles.button, pressed ? styles.buttonPressed: null,]} onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.role}>{role}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default PlayersGrid;

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin: 16,
        height: 100,
        borderRadius: 10,
        borderColor: Colors.primary700,
        borderWidth: 4,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        backgroundColor: 'white',
    },
    button: {
        flex:1,
    },
    buttonPressed:{
        opacity: 0.5
    },
    innerContainer:{
        flex:1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    role:{
        fontSize: 12,
        color: Colors.primary700,
        fontWeight: 'bold',
        
    }
})
