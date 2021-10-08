import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import URL from "../route";


const RoutesScreen = () => {

    const [allRoutes, setAllRoutes] = useState();

    const getAllRoutes = () => {
        fetch(URL + "/get-routes", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((resData) => {
                console.log(resData);
                setAllRoutes(resData);
                setSearchFilter(resData);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getAllRoutes();
    }, []);

    const [searchFilter, setSearchFilter] = useState();

    const searchTimeTable = (textToSearch) => {
        setSearchFilter(
            allRoutes.filter((i) =>
                i.r_number.toLowerCase().includes(textToSearch.toLowerCase())
            )
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.titleMain}>Bus</Text>
                <Text style={styles.titleSub}>Routes</Text>
            </View>

            <View style={styles.searchbar}>
                <View style={styles.searchContainer}>
                    {/* can add icon here */}
                    <Icon
                        style={tw`rounded-full p-4`}
                        name="search"
                        type="ionicon"
                        color="black"
                        size={18}
                    />
                    <TextInput
                        placeholder="Search"
                        size={25}
                        style={styles.searchinput}
                        onChangeText={(text) => searchTimeTable(text)}

                    />

                </View>
            </View>


            <FlatList
                data={searchFilter}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { r_number, r_des, distance, amount } }) => (
                    <TouchableOpacity style={tw`flex-row items-center p-8 rounded-3xl
                border-4 border-black border-opacity-10 m-2
                `}
                    // onPress={() => navigation.navigate(screen)}
                    >
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                resizeMode: "contain",
                            }}
                            source={{ uri: "https://www.pngarts.com/files/2/Route-PNG-Photo.png" }}
                        />
                        <View>
                            {/* <Text style={tw`font-semibold text-xl ml-10`}>Route : {routeName}</Text> */}
                            <Text style={tw`text-gray-500 text-lg ml-10`}>Route No : {r_number}</Text>
                            <Text style={tw`font-semibold text-xl ml-10`}>Route : {r_des}</Text>
                            <Text style={tw`font-semibold text-xl ml-10`}>Distance : {distance}</Text>
                            <Text style={tw`font-semibold text-xl ml-10`}>Amount : {amount}</Text>

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
        marginHorizontal: 10,
        marginVertical: 40,
        backgroundColor: '#FFF'
    },
    titleWrapper: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    titleMain: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'normal'
    },
    titleSub: {
        fontSize: 45,
        color: 'black',
        marginTop: 4,
        fontWeight: 'bold'
    },
    searchbar: {
        marginTop: 30,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    searchContainer: {
        height: 50,
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    searchinput: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        flex: 1,
    },
})
