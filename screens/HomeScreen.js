import React from 'react';
import { View, Text, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Image source={require('../assets/sunstars-logo.png')} style={{ width: 50, height: 50 }} />
      <Text>Home Screen</Text>
    </View>
  );
}

