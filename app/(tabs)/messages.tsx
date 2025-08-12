import { View, Text } from "react-native";
import { colors } from "../../constants/theme";
export default function Messages() {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center",gap:8,backgroundColor:colors.white}}>
      <Text style={{fontSize:22,fontWeight:"700",color:colors.darkGray}}>Messages</Text>
      <Text style={{color:colors.darkGray}}>Chat with Sunstars staff</Text>
    </View>
  );
}
