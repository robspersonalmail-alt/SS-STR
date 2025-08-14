
import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { colors } from "../constants/theme";

const screenWidth = Dimensions.get("window").width;

export default function LogoTitle() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: colors.primaryYellow, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 }}>
        <Image
          source={require("../assets/sunstars-logo.png")}
          style={{ width: 40, height: 40 }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1 },
});
