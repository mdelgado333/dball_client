import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import CycleService from "../../../../services/cycle.service";

interface Workout {
    _id: string;
    name: string;
    description: string;
}

interface Cycle {
    _id: string;
    info: {
        title: string;
        subtitle: string;
        description: string;
    };
    workouts: Workout[];
}

export default function CycleScreen() {
    const { cycleId } = useLocalSearchParams();
    
    const [cycle, setCycle] = useState<Cycle | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadCycle();
    }, [cycleId]);

    const loadCycle = () => {
        setLoading(true);
        CycleService.getCycleById(cycleId)
            .then(({ data }) => {
                console.log("Fetched cycle: ", data);
                setCycle(data);
            })
            .catch(err => {
                console.log("Error fetching cycle: ", err);
            })
            .finally(() => setLoading(false));
    };

    if (loading) {
        return (
            <SafeAreaView style={styles.page}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    if (!cycle) {
        return (
            <SafeAreaView style={styles.page}>
                <Text>Error: Cycle not found!</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.page}>
            <Text style={styles.title}>{cycle.info.title}</Text>
            <Text>{cycle.info.subtitle}</Text>
            <Text>{cycle.info.description}</Text>

            {/* Display Workouts */}
            <FlatList
                data={cycle.workouts}  // Now using cycle.workouts as the data
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.workoutItem}>
                        <Text>{item.name}</Text>
                        <Text>{item.description}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: {
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    workoutItem: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        width: "100%",
    },
});
