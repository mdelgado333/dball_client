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

  deleteUser = (userId: any) => {
    return API.delete(`/users/${userId}`)
  }
}

export default new UserService()
