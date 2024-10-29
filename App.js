import React, { useState } from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Alert} from 'react-native';
import { BlurView } from 'expo-blur';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { doc, setDoc, addDoc, collection } from "firebase/firestore"; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { db } from './components/config';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import GanadoOvino from './Screens/GanadoOvino';
import GanadoPorcino from './Screens/GanadoPorcino';
import Pariciones from './Screens/Pariciones';
import Tratamientos from './Screens/Pariciones';


const uri = 'https://s1.1zoom.me/b5143/219/Germany_Grasslands_Cow_Cologne_535516_1080x1920.jpg'
const profilePicture = 'https://cdn-icons-png.flaticon.com/512/190/190683.png'


function HomeScreen() {
  const [numarete, setArete] = useState('');
  const [descripcion, setDescrip] = useState('');
  const [fechanac, setFecha] = useState('');
  const [peso, setPeso] = useState('');
  const [razaclase, setRaza] = useState('');
  const [genero, setGenero] = useState('');
  const [tipoganado, setTipo] = useState('');

  function create () {
    //submit data
    addDoc(collection(db, "GanadoBovino"), {
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
    });
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/vaca20.jpg')} style={[
          styles.backgroundImage,
          {
            opacity: 0.5, // ajusta la opacidad de la imagen
            blurRadius: 10, // ajusta el radio de difuminado
          },
        ]}/>
      <ScrollView>
      <Text>Lizette</Text>
      <Text style={styles.texto1}>Registro de Ganado Bovino</Text>
      <View>
        <Text value={numarete} onChangeText={(numarete) => {setArete(numarete)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Número de arete: </Text>
        <TextInput style={styles.input2} placeholder='Ingresa los datos' keyboardType="numeric"/>
      </View>
      <View>
        <Text value={descripcion} onChangeText={(descripcion) => {setDescrip(descripcion)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Descripción: </Text>
        <TextInput style={styles.input2} placeholder='Ingresa los datos'/>
      </View>
      <View>
        <Text value={fechanac} onChangeText={(fechanac) => {setFecha(fechanac)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Fecha de nacimiento: </Text>
        <TextInput style={styles.input2} placeholder='Ingresa los datos'/>
      </View>
      <View>
        <Text value={peso} onChangeText={(peso) => {setPeso(peso)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Peso: </Text>
        <TextInput style={styles.input2} placeholder='Ingresa los datos'/>
      </View>
      <View>
        <Text value={razaclase} onChangeText={(razaclase) => {setRaza(razaclase)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Raza o clase: </Text>
        <TextInput style={styles.input2} placeholder='Ingresa los datos'/>
      </View>
      <View>
        <Text value={genero} onChangeText={(genero) => {setGenero(genero)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Genero: </Text>
        <TextInput style={styles.input2} placeholder='Ingresa los datos'/>
      </View>
      <View>
        <Text value={tipoganado} onChangeText={(tipoganado) => {setTipo(tipoganado)}} style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Tipo de ganado: </Text>
        <TextInput style={styles.input2}  placeholder='Ingresa los datos' />
      </View>
      <TouchableOpacity onPress={create} style={styles.button2}>
        <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Guardar</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

function LoginScreen() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //console.log('Account created!')
      const user = userCredential.user;
      console.log (user)
      Alert.alert('Cuenta creada exitosamente');
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message )
    })
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Signed in!')
      const user = userCredential.user;
      console.log (user)
      Alert.alert('Iniciando sesión...');
      navigation.navigate('Home')
    })
    .catch(error => {
      console.log(error)
      Alert.alert('El usuario no existe');
    })
  }

  return (
    <View style={styles.container}>
    <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]}/>
    <ScrollView contentContainerStyle= {{
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <BlurView intensity={90}>
        <View style={styles.login}>
          <Image source={{ uri: profilePicture}} style={styles.profilePicture}/>
          <View>
            <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>E-mail: </Text>
            <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='bopcontrol94@gmail.com' keyboardType='email-address'/>
          </View>
          <View>
            <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Contraseña: </Text>
            <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder='password' secureTextEntry={true}/>
          </View>
          <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCreateAccount} style={styles.button}>
            <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </ScrollView>
  </View>
  )
}



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

/*function Home2() {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Pariciones" component={Pariciones} />
        <Drawer.Screen name="Tratamientos" component={Tratamientos} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}*/

function Home() {
  return (
    <Tab.Navigator
  screenOptions={{
    tabBarActiveTintColor: '#0B9B47',
    tabBarInactiveTintColor: '#ccc',
    tabBarLabelStyle: {
      fontSize: 14,
      fontFamily: 'Arial',
    },
    tabBarStyle: {
      width: '100%',
      overflow: 'scroll',
    },
  }}>
  <Tab.Screen name="Bovino" component={HomeScreen} 
    options={{ 
      headerShown: false,
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="cow" size={30} color="black" />
      ),
    }}/>
  <Tab.Screen name="Ovino" component={GanadoOvino} 
    options={{ 
      headerShown: false,
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="sheep" size={30} color="black" />
      ),
    }}/>
  <Tab.Screen name="Porcino" component={GanadoPorcino} 
    options={{ 
      headerShown: false,
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="pig" size={30} color="black" />
      ),
    }}/>
  <Tab.Screen name="Pariciones" component={Pariciones} 
    options={{ 
      headerShown: false,
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="cradle-outline" size={30} color="black" />
      ),
    }}/>
</Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" style={styles.texto}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//<View style={{width: 100, height: 100, backgroundColor: 'green', position: 'absolute'}}></View>
const styles = StyleSheet.create({
  container: {
    flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  login: {
    width: 300,
    height: 500,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#000000',
    borderWidth: 2,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20, 
  },
  input2: {
    width: 300,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginVertical: 20,
    fontSize: 18,
    fontWeight: '900',
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#00CFEB90',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#000000',
    borderWidth: 2,
  },
  button2: {
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
    alignItems: 'center',
    justifyContent: 'center',
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

