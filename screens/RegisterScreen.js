import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {

      // navigation
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.etsystatic.com/11143919/r/il/cbcde4/1604045490/il_570xN.1604045490_m25x.jpg",
        }}
      />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          //   value={userNIC}
          //   onChangeText={() => setUserNIC(e.target.value)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          //   value={userNIC}
          //   onChangeText={() => setUserNIC(e.target.value)}
        />
      </View>

      {/* <StatusBar style="auto" /> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User NIC"
          placeholderTextColor="#003f5c"
          //   value={userNIC}
          //   onChangeText={() => setUserNIC(e.target.value)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          // value={password}
          // onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        style={styles.registerBtn}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.loginTextRegister}>REGISTER</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.loginTextLogin}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

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
    borderStyle: "solid",
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

  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FFF",
    borderStyle: "solid",
    borderWidth: 2,
  },
  loginTextLogin: {
    color: "black",
  },
  loginTextRegister: {
    color: "#fff",
  },
});
