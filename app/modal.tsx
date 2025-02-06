import { Link, router} from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function ModalScreen() {

    const isPresented = router.canGoBack();

  return (
    <View style={styles.container}>
      <Text>Prueba DBALL gratis</Text>
      
      <View>
        <View style={styles.listItem}>
          <Icon name="check" size={20} color="#000"/>
          <Text>Desbloquea toda la biblioteca de DBALL</Text>
        </View>
        <View style={styles.listItem}>
          <Icon name="check" size={20} color="#000"/>
          <Text>Desbloquea todos los entrenamientos</Text>
        </View>
        <View style={styles.listItem}>
          <Icon name="check" size={20} color="#000"/>
          <Text>Desbloquea todos los cursos</Text>
        </View>
        <View style={styles.listItem}>
          <Icon name="check" size={20} color="#000"/>
          <Text>Desbloquea la IA de tiro</Text>
        </View>
      </View>

      <View>
        <Pressable style={styles.pressable}>
          <View style={styles.cosa}>
            <Text>
              Anual
            </Text>
            <Text>
              Mejor oferta (-61,3%)
            </Text>
          </View>
          <Text>
            59,90€ (4,99€/mes) después de 7 días de prueba
          </Text>
        </Pressable>
        <Pressable style={styles.pressable}>
        <View style={styles.cosa}>
            <Text>
              Trimestral
            </Text>
            <Text>
              Más Popular (-23,66%)
            </Text>
          </View>
          <Text>
            29,97€(9,99/mes) después de 7 días de prueba
          </Text>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Text>
            Mensual
          </Text>
          <Text>
            12,90€/mes después de 7 días de prueba
          </Text>
        </Pressable>
      </View>

      <View style={styles.letraPequeña}>
        <Link href="/">
          Restaurar compra
        </Link>
        <Text> · </Text>
        <Link href="/">
        Términos y condiciones
        </Link>
      </View>
      {isPresented && <Link href="../">No me interesa</Link>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letraPequeña: {
    alignItems: "center",
    flexDirection: "row",
  },
  listItem: {
    flexDirection: "row"
  },
  pressables: {
    flex: 1,
    flexDirection: "column"

  },
  cosa: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  pressable: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  }
});