import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function PropertyInfoScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Sticky yellow header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Property Info</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingTop: 80 }}>
        <Image
          source={require('../assets/images/house.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.card}>
          <Text style={styles.title}>Villa Sunstars</Text>
          <Text style={styles.details}>4 beds · 3 baths · 250m²</Text>
          <Text style={styles.details}>Location: Marbella, Spain</Text>
        </View>
        <Image
          source={require('../assets/images/map.png')}
          style={styles.map}
          resizeMode="contain"
        />
        <View style={styles.videoPlaceholder}>
          <Text style={{ color: '#888' }}>Video tour coming soon...</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#FFD600',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    elevation: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  details: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  map: {
    width: '100%',
    height: 160,
    marginBottom: 16,
    borderRadius: 12,
  },
  videoPlaceholder: {
    height: 120,
    backgroundColor: '#fafafa',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#eee',
  },
});
