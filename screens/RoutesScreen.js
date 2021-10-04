import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import tw from "tailwind-react-native-classnames";

const data = [
    {
        id: "123",
        route: "120",
        routeName: "Horana - Colombo",
        image: "https://static.thenounproject.com/png/1854714-200.png"
    },
    {
        id: "456",
        route: "200",
        routeName: "Colombo - Gampaha",
        image: "https://static.thenounproject.com/png/1854714-200.png"
    },
    {
        id: "789",
        route: "180",
        routeName: "Mathara - Colombo",
        image: "https://static.thenounproject.com/png/1854714-200.png"
    },
]

const RoutesScreen = () => {
    return (
        <View style={styles.container}> 
            <View style={styles.bookTitleContain}>
                <Text style={styles.bookTitle}>Bus Routes</Text>
            </View>

        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View 
                    style={[tw`bg-gray-200`, {height: 5}]}
                />
            )}
            renderItem={({item: { image, route, routeName }}) => (
                <TouchableOpacity style={tw`flex-row items-center p-8`}
                    // onPress={() => navigation.navigate(screen)}
                >
                    <Image
                        style={{
                            width: 50,
                            height: 50,
                            resizeMode: "contain",
                        }}
                        source={{ uri: image }}
                    />
                    <View>
                        <Text style={tw`font-semibold text-xl ml-20`}>{routeName}</Text>
                        <Text style={tw`text-gray-500 text-lg ml-20`}>Root No - {route}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
        </View>
    )
}

export default RoutesScreen

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
