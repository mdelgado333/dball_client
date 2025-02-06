import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import React from 'react';

export default function indexScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Welcome!' }} />
      <View style={styles.container}>
        <Link href="/(tabs)/(explore)" style={styles.button}>
          Go to Tabs!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});