# DBALL Client

A React Native mobile application built with Expo for basketball training and skill development. The app provides comprehensive training programs covering shooting techniques, physical conditioning, and skill mastery.

## 🏀 Features

- **Onboarding Experience**: Interactive swiper introduction to app features
- **User Authentication**: Secure login and registration system
- **Training Programs**: 
  - Courses for skill development (shooting, dribbling, finishing, movements)
  - Cycles for structured workout programs
  - Exercises for targeted training
  - Workouts for physical conditioning
- **Learning Modules**: Educational content and tutorials
- **User Profile**: Track progress and manage account
- **Today Tab**: Daily training recommendations
- **Explore Tab**: Browse available courses and training content

## 🛠 Tech Stack

- **Framework**: React Native with Expo (~52.0.35)
- **Routing**: Expo Router (file-based routing)
- **State Management**: React Hooks
- **HTTP Client**: Axios
- **Storage**: AsyncStorage for token persistence
- **Navigation**: React Navigation
- **UI Components**: 
  - Expo Vector Icons
  - React Native Elements
  - React Native Swiper
  - React Native Gesture Handler

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac) or Android Studio (for Android development)
- Expo Go app on your mobile device (for testing)

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dball_client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure API endpoint:
   
   Update the `baseURL` in `services/api.service.ts` with your server URL:
   ```typescript
   const API = axios.create({
     baseURL: "YOUR_API_URL/api",
     timeout: 5000,
   });
   ```

### Running the App

1. Start the Expo development server:
   ```bash
   npm start
   # or
   npx expo start
   ```

2. Choose your platform:
   - Press `i` to open iOS simulator
   - Press `a` to open Android emulator
   - Scan QR code with Expo Go app (iOS/Android)
   - Press `w` to open in web browser

### Development Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser
- `npm test` - Run tests
- `npm run lint` - Lint the codebase

## 📁 Project Structure

```
dball_client/
├── app/                    # App screens (file-based routing)
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── today.tsx      # Today tab
│   │   ├── profile.tsx    # Profile tab
│   │   └── (explore)/     # Explore tab
│   ├── (courses)/         # Course-related screens
│   ├── (cycles)/          # Cycle-related screens
│   ├── _layout.tsx        # Root layout
│   ├── index.tsx          # Onboarding/Login screen
│   └── modal.tsx          # Modal screens
├── assets/                # Images, fonts, and static assets
├── components/            # Reusable React components
├── context/               # React Context providers
├── services/              # API service layer
│   ├── api.service.ts     # Axios configuration
│   ├── auth.service.ts    # Authentication services
│   ├── course.service.ts  # Course API calls
│   ├── cycle.service.ts   # Cycle API calls
│   ├── exercise.service.ts
│   ├── learning.service.ts
│   ├── unit.service.ts
│   ├── user.service.ts
│   └── workout.service.ts
├── app.json               # Expo configuration
├── package.json           # Dependencies
└── tsconfig.json          # TypeScript configuration
```

## 🔐 Authentication

The app uses JWT-based authentication. Tokens are stored securely using AsyncStorage.

**Authentication Flow:**
1. User registers or logs in through the onboarding screen
2. JWT token is received from the server
3. Token is stored in AsyncStorage
4. Token is automatically attached to authenticated API requests

**Available Auth Methods:**
- `AuthService.register(userData)` - Register new user
- `AuthService.login(credentials)` - Login existing user
- `AuthService.logout()` - Clear stored token
- `AuthService.getProfile()` - Get user profile

## 🔌 API Configuration

The app communicates with a backend server. Configure the API base URL in `services/api.service.ts`:

```typescript
const API = axios.create({
  baseURL: "https://your-api-url.com/api",
  timeout: 5000,
});
```

For local development, you can use your local IP address:
```typescript
baseURL: "http://192.168.1.14:8080/api"
```

## 🎨 Key Features Explained

### Onboarding
- Interactive swiper with 3 feature slides
- Login/Register form on the 4th slide
- Smooth navigation between slides

### Navigation
- **Stack Navigation**: Handles screen transitions
- **Tab Navigation**: Bottom tabs for Today, Explore, and Profile
- **File-based Routing**: Expo Router automatically creates routes from file structure

### Service Layer
All API communication is centralized in the `services/` directory:
- Each service handles API calls for a specific domain
- Consistent error handling
- Token management

## 🐛 Troubleshooting

**Metro bundler issues:**
```bash
npx expo start --clear
```

**iOS build issues:**
```bash
cd ios
pod install
cd ..
```

**Android build issues:**
- Ensure Android SDK is properly configured
- Check that JAVA_HOME is set correctly

## 📝 Environment Setup

For production builds, ensure you have:
- Expo account (for EAS Build)
- Apple Developer account (for iOS)
- Google Play Console account (for Android)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly on iOS and Android
4. Submit a pull request




## 👤 Author

Miguel Delgado

---

Built with ❤️ using Expo and React Native
