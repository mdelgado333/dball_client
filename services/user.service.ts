import API from './api.service';

class UserService {
  // Get all users
  getAllUsers = () => {
    return API.get('/users');
  };

  // Get a specific user by ID
  getUserById = (userId: any) => {
    return API.get(`/users/${userId}`);
  };

  // Update user info
  updateUser = (userId: any, userData: any) => {
    return API.patch(`/users/${userId}`, userData);
  };
}

export default new UserService();  // Export a single instance of UserService
