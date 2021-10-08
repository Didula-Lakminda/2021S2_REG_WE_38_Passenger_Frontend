import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import URL from "../route";

const RegisterForeign = () => {
  // navigation
  const navigation = useNavigation();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [passport, setPassport] = useState("");
  const [tot, setTot] = useState("");

  const registerUser = () => {
    fetch(URL + "/reg-passenger-foreign", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: fname,
        lastname: lname,
        email: email,
        passport: passport,
        tot_amount: tot,
      }),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        alert("Register Successfully");
        navigation.navigate("LoginScreen");
      })
      .catch((err) => {
        console.log(err.res.message);
        alert("Please Enter Valid Details");

      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleMain}>Welcome</Text>
        <Text style={styles.titleSub}>Foreign Passenger</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          value={fname}
          onChangeText={(text) => setFname(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          value={lname}
          onChangeText={(text) => setLname(text)}
        />
      </View>

      {/* <StatusBar style="auto" /> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User Passport"
          placeholderTextColor="#003f5c"
          value={passport}
          onChangeText={(text) => setPassport(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          // secureTextEntry={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Amount"
          placeholderTextColor="#003f5c"
          keyboardType="numeric"
          value={tot}
          onChangeText={(text) => setTot(text)}
        />
      </View>

      <TouchableOpacity style={styles.registerBtn} onPress={registerUser}>
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

export default RegisterForeign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 40,
  },
  titleMain: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'normal'
  },
  titleSub: {
      fontSize: 40,
      color: 'black',
      marginTop: 4,
      fontWeight: 'bold'
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
