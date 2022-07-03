import { onAuthStateChanged } from "firebase/auth";
import Reactm, {useState, useEffect} from "react";
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { auth, login, register } from "../firebase";
  
const AuthScreen = ({navigation}) => {
    const [onPress, setOnPress] = useState(false)
    const [onPress2, setOnPress2] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Аутентификация
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        if(user){
            navigation.navigate("Home")
        }
      }

    useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged)
     // unsubscribe on unmount
  });

    return (
        <View style={{flex: 1,flexDirection: 'row',  width: '100%', backgroundColor: '#f0f0f0', justifyContent: 'space-around', marginBottom: 80, alignItems: 'center'}}>
            <View style={{flex: 1, alignItems: 'center', }}>
                <View style={styles.inputContainer}>
                    <TextInput 
                    style={styles.authInput}
                    placeholder="enter email"
                    value={email}
                    onChangeText = {text => setEmail(text)}
                    />
                    <TextInput 
                    style={styles.authInput}
                    placeholder="password" secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity 
                    // onPressIn={() =>  {setOnPress(true) }} 
                    // onPressOut={() => {setOnPress(false)}}
                    onPress={()=> {
                        console.log(email, password)
                        register(email, password)
                    }} 
                    activeOpacity={0.4} 
                    style={!onPress ? styles.btnRegistration : styles.btnLogin}>
                        <Text style={{color: !onPress? "#fff" : "#ff9d40" }}>REGISTRATION</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                     onPressIn={() =>  {setOnPress2(true) }} 
                     onPressOut={() => {setOnPress2(false)}} 
                     onPress={()=>{
                        login(email, password)
                     }}
                     activeOpacity ={0.5} 
                    style={!onPress2 ? styles.btnLogin : styles.btnRegistration}>
                        <Text style={{color: !onPress2? "#ff9d40": "#fff",}}>LOG IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    inputContainer:{
        width: 350
    },
    authInput:{
        backgroundColor: 'white',
        marginVertical: 7,
        padding: 10,
        borderRadius: 5,
    
    },
    btnContainer:{
        marginTop: 7,
        flexDirection: 'row',
        width: 350,
        justifyContent: 'space-around'
    },
    btnRegistration:{
       
        padding: 10,
        backgroundColor: '#ff9d40',
        width: 145,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ff9d40'
    },
    btnLogin:{
       
        padding: 10,
        backgroundColor: '#fff',
        width: 145,
        borderWidth: 2,
        borderColor: '#ff9d40',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'

    },
    
})

export default AuthScreen;