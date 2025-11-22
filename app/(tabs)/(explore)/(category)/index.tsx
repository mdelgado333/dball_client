import { router, useLocalSearchParams } from "expo-router";
import React, {useState} from 'react';
import { View, Text, Pressable, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const categoryTitles = {
    SHOOTING: "tiro",
    DRIBBLING: "bote",
    FINISHING: "finalización",
    ISO: "1v1",
    POST: "poste",
    LOWER: "tren inferior",
    CARDIO: "cardio",
    UPPER: "tren superior"
}

const categoryPaths = {
    courses: "/(courses)/(category)",
    cycles: "/(cycles)/(category)"
  }

export default function CategoryScreen() {

    const { category } = useLocalSearchParams()
    const categoryKey = category as keyof typeof categoryTitles;
    const [isRecentOrFeatured, setIsRecentOrFeatured] = useState('recent');
    const navigateTo = (path: keyof typeof categoryPaths) => router.push({ pathname: `/(${path})/(category)`, params: { category } })
    

    return (
        <SafeAreaView edges={['top', 'left', 'right']} >
            <View>
                <View style={styles.containerLargeBubbles}>
                    <Pressable style={styles.largeBubble} onPress={()=>navigateTo("courses")}>
                        <Text>
                            { `Cursos de ${categoryTitles[categoryKey] }` }
                        </Text>
                    </Pressable>
                    <Pressable style={styles.largeBubble} onPress={()=>navigateTo("cycles")}>
                        <Text>
                            { `Entrenamientos de ${categoryTitles[categoryKey] }` }
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.recientesDestacados}>

                    <Pressable
                    onPress={() => setIsRecentOrFeatured('recent')}
                    style={styles.pressables}>
                        <Text>
                            recientes
                        </Text>
                    </Pressable>

                    <Pressable 
                    onPress={() => setIsRecentOrFeatured('featured')}
                    style={styles.pressables}>
                        <Text>
                            destacados
                        </Text>
                    </Pressable>
                </View>
                    {isRecentOrFeatured == 'recent' && (
                        <View>
                            <Text>
                                recientes
                            </Text>
                        </View>
                    )}
                    {isRecentOrFeatured == 'featured' && (
                        <View>
                            <Text>
                                destacados
                            </Text>
                        </View>
                    )}
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

    },
    containerLargeBubbles:{
        padding: 10,
        height: 150,
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    largeBubble: {
        padding: 20,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 10,
    }
})