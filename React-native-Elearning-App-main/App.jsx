import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './src/componens/HomeScreen';
import AboutScreen from './src/componens/AboutScreen';
import Password from './src/componens/Password';
import Contact from './src/componens/Contact';
import Hafeex from './src/componens/Hafeex';
import Todo from './src/componens/Todo';
import Class from './src/componens/Class';
// import LecturesScreen from './LecturesScreen';
// import OngoingScreen from './OngoingScreen';
// import CompletedScreen from './CompletedScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Login-Page" component={HomeScreen} />
        <Stack.Screen name="Verify OTP" component={AboutScreen} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Password" component={Password} /> */}
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;
          if (route.name === 'Home Page') {
            iconSource = focused
              ? require('./src/image/Assets/home-active.png')
              : require('./src/image/Assets/home-active.png')
          } else if (route.name === 'Todo') {
            iconSource = focused
              ? require('./src/image/Assets/download-removebg-preview.png')
              : require('./src/image/Assets/download-removebg-preview.png')
          } else if (route.name === 'Setting') { // Adjusted condition
            iconSource = focused
              ? require('./src/image/Assets/home-active.png')
              : require('./src/image/Assets/home-active.png')
          }
          return <Image source={iconSource} style={styles.img} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'green',
      })}
    >
      <Tab.Screen name="Home Page" component={Hafeex} options={{ headerShown: false }} />
      <Tab.Screen name="Todo" component={Todo} options={{ headerShown: false }} />
      <Tab.Screen name="Setting" component={Class} options={{ headerShown: true }} />
    </Tab.Navigator>


  );
};
// const TodoStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="Todo">
//       <Stack.Screen name="Todo" component={Todo} />
//       <Stack.Screen name="Lectures" component={LecturesScreen} />
//       <Stack.Screen name="Ongoing" component={OngoingScreen} />
//       <Stack.Screen name="Completed" component={CompletedScreen} />
//     </Stack.Navigator>
//   );
// };
export default App;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 20, // Adjust the size as needed
    height: 20, // Adjust the size as needed
  },
});