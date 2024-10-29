import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Logo placeholder */}
        <Text style={styles.logoText}>My Logo</Text>
        <Text style={styles.exitText}>Exit setup</Text>
      </View>
      <Text style={styles.title}>Specialty Pharmacy</Text>
      <View style={styles.loadingBox}>
        <Image 
          source={{ uri: 'https://path-to-icon.png' }} 
          style={styles.icon} 
        />
        <Text style={styles.loadingText}>Uploading insurance details</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF9F4',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exitText: {
    fontSize: 14,
    color: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002677',
    marginBottom: 20,
  },
  loadingBox: {
    width: 273,
    height: 167,
    backgroundColor: '#D9F6FA',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    gap: 8,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 16,
  },
  loadingText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#002677',
  },
});

export default LoadingScreen;
