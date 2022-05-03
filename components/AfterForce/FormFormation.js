
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
      console.log(GoalkeeperName)
      console.log(GoalBackName1)
      console.log(GoalBackName2)
      console.log(GoalBackName3)
      console.log(GoalAttackName1)
      console.log(GoalAttackName2)
      console.log(GoalAttackName3)

  return (
    <View>
        <View style={styles.positionAttack1}>
          <Shirt name={GoalAttackName3} />
        </View>
        <View style={styles.positionAttack4}>
          <View>
            <Shirt name={GoalAttackName2} />
          </View>
          <View>
            <Shirt name={GoalAttackName1} />
          </View>
        </View>
        <View style={styles.positionDefense2}>
          <View>
            <Shirt name={GoalBackName3} />
          </View>
          <View style={styles.positionDefense3}>
            <Shirt name={GoalBackName2} />
          </View>
          <View>
            <Shirt name={GoalBackName1} />
          </View>
        </View>
        <View style={styles.positionGoalKeeper}>
            <Shirt name={GoalkeeperName} />
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
    paddingVertical: 50,
  },
  positionGoalKeeper: {
    marginVertical: -60,
    alignItems:'center'
  },
});
