import { View, Text } from "react-native";
import ThemedBackground from "../../components/ThemedBackground";
import { colors, spacing } from "../../constants/theme";

export default function Services() {
  return (
    <ThemedBackground>
      <View style={{ flex: 1, padding: spacing.lg, gap: spacing.md }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: colors.darkGray }}>
          Extra Services
        </Text>
        <Text style={{ color: colors.midGray }}>
          Add cleaning, late checkout, beach towels, and more.
        </Text>
      </View>
    </ThemedBackground>
  );
}
