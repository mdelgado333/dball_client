import { Stack } from 'expo-router';

export default function DribblingLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
    </Stack>
  );
}