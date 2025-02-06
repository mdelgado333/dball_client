import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";

export default function WorkoutScreen() {
    return (
        <SafeAreaView style={styles.page}>
            <Text style={styles.text}>
                estás en /workouts
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1
      },
      text: {
        color: '#000',
      },
})