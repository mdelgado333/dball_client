import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CardioScreen() {
    return (
        <SafeAreaView>
            <Pressable onPress={()=>router.navigate('/(tabs)/today')}>
                <Text>
                    Cursos de Cardio
                </Text>
            </Pressable>
            <Pressable onPress={()=>router.navigate('/(tabs)/profile')}>
                <Text>
                    Entrenamientos de Cardio
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}