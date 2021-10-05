import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const historyTab = [
  {
    id: "123",
    image: "https://static.thenounproject.com/png/82129-200.png",
    month: "January 2021",
    place: "Colombo - Horana",
  },
  {
    id: "456",
    image: "https://static.thenounproject.com/png/82129-200.png",
    month: "March 2021",
    place: "Gampaha - Colombo",
  },
  {
    id: "789",
    image: "https://static.thenounproject.com/png/82129-200.png",
    month: "June 2021",
    place: "Mathara - Colombo",
  },
];

const HistoryScreen = ({ route }) => {

  // console.log("History Nic : ", route.params);

  const [searchFilter, setSearchFilter] = useState(historyTab);

  const searchTimeTable = (textToSearch) => {
    setSearchFilter(
      historyTab.filter((i) =>
        i.month.toLowerCase().includes(textToSearch.toLowerCase())
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleMain}>Your </Text>
        <Text style={styles.titleSub}>History</Text>
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
        renderItem={({ item: { image, month, place } }) => (
          <TouchableOpacity
            style={tw`flex-row items-center p-5 rounded-3xl
                border-4 border-black border-opacity-10 m-2
                `}
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
              <Text style={tw`font-semibold text-xl ml-10`}>
                Month : {month}
              </Text>
              <Text style={tw`text-gray-700 text-lg ml-10`}>
                Place : {place}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 40,
    backgroundColor: "#FFF",
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  titleMain: {
    fontSize: 30,
    color: "black",
    fontWeight: "normal",
  },
  titleSub: {
    fontSize: 45,
    color: "black",
    marginTop: 4,
    fontWeight: "bold",
  },
  searchbar: {
    marginTop: 30,
    flexDirection: "row",
    paddingHorizontal: 10,
  },

  searchContainer: {
    height: 50,
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  searchinput: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    flex: 1,
  },
});
