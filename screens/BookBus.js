import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import tw from "tailwind-react-native-classnames";

const BookBus = ({ route }) => {

    // console.log(route.params);
    // console.log(route.params.travelTimeInformation.destination_addresses[0]);
    const [nicId, setNICId] = useState(route.params.userID);
    const [startpoint, setstartpoint] = useState(route.params.travelTimeInformation.origin_addresses[0]);
    const [endpoint, setendpoint] = useState(route.params.travelTimeInformation.destination_addresses[0]);
    const [distance, setDistance] = useState(route.params.travelTimeInformation.rows[0].elements[0].distance.text);
    const [time, setTime] = useState(route.params.travelTimeInformation.rows[0].elements[0].duration.text);

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
                    //   onChangeText={() => setUserNIC(e.target.value)}
                    />
                </View>
                
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholderTextColor="#003f5c"
                      value={startpoint}
                    //   onChangeText={() => setUserNIC(e.target.value)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholderTextColor="#003f5c"
                      value={endpoint}
                    //   onChangeText={() => setUserNIC(e.target.value)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholderTextColor="#003f5c"
                      value={distance}
                    //   onChangeText={() => setUserNIC(e.target.value)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholderTextColor="#003f5c"
                      value={time}
                    //   onChangeText={() => setUserNIC(e.target.value)}
                    />
                </View>

                <TouchableOpacity
                    style={styles.bookBtn}
                    // onPress={() => navigation.navigate("RegisterScreen")}
                >
                    <Text style={styles.loginTextBook}>BOOK</Text>
                </TouchableOpacity>

            </View>
        // </SafeAreaView>
    )
}

export default BookBus

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      bookTitleContain: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
          borderStyle: 'solid',
          borderBottomWidth: 2,
          borderTopWidth: 2,
          borderBottomColor: 'gray'
      }
})
