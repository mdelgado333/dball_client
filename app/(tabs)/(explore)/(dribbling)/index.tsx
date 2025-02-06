import { router } from "expo-router";
import { Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DribblingScreen() {
    return (
        <SafeAreaView>
            <Pressable onPress={()=>router.navigate('/(tabs)/today')}>
                <Text>
                    Cursos de Bote
                </Text>
            </Pressable>
            <Pressable onPress={()=>router.navigate('/(tabs)/profile')}>
                <Text>
                    Entrenamientos de Bote
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}