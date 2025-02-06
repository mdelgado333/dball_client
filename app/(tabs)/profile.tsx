import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mike Delgado</Text>
      <Text>Te uniste en febrero de 2025</Text>
      <View>
        <Text>
          Estadísticas
        </Text>
        <View>
          <Icon name="clock" size={20} color="#000"/>
          <View>
            <Text>
              35 minutos
            </Text>
            <Text>
              Tiempo promedio diario entrenando y/o aprendiendo
            </Text>
          </View>
          <Icon name="check" size={20} color="#000"/>
          <View>
            <Text>
              23546 Minutos
            </Text>
            <Text>
              Tiempo entrenando y/o aprendiendo
            </Text>
          </View>
          <Icon name="check" size={20} color="#000"/>
          <View>
            <Text>
              253 Sesiones
            </Text>
            <Text>
              Entrenamientos y lecciones completadas con éxito
            </Text>
          </View>
          <Icon name="check" size={20} color="#000"/>
          <View>
            <Text>

            </Text>
            <Text>

            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text>

        </Text>
        <View>
        <Icon name="check" size={20} color="#000"/>
        <View>
          <Text>

          </Text>
          <Text>

          </Text>
        </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
  imageContainer: {
    height: 25,
    width: 25
  },
  profileImg: {
    resizeMode: "contain"
  }
});