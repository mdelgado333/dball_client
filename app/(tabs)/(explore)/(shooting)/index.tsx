import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ShootingScreen() {
    return (
        <SafeAreaView edges={['top', 'left', 'right']} >
            <Pressable onPress={()=>router.navigate('/(course)')}>
                <Text>
                    Cursos de Tiro
                </Text>
            </Pressable>
            <Pressable onPress={()=>router.navigate('/(workout)')}>
                <Text>
                    Entrenamientos de tiro
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}

