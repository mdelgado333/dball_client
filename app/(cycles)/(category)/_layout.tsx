import { Stack } from "expo-router";

export default function CyclesByCategoryLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
            <Stack.Screen name="(cycle)" options={{ headerShown: false }}/>
        </Stack>
    )
}