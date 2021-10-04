import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useDispatch } from "react-redux";
// import NavFavourites from "../components/NavFavourites";
import { useNavigation } from "@react-navigation/native";
import NavDetails from "../components/NavDetails";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ route, navigation }) => {

  const userID = route.params;
  console.log(userID);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`pt-5 pl-5`}>
        <Image
          style={{ width: 200, height: 150, resizeMode: "contain", marginLeft: -30 }}
          source={{
            uri: "https://i.etsystatic.com/11143919/r/il/cbcde4/1604045490/il_570xN.1604045490_m25x.jpg",
          }}
        />

        {/* google maps thing */}
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
            // console.log(data);
            // console.log(details);
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          // only after stop typing 400 ms
          debounce={400}
        />

        {/* nav options */}
        <NavOptions userID={userID} />
        {/* <NavFavourites /> */}

        {/* time table and routes */}
        <NavDetails />
        
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
