import { View, Text } from "react-native";
import { colors } from "../constants/theme";

export default function Login() {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",gap:12,backgroundColor:colors.white}}>
      <Text style={{fontSize:22,fontWeight:"700",color:colors.darkGray}}>Login</Text>
      <Text style={{color:colors.darkGray}}>This is a placeholder login screen.</Text>
    </View>
  );
}
