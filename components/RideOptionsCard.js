import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const RideOptionsCard = ({ route }) => {

  // console.log("Ride options : ", route.params);
  const userID = route.params.userID;

  const data = [
    {
      id: "Normal-123",
      title: "Normal",
      image: "data:image/jpeg;base64,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",
    },
  ];

  // navigation
  const navigation = useNavigation();

  //   selected mark
  const [selected, setSelected] = useState(null);

  //   get Map dispatched select travel time information
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  // console.log(travelTimeInformation);

  // const CURRENT_RATE = 1.5;

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      {/* ride text and button */}
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 p-3 z-50 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride = {travelTimeInformation?.rows[0].elements[0].distance.text}
        </Text>
      </View>

      {/* view vehicles for available */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            // onPress={() => setSelected(item)}
            onPress={() => {navigation.navigate("BookBusScreen", { item, travelTimeInformation, userID })}}
            style={tw`flex-row justify-between items-center px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />

            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.rows[0].elements[0].duration.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
              Rs. 30
              {/* {Math.round(
                (travelTimeInformation?.rows[0].elements[0].distance.value *
                  CURRENT_RATE *
                  multiplier)/100
              )} */}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
