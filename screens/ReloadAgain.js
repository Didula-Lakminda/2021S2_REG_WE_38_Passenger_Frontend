import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import URL from '../route';

const ReloadAgain = ({ route }) => {

    // console.log(route.params);
    const ForeignuserID = route.params.ForeignuserID;
    const LocalUserID = route.params.LocalUserID;
    const [reload, setReload] = useState('');

    const navigation = useNavigation();

    const reloadAmount = () => {
        console.log(route.params.num);
    
        if(route.params.num === "1"){
          fetch(URL + "/reload-foreign", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                passport: route.params.ForeignuserID,
                tot_amount: reload
            }),
          })
            .then((res) => res.json())
            .then((resData) => {
              console.log(resData);
              // console.log(res.status);
              // if()
              alert('Reload Successfully');
              navigation.navigate("LoginScreenForeign", ForeignuserID);
            })
            .catch((err) => {
              console.log(err);
              alert('Account Has Some Problem');
            });
        }
        else{
          fetch(URL + "/reload-local", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nic: route.params.LocalUserID,
              tot_amount: reload
            }),
          })
            .then((res) => res.json())
            .then((resData) => {
              console.log(resData);
              alert('Reload Successfully');
              navigation.navigate("LoginScreenLocal", LocalUserID);
    
            })
            .catch((err) => {
              console.log(err);
              alert('Account Has Some Problem');
            });
        }
      };

    return (
        <View style={styles.container}>
      <Image style={styles.image} source={{ uri: "https://i.etsystatic.com/11143919/r/il/cbcde4/1604045490/il_570xN.1604045490_m25x.jpg" }} />
 
      {/* <StatusBar style="auto" /> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User NIC"
          placeholderTextColor="#003f5c"
          value={route.params.LocalUserID}
          editable={false}
        //   onChangeText={(localUserID) => setLocalUserID(localUserID)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Passport"
          placeholderTextColor="#003f5c"
          value={route.params.ForeignuserID}
          editable={false}
        //   onChangeText={(localUserID) => setLocalUserID(localUserID)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Reload Amount"
          placeholderTextColor="#003f5c"
          value={reload}
          onChangeText={(text) => setReload(text)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn} onPress={reloadAmount}>
        <Text style={styles.loginTextLogin}>RELOAD</Text>
      </TouchableOpacity>

    </View>
    )
}

export default ReloadAgain

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
        color: 'black'
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
})
