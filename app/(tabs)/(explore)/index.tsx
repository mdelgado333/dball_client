import { Link, router } from 'expo-router';
import React, {useState} from 'react';
import { Pressable, Text, TextInput, View, StyleSheet, ScrollView } from "react-native";
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExploreScreen() {
  const [text, setText] = useState('');
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.page}>
      <View style={styles.searchSection}>
      <Icon style={styles.searchIcon} name="search" size={20} color="#000"/>
      <TextInput
        style={styles.input}
        placeholder="Busca entrenamientos o tutoriales"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      </View>
      <ScrollView style={styles.contentSection}>
        <View style={styles.container}>
          <Pressable onPress={()=>router.navigate('/(tabs)/(explore)/(shooting)')} style={styles.item}>
            <Text>
              Tiro
            </Text>
          </Pressable>
          <Pressable onPress={()=>router.navigate('/(tabs)/(explore)/(dribbling)')} style={styles.item}>
            <Text>
              Bote
            </Text>
          </Pressable>
          <Pressable onPress={()=>router.navigate('/(tabs)/(explore)/(iso)')} style={styles.item}>
            <Text>
              1v1
            </Text>
          </Pressable>
          <Pressable onPress={()=>router.navigate('/(tabs)/(explore)/(finishing)')} style={styles.item}>
            <Text>
              Finalización
            </Text>
          </Pressable>
          <Pressable onPress={()=>router.navigate('/(tabs)/(explore)/(post)')} style={styles.item}>
            <Text>
              Poste
            </Text>
          </Pressable>
          <Pressable onPress={()=>router.navigate('/(tabs)/(explore)/(lower)')} style={styles.item}>
            <Text>
              Tren Inferior
            </Text>
          </Pressable>
          <Pressable onPress={()=>router.navigate('/(tabs)/(explore)/(cardio)')} style={styles.item}>
            <Text>
              Cardio
            </Text>
          </Pressable>
          <Pressable onPress={()=>router.navigate('/(tabs)/(explore)/(upper)')} style={styles.item}>
            <Text>
              Tren superior
            </Text>
          </Pressable>
        </View>
        <View style={styles.subscriptionBanner}>
          <Text>
            Desbloquea todo tu potencial
          </Text>
          <Pressable onPress={()=> router.navigate("/modal")}>
              <Text>Empieza tu prueba gratuita</Text>
            </Pressable>
        </View>
        <View>
          <Pressable style={styles.largeItems}>
            <Text>
              Shooting Bible
            </Text>
            <Text>
              Aprende de 0 o perfecciona la mecánica de tiro paso a paso
            </Text>
          </Pressable>
          <Pressable style={styles.largeItems}>
            <Text>
              Crossover Catalyst
            </Text>
            <Text >
              Construye una base sólida de fundamentos de bote para aprender a la perfección el crossover, así como distintos escenarios en los que utilizar todas sus variantes
            </Text>
          </Pressable>
          <Pressable style={styles.largeItems}>
            <Text>
              Hesi God
            </Text>
            <Text>
              Entiende a la perfección porque funciona la hesi para después poder amoldarla a las distintas formas de hacer una hesi, desde el mítico hesi pull-up hasta hesis más complicadas como la Segu Hesi
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
  searchSection: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "red",
  },
  contentSection: {
    flex: 1,
    width: '100%' ,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: '#fff'
  },
  text: {
    color: '#000',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    borderWidth: 1,
    borderRadius: 15
  },
  item: {
    width: '40%',
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    padding: 25,
    margin: 10

  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center', // if you want to fill rows left to right
    justifyContent: 'center',
    borderWidth: 1
  },
  subscriptionBanner: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  containerLargeItems: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center', // if you want to fill rows left to right
    justifyContent: 'center',
    borderWidth: 1
  },
  largeItems: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  titles: {
    
  },
  subTitles: {

  }

});