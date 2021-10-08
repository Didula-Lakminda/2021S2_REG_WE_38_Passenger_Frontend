import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    icon: "time",
    name: "Time Tables",
    description: "Show bus timetables",
    screen: "TimeTableScreen",
  },
  {
    id: "456",
    icon: "map",
    name: "Bus Routes",
    description: "Show bus routes",
    screen: "RoutesScreen",
  },
  {
    id: "789",
    icon: "man",
    name: "Reload Again",
    description: "Reload credits again",
    screen: "ReloadAgain"
  }
];

const NavDetails = ({ ForeignuserID, num, LocalUserID }) => {
  const navigation = useNavigation();

  // console.log(ForeignuserID, num, LocalUserID);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { icon, name, description, screen } }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={() => navigation.navigate(screen, { ForeignuserID, num, LocalUserID })}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{name}</Text>
            <Text style={tw`text-gray-500`}>{description}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavDetails;

const styles = StyleSheet.create({});
