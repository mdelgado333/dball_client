import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import CycleService from "../../../services/cycle.service"; // Adjust path if needed

interface Cycle {
    _id: string;
    info: {
        title: string;
        subtitle: string;
        description: string;
    };
}

const categoryTitles = {
    SHOOTING: "tiro",
    DRIBBLING: "bote",
    FINISHING: "finalización",
    ISO: "1v1",
    POST: "poste",
    LOWER: "tren inferior",
    CARDIO: "cardio",
    UPPER: "tren superior"
};

export default function CategoryScreen() {
    const { category } = useLocalSearchParams();
    const categoryKey = category as keyof typeof categoryTitles;
    
    const [cycles, setCycles] = useState()
    useEffect(() => {
        loadCycles()
        console.log('Empieza aqui: ',category)
    }, [])

    const loadCycles = () => {
        CycleService.getAllCycles()
            .then(({ data }) => {
                console.log("Fetched cycles: ", data)
                console.log(data.cycles)
                const filteredCycles = data.cycles.filter((cycle:any) => cycle.dballInfo.typeOfContent === category )
                console.log(`${category} cycles`)
                console.log(filteredCycles)
                setCycles(filteredCycles)
                console.log()
            })
            .catch(err => {
                console.log("Error fetching cycles: ", err);
            });
    };

    return (
        <SafeAreaView >
                    <View>
                    <Text style={styles.title}>
                        {`Entrenamientos de ${categoryTitles[categoryKey]}`}
                    </Text>
                    
                    <FlatList
                        data={cycles}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => (
                            <View style={styles.workoutItem}>
                                <Pressable onPress={() => router.push({pathname: '/(cycles)/(category)/(cycle)', params: {cycleId: item._id}})}>
                                    <Text>
                                        {item.info.title}
                                    </Text>
                                </Pressable>
                            </View>
                        )}
                    />
                    </View>
                </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    workoutItem: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        width: '100%'
    }
});
