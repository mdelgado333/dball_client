import { router } from "expo-router";
import { Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PostScreen() {
    return (
        <SafeAreaView edges={['top', 'left', 'right']} >
            <Pressable onPress={()=>router.navigate('/(tabs)/today')}>
                <Text>
                    Cursos de Poste
                </Text>
            </Pressable>
            <Pressable onPress={()=>router.navigate('/(tabs)/profile')}>
                <Text>
                    Entrenamientos de Poste
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}

