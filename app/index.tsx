import { View, StyleSheet, Text, TextInput, Button, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Link, Stack } from 'expo-router';
import React, {useState} from 'react';
import Swiper from "react-native-swiper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../services/auth.service'
import { AxiosError } from 'axios'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function indexScreen() {

  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isRepeatedPasswordVisible, setIsRepeatedPasswordVisible] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Por favor, ingresa un correo electrónico válido.');
      return;
    }

    if (isRegistering && password !== repeatedPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    setLoading(true); // Start loading

    try {
      const userData = { email, password };
      let response;

      if (isRegistering) {
        response = await AuthService.register(userData);  // Register the user
      } else {
        response = await AuthService.login(userData);     // Log in the user
      }

      
      console.log('Login response:', response);

      if (response?.data?.token) {
        await AsyncStorage.setItem('authToken', response.data.token);
        router.replace('/(tabs)/(explore)');
      } else {
        throw new Error('No token received from server');
      }
      } catch (error) {
        // Type the error as AxiosError to access the response data
        const axiosError = error as AxiosError;

        console.error('Login error:', axiosError);

      
        let errorMessage = 'Something went wrong. Please try again.';

        if (axiosError.response?.data) {
          const errorData = axiosError.response.data;

          if (typeof errorData === 'object' && errorData !== null) {

            if ('message' in errorData) {
              errorMessage = (errorData as { message: string }).message;
            }
          } else if (typeof errorData === 'string') {
            errorMessage = errorData;
          }
        }

      Alert.alert('Error', errorMessage, [
        {
          text: 'OK',
          onPress: () => setLoading(false), // Set loading to false after the user presses OK
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        <Swiper
        style={styles.wrapper}
        loop={false}
        showsPagination={currentIndex !== 3}
        onIndexChanged={(index) => setCurrentIndex(index)}
        >

      {/* Slide 1 */}
      <View style={styles.slide}>
        <Text style={styles.title}>⭐️ Conviértete en anotador de elite</Text>
        <Text style={styles.description}>Gracias a nuestra metodlogía de entrenamiento serás capaz de dominar los 5 niveles de anotación:</Text>
        <View style={styles.list}>
        <Text>✅ Finalización</Text>
        <Text>✅ Media distancia</Text>
        <Text>✅ Triple</Text>
        <Text>✅ Poste</Text>
        <Text>✅ Iso</Text>
        </View>
      </View>

      {/* Slide 2 */}
      <View style={styles.slide}>
        <Text style={styles.title}>👨🏻‍🏫 Domina cualquier habilidad</Text>
        <Text style={styles.description}>Aprende cualquier habilidad, desde los fundamentos de la mecánica de tiro a un movimiento más complicado con todas sus variantes, nuestra metodología de enseñanza te llevará de 0 a 100 en cualquier área:</Text>
        <View style={styles.list}>
          <Text>✅ Bote</Text>
          <Text>✅ Tiro</Text>
          <Text>✅ Finalización</Text>
          <Text>✅ Movimientos</Text>
        </View>
      </View>
      
      {/* Slide 3 */}
      <View style={styles.slide}>
        <Text style={styles.title}>💪🏻 Transforma tu físico</Text>
        <Text style={styles.description}>Dar el salto al siguiente nivel no siempre es un tema de habilidad... A través de nuestros entrenamientos podrás mejorar en todos estos aspectos:</Text>
        <View style={styles.list}>
          <Text>✅ Fuerza y explosividad para mayor salto vertical</Text>
          <Text>✅ Velocidad y cambios de ritmo para mejor rendimiento</Text>
          <Text>✅ Hipertrofia de tren superior para aguantar el contacto</Text>
          <Text>✅ Cardio para jugar más minutos mejor</Text>
        </View>
      </View>

      {/* Login/Register Form (Slide 4) */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>{isRegistering ? 'Registrar' : 'Iniciar sesión'}</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none" 
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.ti}
            placeholder="Contraseña"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.to}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Ionicons
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="gray"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        {isRegistering && (
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.ti}
            placeholder="Confirmar Contraseña"
            secureTextEntry={!isRepeatedPasswordVisible}
            value={repeatedPassword}
            onChangeText={setRepeatedPassword}
          />
          <TouchableOpacity
          style={styles.to}
          onPress={() => setIsRepeatedPasswordVisible(!isRepeatedPasswordVisible)}>
            <Ionicons
              name={isRepeatedPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="gray"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      )}

        <Button title={isRegistering ? 'Registrar' : 'Iniciar sesión'} onPress={handleSubmit} disabled={loading}/>
        {loading && <ActivityIndicator size="large" color="#0000ff" />}

        <Text
          style={styles.switchText}
          onPress={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? 'Ya tienes una cuenta? Inicia sesión' : 'No tienes una cuenta? Regístrate'}
        </Text>
      </View>


    </Swiper>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  wrapper: {},
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  switchText: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
  list: {
    width: 300,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  to: {
    width: 50,
    justifyContent: 'center'
  },
  ti: {
    width: 200
  }
});