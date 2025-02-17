import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const categoryTitles = {
    shooting: "tiro",
    dribbling: "bote",
    finishing: "finalización",
    iso: "1v1",
    post: "poste",
    lower: "tren inferior",
    cardio: "cardio",
    upper: "tren superior"
}

export default function CoursesByCategoryScreen() {

    const { category } = useLocalSearchParams()
    const categoryKey = category as keyof typeof categoryTitles;
    

    return (
        <SafeAreaView style={styles.page}>
            <Text style={styles.text}>
                Estas en /(courses)/(coursesByCategory)
            </Text>
            <Text>
            { `Cursos de ${categoryTitles[categoryKey] }` }
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