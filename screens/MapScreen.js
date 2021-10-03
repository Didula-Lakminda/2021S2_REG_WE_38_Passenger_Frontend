import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = ({ route }) => {
  
  const userID = route.params;
  // console.log("Map screen : ", route.params);

  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          {/* where you want to go */}
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
            initialParams = {{ userID }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
