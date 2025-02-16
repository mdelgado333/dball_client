import API from './api.service'
import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthService {
  // Register a new user
  register = (userData: any) => {
    return API.post('/auth/register', userData)
  };

  // Log in an existing user
  login = (credentials: any) => {
    return API.post('/auth/login', credentials)
  };

  logout = async () => {
    await AsyncStorage.removeItem('authToken')
  };

  getProfile = async () => {
    const token = await AsyncStorage.getItem('authToken')
    return API.get('/auth/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
}

export default new AuthService(); // Export a single instance of AuthService
