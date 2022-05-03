import { View,Text,Image,StyleSheet, ImageBackground } from "react-native";

function Shirt({name}){
    var stringArray = name.split(/(\s+)/);
    const lastName = stringArray[2]
    return(
        <View style={styles.imageWrapper}>
            <ImageBackground style={styles.theImage}  source={require('../../assets/shirt.png')}>
                <Text>{lastName}</Text>
                </ImageBackground>
            
        </View>
    )
}

export default Shirt

const styles = StyleSheet.create({
    imageWrapper: {
        height: 100,
        width: 100,
        overflow : "hidden"
    },
    theImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        alignItems:'center',
        justifyContent:'center'
    }
    
})