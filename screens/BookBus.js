import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import tw from "tailwind-react-native-classnames";

const BookBus = ({ route }) => {

    console.log(route.params);
    // console.log(route.params.travelTimeInformation.destination_addresses[0]);

    const [startpoint, setstartpoint] = useState(route.params.travelTimeInformation.origin_addresses[0]);
    const [endpoint, setendpoint] = useState(route.params.travelTimeInformation.destination_addresses[0]);
    const [distance, setDistance] = useState(route.params.travelTimeInformation.rows[0].elements[0].distance.text)

    const [id, setid] = useState('');

    return (
        <SafeAreaView>
            <View style={tw`m-10`}> 
                <TextInput
                        style={tw`p-3 bg-gray-200 mt-5 rounded-full`}
                        // placeholder="Start Point"
                        value={startpoint}
                    />
                <TextInput
                        style={tw`p-3 bg-gray-200 mt-5 rounded-full`}
                        // placeholder="Start Point"
                        value={endpoint}
                    />
                <TextInput
                        style={tw`p-3 bg-gray-200 mt-5 rounded-full`}
                        // placeholder="Start Point"
                        value={distance}
                    />
            </View>
        </SafeAreaView>
    )
}

export default BookBus

const styles = StyleSheet.create({})
