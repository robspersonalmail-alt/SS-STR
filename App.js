// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

function Screen({ label }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18 }}>{label}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Tab.Screen name="Trip" children={() => <Screen label="Trip timeline" />} />
        <Tab.Screen name="Property" children={() => <Screen label="Property manual & videos" />} />
        <Tab.Screen name="Services" children={() => <Screen label="Services & upsells" />} />
        <Tab.Screen name="Messages" children={() => <Screen label="Messages & inbox" />} />
        <Tab.Screen name="Profile" children={() => <Screen label="Profile & receipts" />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
