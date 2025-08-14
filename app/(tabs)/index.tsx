import { View, Text, Pressable, Image, Dimensions } from "react-native";
import { Link } from "expo-router";
import ThemedBackground from "../../components/ThemedBackground";
import { colors, spacing, radii } from "../../constants/theme";

const screenW = Dimensions.get("window").width;
const heroLogoW = Math.min(320, Math.round(screenW * 0.45));

export default function Home() {
  return (
    <ThemedBackground>
      <View style={{
        backgroundColor: '#F7C948',
        height: 150,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <View style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 14,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
          elevation: 2,
        }}>
          <Image
            source={require("../../assets/sunstars-logo.png")}
            style={{
              width: heroLogoW,
              height: heroLogoW * 0.3,
            }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: spacing.lg,
          paddingTop: spacing.xl,
          gap: spacing.lg,
        }}
      >
        <Text style={{ fontSize: 28, fontWeight: "800", color: colors.darkGray }}>
          Welcome to Sunstars
        </Text>
        <Text style={{ color: colors.midGray }}>
          Sunshine, ocean, and easy stays. Your next trip begins here.
        </Text>

        <View
          style={{
            backgroundColor: colors.white,
            padding: spacing.lg,
            borderRadius: radii.xl,
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 6 },
            gap: spacing.sm,
          }}
        >
          <Text style={{ fontWeight: "700", color: colors.darkGray, fontSize: 18 }}>
            Your upcoming stay
          </Text>
          <Text style={{ color: colors.midGray }}>No bookings yet.</Text>

          <Link href="/services" asChild>
            <Pressable
              style={{
                backgroundColor: colors.primaryYellow,
                borderRadius: radii.lg,
                paddingVertical: spacing.sm,
                alignItems: "center",
                marginTop: spacing.md,
              }}
            >
              <Text style={{ fontWeight: "700", color: colors.darkGray }}>
                Explore services
              </Text>
            </Pressable>
          </Link>
        </View>

        <Link href="/login" style={{ color: colors.oceanBlue, marginTop: "auto", marginBottom: spacing.xl }}>
          Go to Login
        </Link>
      </View>
    </ThemedBackground>
  );
}
