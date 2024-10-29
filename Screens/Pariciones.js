import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Alert, Image, Button} from 'react-native';
import { doc, setDoc, addDoc, collection } from "firebase/firestore"; 
import { db } from '../components/config';

const Pariciones = () => {
    const [Cantidad, setCant] = useState('');
    const [Estado, setEst] = useState('');
    const [Fecha, setFecha] = useState('');
    const [Genero, setGene] = useState('');
    const [ModoNac, setMN] = useState('');
    const [NumArete, setNumAre] = useState('');
    const [TipoGanado, setTipoG] = useState('');
  
    function create () {
      //submit data
      addDoc(collection(db, "Pariciones"), {
        Cantidad: Cantidad,
        Estado: Estado,
        Fecha: Fecha,
        Genero: Genero,
        ModoNac: ModoNac,
        NumArete: NumArete,
        TipoGanado: TipoGanado,
      }).then(() => {
        Alert.alert('Datos Guardados correctamente');
        console.log('Datos Guardados');
      }).catch((error) => {
        console.log(error);
      })
    }
  
    return (
      <View style={styles.container}>
        <Image source={require('../assets/pariciones.jpg')} style={[
          styles.backgroundImage,
          {
            opacity: 0.5, // ajusta la opacidad de la imagen
            blurRadius: 10, // ajusta el radio de difuminado
          },
        ]}/>
        <ScrollView>
        <Text style={styles.texto1}>Registro de Pariciones</Text>
        <View>
          <Text value={Cantidad} onChangeText={(Cantidad) => {setCant(Cantidad)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Cantidad: </Text>
          <TextInput style={styles.input} placeholder='Ingresa los datos' required keyboardType="numeric"/>
        </View>
        <View>
          <Text value={Estado} onChangeText={(Estado) => {setEst(Estado)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Estado: </Text>
          <TextInput style={styles.input} placeholder='Ingresa los datos' required keyboardType="datetime"/>
        </View>
        <View>
          <Text value={Fecha} onChangeText={(Fecha) => {setFecha(Fecha)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Fecha: </Text>
          <TextInput style={styles.input} placeholder='Ingresa los datos' required/>
        </View>
        <View>
          <Text value={NumArete} onChangeText={(NumArete) => {setNumAre(NumArete)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Numero de arete: </Text>
          <TextInput style={styles.input} placeholder='Ingresa los datos' required keyboardType="numeric"/>
        </View>
        <View>
          <Text value={Genero} onChangeText={(Genero) => {setGene(Genero)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Genero: </Text>
          <TextInput style={styles.input} placeholder='Ingresa los datos' required/>
        </View>
        <View>
          <Text value={ModoNac} onChangeText={(ModoNac) => {setMN(ModoNac)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Modo de nacimiento: </Text>
          <TextInput style={styles.input} placeholder='Ingresa los datos' required/>
        </View>
        <View>
          <Text value={TipoGanado} onChangeText={(TipoGanado) => {setTipoG(TipoGanado)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Tipo de ganado: </Text>
          <TextInput style={styles.input}  placeholder='Ingresa los datos' required/>
        </View>
        <TouchableOpacity onPress={create} style={styles.button}>
          <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Guardar</Text>
        </TouchableOpacity>
        <Button onPress={create} style={styles.button} title='Guardar'/>
        </ScrollView>
      </View>
  )
}

export default Pariciones;

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

