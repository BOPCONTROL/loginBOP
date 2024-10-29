import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Alert, Image} from 'react-native';
import { doc, setDoc, addDoc, collection } from "firebase/firestore"; 
import { db } from '../components/config';

const GanadoOvino = () => {
    const [numarete, setArete] = useState('');
    const [descripcion, setDescrip] = useState('');
    const [fechanac, setFecha] = useState('');
    const [peso, setPeso] = useState('');
    const [razaclase, setRaza] = useState('');
    const [genero, setGenero] = useState('');
    const [tipoganado, setTipo] = useState('');
  
    function create () {
      //submit data
      addDoc(collection(db, "GanadoOvino"), {
        Descripcion: descripcion,
        FechaNac: fechanac,
        Genero: genero,
        NumArete: numarete,
        Peso: peso,
        RazaClase: razaclase,
        TipoGanado: tipoganado,
      }).then(() => {
        Alert.alert('Datos Guardados correctamente');
        console.log('Datos Guardados');
      }).catch((error) => {
        console.log(error);
      })
    }
  
    return (
      <View style={styles.container}>
        <Image source={require('../assets/borrego12.jpg')} style={[
          styles.backgroundImage,
          {
            opacity: 0.5, // ajusta la opacidad de la imagen
            blurRadius: 10, // ajusta el radio de difuminado
          },
        ]}/>
        <ScrollView>
        <Text style={styles.texto1}>Registro de Ganado Ovino</Text>
        <View>
          <Text value={numarete} onChangeText={(numarete) => {setArete(numarete)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Número de arete: </Text>
          <TextInput style={styles.input} placeholder='Ingresa los datos' required keyboardType="numeric"/>
        </View>
        <View>
          <Text value={descripcion} onChangeText={(descripcion) => {setDescrip(descripcion)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Descripción: </Text>
          <TextInput style={styles.input} placeholder='Ingresa los datos' required/>
        </View>
        <View>
          <Text value={fechanac} onChangeText={(fechanac) => {setFecha(fechanac)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Fecha de nacimiento: </Text>
          <TextInput style={styles.input} placeholder='Ingresa los datos' required/>
        </View>
        <View>
          <Text value={peso} onChangeText={(peso) => {setPeso(peso)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Peso: </Text>
          <TextInput style={styles.input} placeholder='Ingresa los datos' required/>
        </View>
        <View>
          <Text value={razaclase} onChangeText={(razaclase) => {setRaza(razaclase)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Raza o clase: </Text>
          <TextInput style={styles.input} placeholder='Ingresa los datos' required/>
        </View>
        <View>
          <Text value={genero} onChangeText={(genero) => {setGenero(genero)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Genero: </Text>
          <TextInput style={styles.input} placeholder='Ingresa los datos' required/>
        </View>
        <View>
          <Text value={tipoganado} onChangeText={(tipoganado) => {setTipo(tipoganado)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Tipo de ganado: </Text>
          <TextInput style={styles.input}  placeholder='Ingresa los datos' required/>
        </View>
        <TouchableOpacity onPress={create} style={styles.button}>
          <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Guardar</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    )
}

export default GanadoOvino

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 300,
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
      padding: 15,
      marginVertical: 20,
      fontSize: 18,
    },
    button: {
      width: 300,
      height: 50,
      borderRadius: 10,
      backgroundColor: '#4CAF50',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
      fontSize: 18,
      color: '#fff',
    },
    texto: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      padding: 10,
    },
    texto1:{
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      padding: 10,
    },
    backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // ajusta el tamaño de la imagen
    },
  });
  
  