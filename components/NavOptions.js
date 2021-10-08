import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image:
      "https://media.istockphoto.com/vectors/bus-stop-bus-station-location-marker-icon-vector-id1136216828?k=20&m=1136216828&s=612x612&w=0&h=kfvAw-l6J0-QyDRUDmE4qi4qskpZSSHAZ8_WGMTQkhM=",
    screen: "MapScreen",
  },
];

const NavOptions = ({ ForeignuserID, num, LocalUserID }) => {
  // console.log("Nav Options : ", ForeignuserID, num, LocalUserID);

  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen, {ForeignuserID, num, LocalUserID})}
          style={tw`p-2 pl-5 pb-8 pt-4 bg-gray-100 m-2 w-40`}
          // if not type where from? then this fires
          disabled={!origin}
        >
          {/*  */}
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold ml-7`}>
              {item.title}
            </Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4 ml-10`}
              name="arrowright"
              type="antdesign"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
