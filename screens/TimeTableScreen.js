import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import tw from "tailwind-react-native-classnames";

const data = [
    {
        id: "123",
        image: "https://image.pngaaa.com/9/554009-middle.png",
        route: "120",
        plate: "BC-2000",
        time: "7.30 a.m",
        routeName: "Colombo - Horana"
    },
    {
        id: "456",
        image: "https://image.pngaaa.com/9/554009-middle.png",
        route: "125",
        plate: "BC-2010",
        time: "5.30 p.m",
        routeName: "Gampaha - Colombo"
    },
    {
        id: "789",
        image: "https://image.pngaaa.com/9/554009-middle.png",
        route: "140",
        plate: "BC-2020",
        time: "1.00 p.m",
        routeName: "Mathara - Horana"
    },
]

const TimeTableScreen = () => {
    return (
        <View style={styles.container}> 
            <View style={styles.bookTitleContain}>
                <Text style={styles.bookTitle}>Bus Time Tables</Text>
            </View>

        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View 
                    style={[tw`bg-gray-200`, {height: 5}]}
                />
            )}
            renderItem={({item: { image, route, plate, time, routeName }}) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}
                    // onPress={() => navigation.navigate(screen)}
                >
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: "contain",
                        }}
                        source={{ uri: image }}
                    />
                    <View>
                        <Text style={tw`font-semibold text-xl ml-10`}>{plate}</Text>
                        <Text style={tw`text-gray-700 text-lg ml-10`}>{route}</Text>
                        <Text style={tw`text-gray-600 text-lg ml-10`}>{routeName}</Text>
                        <Text style={tw`text-gray-500 ml-10 text-lg`}>{time}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
        </View>
    )
}

export default TimeTableScreen

const styles = StyleSheet.create({
     container: {
            flex: 1,
            marginTop: 50,
        },
      bookTitleContain: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },    
      bookTitle: {
        fontSize: 40,
        marginBottom: 50,
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: 'gray'
    }
})
