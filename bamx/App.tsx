import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Colectapage from "./pages/Colectapage"
import Homepage from "./pages/Homepage"
//import Login from "./pages/Login"
//import LogSign from "./pages/LogSign"
import Signup from "./pages/Signup"
import Userpage from "./pages/Userpage"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Homepage" 
          component={Homepage} 
          />
        <Stack.Screen 
          name="Colectapage"
          component={Colectapage}
        />
        {/*<Stack.Screen 
          name="Login" 
          component={Login} 
        />
        <Stack.Screen 
          name="LogSign" 
          component={LogSign} 
        />*/}
        <Stack.Screen 
          name="Signup" 
          component={Signup} 
        />
        <Stack.Screen 
          name="Userpage" 
          component={Userpage} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAD8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
