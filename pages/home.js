import React from 'react';
import { StyleSheet, View, TextInput, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const locations = [
  { key: '1', label: 'Home', subtitle: 'Istana Negara' },
  { key: '2', label: 'Work', subtitle: 'TREC Kuala Lumpur' },
  // Add other locations...
];

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Top Map/Image Placeholder */}
      <Image
        style={Styles.Image}
        source={require('../assets/logo_opaq.png')}
      />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Where to ?"
          style={styles.searchInput}
        />
      </View>

      {/* Location Buttons */}
      <FlatList
        data={locations}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.locationButton}>
            <MaterialIcons name="location-pin" size={24} color="black" />
            <View style={styles.locationTextContainer}>
              <Text style={styles.locationLabel}>{item.label}</Text>
              <Text style={styles.locationSubtitle}>{item.subtitle}</Text>
            </View>
          </TouchableOpacity>
        )}
        style={styles.locationsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  mapImage: {
    width: '100%',
    height: 200, // Set image height
  },
  searchContainer: {
    position: 'absolute',
    top: 160, // Adjust the position based on your map/image height
    left: '5%',
    right: '5%',
  },
  searchInput: {
    backgroundColor: '#FFDD44',
    borderRadius: 50,
    padding: 15,
    fontSize: 16,
    elevation: 3, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  locationsList: {
    marginTop: 210, // Adjust based on your map/image height
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFDD44',
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 10,
    borderBottomColor: '#FFF',
    borderBottomWidth: 2,
  },
  locationTextContainer: {
    marginLeft: 10,
  },
  locationLabel: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  locationSubtitle: {
    fontSize: 14,
  },
});
