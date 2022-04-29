import { Text, View } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";
import {useState} from 'react'

function AfterForce(){
    const route = useRoute();
    const [GoalKeepers, setGoalKeepers] = useState('route.params.GoalKeepers');
    const [Backs, setBacks] = useState('route.params.Backs');
    const [Attackers, setAttackers] = useState('route.params.Attackers');
    return (
        <View>
            <Text>
                THIS IS AFTER FORCE
            </Text>
        </View>
    )

}
export default AfterForce