import 'react-native-gesture-handler'; // Ensure this is the first import
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../services/auth.service'; // Ensure your AuthService is imported
import { AxiosError } from 'axios'; // Import AxiosError to type the error correctly
import Swiper from 'react-native-swiper'; // Import the swiper component

const OnboardingScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login/register
  const [showForm, setShowForm] = useState(false); // To control when to show the form

  const handleSubmit = async () => {
    try {
      const userData = { email, password };
      let response;

      if (isRegistering) {
        response = await AuthService.register(userData);  // Register the user
      } else {
        response = await AuthService.login(userData);     // Log in the user
      }

      // Store the token in AsyncStorage
      await AsyncStorage.setItem('authToken', response.data.token);

      // Navigate to the main app screen (Tabs)
      navigation.replace('(tabs)');
    } catch (error) {
      // Type the error as AxiosError to access the response data
      const axiosError = error as AxiosError;

      // Default error message
      let errorMessage = 'Something went wrong. Please try again.';

      // Safely check the structure of axiosError.response?.data
      if (axiosError.response?.data) {
        const errorData = axiosError.response.data;

        // Check if errorData is an object and has a 'message' property
        if (typeof errorData === 'object' && errorData !== null) {
          // If it's an object and has a 'message' property, use that
          if ('message' in errorData) {
            errorMessage = (errorData as { message: string }).message;
          }
        } else if (typeof errorData === 'string') {
          // If it's just a string, use it directly as the error message
          errorMessage = errorData;
        }
      }

      // Show the alert with the error message
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.swiper}
        loop={false}
        showsPagination={true}
        onIndexChanged={(index) => {
          if (index === 2) {
            setShowForm(true); // Show form when reaching last slide
          }
        }}
      >
        {/* Slide 1 */}
        <View style={styles.slide}>
          <Text style={styles.title}>Become an Elite Scorer</Text>
          <Text style={styles.description}>Master finishing, mid-range, 3PT, and post moves with our workout cycles!</Text>
        </View>

        {/* Slide 2 */}
        <View style={styles.slide}>
          <Text style={styles.title}>Master Basketball Skills</Text>
          <Text style={styles.description}>Learn everything, from basic shots to complex moves, with our courses!</Text>
        </View>

        {/* Slide 3 */}
        <View style={styles.slide}>
          <Text style={styles.title}>Transform Your Physique</Text>
          <Text style={styles.description}>Build explosive lower body strength, upper body hypertrophy, and cardio for elite performance!</Text>
        </View>

        {/* Login/Register Form (Slide 4) */}
        {showForm && (
          <View style={styles.formContainer}>
            <Text style={styles.title}>{isRegistering ? 'Register' : 'Login'}</Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Button title={isRegistering ? 'Register' : 'Login'} onPress={handleSubmit} />

            <Text
              style={styles.switchText}
              onPress={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
            </Text>
          </View>
        )}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  swiper: {
    flex: 1,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  switchText: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
});

export default OnboardingScreen;
