import { Text, View, StyleSheet } from "react-native"

function PlayerTitle({name,role}){
    return(
    <View style={styles.listItem}>
        <Text style={styles.playerStyle}>{name}</Text>
        <Text style={styles.playerRole}>{role}</Text>
    </View>

    )

}
export default PlayerTitle

const styles = StyleSheet.create({
    playerStyle:{
        color:'black',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    playerRole:{
        color:'black',
        fontSize: 12,
        textAlign: 'center',
    },
    listItem:{
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
        borderRadius:10,
        borderColor: 'black',
        borderWidth: 1,
    }
})