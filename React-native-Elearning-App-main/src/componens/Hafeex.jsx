import { StyleSheet, Text, View, Button, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Hafeex = ({ navigation }) => {
  // Use useNavigation hook to get navigation object
  
  return (
    <SafeAreaView style={styles.contant}>
      <View style={styles.loop}>
        <View style={styles.section}>
          <Image style={styles.img} source={require('../image/Assets/person.jpg')} />
          <View>
            <Text style={styles.text}>Hey, Hafeex</Text>
            <Text style={styles.pop}>let's get started</Text>
          </View>
        </View>
        <View>
          <Image  style={styles.image} source={require('../image/Assets/pngtree-vector-bell-icon-png-image_927119-removebg-preview.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Hafeex;

const styles = StyleSheet.create({
  contant: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  section: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: 80,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
    margin: 10,
  },
  image: {
    width: 30,
    height: 30,
    margin: 10,
    marginLeft: 100,
  },
  text: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
  loop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
  },
});
