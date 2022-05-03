
import Shirt from "../Formation/Shirt"
import {View,StyleSheet,ImageBackground} from 'react-native'

function FormFormation(props) {
      const stringArray1 = props.Team[0].fullName.split(/(\s+)/)
      const stringArray2 = props.Team[1].fullName.split(/(\s+)/)
      const stringArray3 = props.Team[2].fullName.split(/(\s+)/)
      const stringArray4 = props.Team[3].fullName.split(/(\s+)/)
      const stringArray5 = props.Team[4].fullName.split(/(\s+)/)
      const stringArray6= props.Team[5].fullName.split(/(\s+)/)
      const stringArray7= props.Team[6].fullName.split(/(\s+)/)
      const GoalkeeperName = stringArray1[2]
      const GoalBackName1 = stringArray2[2]
      const GoalBackName2 = stringArray3[2]
      const GoalBackName3 = stringArray4[2]
      const GoalAttackName1 = stringArray5[2]
      const GoalAttackName2 = stringArray6[2]
      const GoalAttackName3 = stringArray7[2]
      const number1 = props.Team[0].favoriteNumber
      const number2 = props.Team[1].favoriteNumber
      const number3 = props.Team[2].favoriteNumber
      const number4 = props.Team[3].favoriteNumber
      const number5 = props.Team[4].favoriteNumber
      const number6 = props.Team[5].favoriteNumber
      const number7 = props.Team[6].favoriteNumber

  return (
    <View>
        <View style={styles.positionAttack1}>
          <Shirt name={GoalAttackName3} number={number7} />
        </View>
        <View style={styles.positionAttack4}>
          <View>
            <Shirt name={GoalAttackName2} number={number6} />
          </View>
          <View>
            <Shirt name={GoalAttackName1} number={number5} />
          </View>
        </View>
        <View style={styles.positionDefense2} >
          <View>
            <Shirt name={GoalBackName3}  number={number4} />
          </View>
          <View style={styles.positionDefense3}>
            <Shirt name={GoalBackName2}  number={number3}/>
          </View>
          <View>
            <Shirt name={GoalBackName1}  number={number2}/>
          </View>
        </View>
        <View style={styles.positionGoalKeeper}>
            <Shirt name={GoalkeeperName}  number={number1} />
          </View>
    </View>
  );
}
export default FormFormation;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 100,
  },
  positionButton: {
    paddingVertical: 20,
  },
  positionAttack1: {
    alignItems: "center",
    paddingVertical: 40,
  },
  positionAttack4: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
  },
  positionDefense2: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical: 40,
  },
  positionDefense3: {
    paddingVertical: 10,
  },
  positionGoalKeeper: {
    marginVertical: -40,
    alignItems:'center'
  },
});
