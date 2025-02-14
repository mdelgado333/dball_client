import API from './api.service'; // Import the base Axios instance
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage for token

class AuthService {
  // Register a new user
  register = (userData: any) => {
    return API.post('/auth/register', userData);  // Endpoint for registration
  };

  // Log in an existing user
  login = (credentials: any) => {
    return API.post('/auth/login', credentials);  // Endpoint for login
  };

  // Logout user (clear token from AsyncStorage)
  logout = async () => {
    await AsyncStorage.removeItem('authToken');  // Remove token from AsyncStorage
  };

  // Get the logged-in user's profile
  getProfile = async () => {
    const token = await AsyncStorage.getItem('authToken');
    return API.get('/auth/profile', {
      headers: {
        Authorization: `Bearer ${token}`,  // Attach token for authorization
      },
    });
  };
}

export default new AuthService(); // Export a single instance of AuthService
