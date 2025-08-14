import { View, Text } from "react-native";
import ThemedBackground from "../../components/ThemedBackground";
import { colors, spacing } from "../../constants/theme";

export default function Profile() {
  return (
    <ThemedBackground>
      <View style={{ flex: 1, padding: spacing.lg, gap: spacing.md }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: colors.darkGray }}>
          Your Profile
        </Text>
        <Text style={{ color: colors.midGray }}>
          Manage details, preferences, and past stays.
        </Text>
      </View>
    </ThemedBackground>
  );
}
