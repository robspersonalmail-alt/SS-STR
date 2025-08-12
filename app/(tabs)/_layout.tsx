import { Tabs } from "expo-router";
import LogoTitle from "../../components/LogoTitle";
import { colors } from "../../constants/theme";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerTitle: () => <LogoTitle />,
        tabBarActiveTintColor: colors.primaryYellow,
        tabBarInactiveTintColor: colors.darkGray,
        tabBarStyle: { backgroundColor: colors.white },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="services" options={{ title: "Services" }} />
      <Tabs.Screen name="messages" options={{ title: "Messages" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
