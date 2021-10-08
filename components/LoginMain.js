import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const LoginMain = () => {

  // navigation
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://i.etsystatic.com/11143919/r/il/cbcde4/1604045490/il_570xN.1604045490_m25x.jpg",
        }}
        style={{
          width: 300,
          height: 300,
        }}
      />

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("LoginScreenLocal")}
      >
        <Text style={styles.loginTextLogin}>Login As Local Passenger</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerBtn}
        onPress={() => navigation.navigate("LoginScreenForeign")}
      >
        <Text style={styles.loginTextRegister}>Login As Foreign Passenger</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
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
