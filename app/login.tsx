import { View, Text } from "react-native";
import ThemedBackground from "../components/ThemedBackground";
import { colors, spacing } from "../constants/theme";

export default function Login() {
  return (
    <ThemedBackground>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: spacing.lg, gap: spacing.md }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: colors.darkGray }}>
          Login
        </Text>
        <Text style={{ color: colors.midGray }}>Authenticating coming next…</Text>
      </View>
    </ThemedBackground>
  );
}
