import { Stack } from "expo-router";

export default function CoursesByCategoryLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    )
}