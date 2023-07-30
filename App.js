import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Navigation } from './src/Pages/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
