// Header.js
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Header = ({ title, logoUrl }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: logoUrl }} style={styles.logo} />
      </View>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#ed799c',
    paddingBottom: 20,
    paddingTop: 40, // Adjust the padding as needed
  },
  headerText: {
    color: '#fff', // Changed text color to white for better contrast
    fontSize: 24, // Slightly reduced font size
    fontWeight: 'bold',
  },
  logoContainer: {
    backgroundColor: '#fff', // Added a white background for the logo
    borderRadius: 20,
    padding: 5, // Added padding to the logo container
    marginRight: 10,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 15, // Adjusted border radius for a rounder shape
  },
});

export default Header;
