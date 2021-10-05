import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const HistoryButton = () => {

  const navigation = useNavigation();

  return (
    <View
        style={tw`flex-row bg-white justify-evenly py-20`}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("HistoryScreen")}
          style={tw`flex flex-row justify-between bg-black w-32 px-5 py-4 rounded-full`}
        >
          <Icon name="history" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>View History</Text>
        </TouchableOpacity>
      </View>
  );
};

export default HistoryButton;

const styles = StyleSheet.create({});
