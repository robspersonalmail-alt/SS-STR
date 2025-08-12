import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function LogoTitle() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/sunstars-logo.png')} style={styles.logo} />
      <Text style={styles.text}>Sunstars</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 24, height: 24, marginRight: 8 },
  text: { fontSize: 18, fontWeight: 'bold', color: '#333333' },
});
