import { View, Text } from "react-native";
import ThemedBackground from "../../components/ThemedBackground";
import { colors, spacing } from "../../constants/theme";

export default function Messages() {
  return (
    <ThemedBackground>
      <View style={{ flex: 1, padding: spacing.lg, gap: spacing.md }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: colors.darkGray }}>
          Messages
        </Text>
        <Text style={{ color: colors.midGray }}>
          Chat with our team for anything you need during your stay.
        </Text>
      </View>
    </ThemedBackground>
  );
}
