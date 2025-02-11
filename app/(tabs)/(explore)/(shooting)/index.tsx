import { router } from "expo-router";
import React, {useState} from 'react';
import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ShootingScreen() {
    const [booleanToggle, setBooleanToggle] = useState(true);
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
            <View>
                <View style={styles.recientesDestacados}>
                    <Pressable onPress={()=> setBooleanToggle(true)} style={styles.pressables}>
                        <Text>
                            recientes
                        </Text>
                    </Pressable>
                    <Pressable onPress={()=> setBooleanToggle(false)} style={styles.pressables}>
                        <Text>
                            destacados
                        </Text>
                    </Pressable>
                </View>
                <View>
                </View>
                <Pressable>

                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    recientesDestacados: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    pressables: {
        padding: 10,
        borderWidth: 1,

    }
})