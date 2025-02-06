import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FinishingScreen() {
    return (
        <SafeAreaView edges={['top', 'left', 'right']} >
            <Pressable onPress={()=>router.navigate('/(tabs)/today')}>
                <Text>
                    Cursos de Finalización
                </Text>
            </Pressable>
            <Pressable onPress={()=>router.navigate('/(tabs)/profile')}>
                <Text>
                    Entrenamientos de Finalización
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}