import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(course)" options={{ headerShown: true }} />
      <Stack.Screen name="(workout)" options={{ headerShown: true }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}