import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import BookBus from './screens/BookBus';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import TimeTableScreen from './screens/TimeTableScreen';
import RoutesScreen from './screens/RoutesScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
                <Stack.Screen
                  name="LoginScreen"
                  component={LoginScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="MapScreen"
                  component={MapScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                 <Stack.Screen
                  name="BookBusScreen"
                  component={BookBus}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="RegisterScreen"
                  component={RegisterScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="TimeTableScreen"
                  component={TimeTableScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen 
                  name="RoutesScreen"
                  component={RoutesScreen}
                  options={{
                    headerShown: false,
                  }}
                />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
