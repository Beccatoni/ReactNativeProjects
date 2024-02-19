import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Card = ({ image, title, description }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}; // Added the missing curly brace

const Header = () => {
  return (
    <View style={styles.header}>
      <Ionicons name="arrow-back" size={24} />
    </View>
  );
};

const Monday = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* Placeholder and Navigation components need to be defined */}
    </View>
  );
};

const styles = StyleSheet.create({ // Corrected the typo in StyleSheet.create
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    // Add styles for your card component
  },
  image: {
    // Add styles for your image component
  },
  content: {
    // Add styles for your content component
  },
  header: {
    // Add styles for your header component
  },
});

export default Monday; // Removed the duplicate export statement
