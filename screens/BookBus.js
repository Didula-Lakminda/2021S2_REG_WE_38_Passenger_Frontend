import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import tw from "tailwind-react-native-classnames";
import URL from '../route';
import { useNavigation } from "@react-navigation/native";


const BookBus = ({ route }) => {
  console.log(route.params);
  const navigation = useNavigation();

  const [nicId, setNICId] = useState(route.params.Local);
  const [passportID, setPassportID] = useState(route.params.Local.foreignUserID);
  const [startpoint, setstartpoint] = useState(
    route.params.travelTimeInformation.origin_addresses[0]
  );
  const [endpoint, setendpoint] = useState(
    route.params.travelTimeInformation.destination_addresses[0]
  );
  const [distance, setDistance] = useState(
    route.params.travelTimeInformation.rows[0].elements[0].distance.text
  );
  // const [time, setTime] = useState(
  //   route.params.travelTimeInformation.rows[0].elements[0].duration.text
  // );

   const CURRENT_RATE = 10.5;
   const multiplier = 1.2

  const calc = Math.round((route.params.travelTimeInformation.rows[0].elements[0].distance.value* CURRENT_RATE*multiplier)/10000);

   const calcToString = calc.toString();

  const bookRouteTicket = () => {
    console.log(route.params.Local.num);

    if(route.params.Local.num === "1"){
      fetch(URL + "/foreign-passenger-route", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passport: passportID,
          start_des: startpoint,
          end_des: endpoint,
          distance: distance,
          amount: calcToString,
        }),
      })
        .then((res) => res.json())
        .then((resData) => {
          console.log(resData);
          alert('Payment Successfully');
          navigation.navigate("HomeScreen", passportID);

        })
        .catch((err) => {
          console.log(err);
          alert('Account Has Some Problem');
        });
    }
    else{
      fetch(URL + "/local-passenger-route", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nic: nicId,
          start_des: startpoint,
          end_des: endpoint,
          distance: distance,
          amount: calcToString,
        }),
      })
        .then((res) => res.json())
        .then((resData) => {
          console.log(resData);
          alert('Payment Successfully');
          navigation.navigate("HomeScreen", nicId);

        })
        .catch((err) => {
          console.log(err);
          alert('Account Has Some Problem');
        });
    }
  };

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.bookTitleContain}>
        <Text style={styles.bookTitle}>Book Bus Card</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="NIC"
          placeholderTextColor="#003f5c"
          value={nicId}
          // value={passportID}
          // onChangeText={(passportID) => setPassportID(passportID)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="NIC"
          placeholderTextColor="#003f5c"
          value={passportID}
          // value={passportID}
          // onChangeText={(passportID) => setPassportID(passportID)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          value={startpoint}
          onChangeText={(startpoint) => setstartpoint(startpoint)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          value={endpoint}
          onChangeText={(endpoint) => setendpoint(endpoint)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          keyboardType='numeric'
          value={distance}
          onChangeText={(distance) => setDistance(distance)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Amount"
          value={calcToString}
        />
      </View>

      <TouchableOpacity
        style={styles.bookBtn}
        // onPress={() => navigation.navigate("RegisterScreen")}
        onPress={bookRouteTicket}
      >
        <Text style={styles.loginTextBook}>BOOK</Text>
      </TouchableOpacity>
    </View>
    // </SafeAreaView>
  );
};

export default BookBus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bookTitleContain: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    width: "80%",
    height: 50,
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  bookBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",
  },
  loginTextBook: {
    color: "#fff",
  },
  bookTitle: {
    fontSize: 40,
    marginBottom: 70,
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderBottomColor: "gray",
  },
});
