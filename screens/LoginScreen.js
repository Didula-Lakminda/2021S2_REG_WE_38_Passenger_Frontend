import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {

  // navigation
  const navigation = useNavigation();

  const [userNIC, setUserNIC] = useState("");
  // const [password, setPassword] = useState("");
 
  return (
      
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: "https://i.etsystatic.com/11143919/r/il/cbcde4/1604045490/il_570xN.1604045490_m25x.jpg" }} />
 
      {/* <StatusBar style="auto" /> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User NIC"
          placeholderTextColor="#003f5c"
          value={userNIC}
          onChangeText={() => setUserNIC(e.target.value)}
        />
      </View>
 
      {/* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View> */}
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("HomeScreen")}>
        <Text style={styles.loginTextLogin}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate("RegisterScreen")}>
        <Text style={styles.loginTextRegister}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 80,
      width: 300,
      height: 100,
    },
   
    inputView: {
      backgroundColor: "#FFF",
      borderRadius: 20,
      width: "80%",
      height: 50,
      borderStyle: 'solid',
      borderWidth: 1,
      marginBottom: 20,
   
    //   alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "black",
    },
    registerBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FFF",
      borderStyle: 'solid',
      borderWidth: 2,
    },
    loginTextLogin: {
        color: '#fff'
    },
    loginTextRegister: {
      color: 'black'
    }
  });
