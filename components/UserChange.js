import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    title: "Local Passenger",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/002/212/463/small_2x/line-icon-for-local-vector.jpg",
    screen: "RegisterLocal",
  },
  {
    id: "456",
    title: "Foreign Passenger",
    image:
      "https://thumbs.dreamstime.com/b/user-network-icon-vector-filled-flat-sign-solid-pictogram-isolated-white-symbol-logo-illustration-user-network-vector-icon-sign-134533750.jpg",
    screen: "RegisterForeign",
  },
];

const UserChange = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.etsystatic.com/11143919/r/il/cbcde4/1604045490/il_570xN.1604045490_m25x.jpg",
        }}
      />

      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-5 pb-8 pt-4 bg-gray-100 m-2 w-40`}
            // if not type where from? then this fires
          >
            {/*  */}
            <View>
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
    </View>
  );
};

export default UserChange;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center'
      },
    image: {
        marginTop: 100,
        width: 300,
        height: 200
      },
});
