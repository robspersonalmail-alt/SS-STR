import { View, Text } from "react-native";
import { colors } from "../../constants/theme";
export default function Services() {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",gap:8,backgroundColor:colors.white}}>
      <Text style={{fontSize:22,fontWeight:"700",color:colors.darkGray}}>Extra Services</Text>
      <Text style={{color:colors.darkGray}}>Order cleaning, towels, and more</Text>
    </View>
  );
}
