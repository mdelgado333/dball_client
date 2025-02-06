import { Stack } from 'expo-router';

export default function Layout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}/>
        <Stack.Screen name="(shooting)" options={{ headerShown: false }}/>
        <Stack.Screen name="(dribbling)" options={{ headerShown: false }}/>
        <Stack.Screen name="(iso)" options={{ headerShown: false }}/>
        <Stack.Screen name="(finishing)" options={{ headerShown: false }}/>
        <Stack.Screen name="(post)" options={{ headerShown: false }}/>
        <Stack.Screen name="(lower)" options={{ headerShown: false }}/>
        <Stack.Screen name="(cardio)" options={{ headerShown: false }}/>
        <Stack.Screen name="(upper)" options={{ headerShown: false }}/>
      </Stack>
  );
}