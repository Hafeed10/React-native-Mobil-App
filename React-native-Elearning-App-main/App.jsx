import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/componens/HomeScreen';
import AboutScreen from './src/componens/AboutScreen';
// import SettingScreen from './src/componsts/SettingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Password from './src/componens/Password';
import Contact from './src/componens/Contact';

const App = () => {
  const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Setting">
        <Stack.Screen name="Login-Page" component={HomeScreen} />
        <Stack.Screen name="Verify OTP" component={AboutScreen} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Password" component={Password} />
        {/* <Stack.Screen name="Setting" component={SettingScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
