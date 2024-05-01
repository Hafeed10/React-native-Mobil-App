import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';

const Contact = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  
  const handleSubmit = () => {
    console.log("Name submitted!"); 
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Password');
      setName(""); // Clear the text input value
    }, 2000); // corrected syntax
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loopimg}>
        <Image style={styles.img} source={require("../image/Assets/name-page.jpg")} />
      </View>
      <View style={styles.pop}>
        <Text style={styles.login}>Enter Your name</Text>
        <Text style={styles.number}>Enter your full name for your account</Text>
        <View style={styles.section}>
          <TextInput
            style={styles.loginitem}
            placeholder='Enter Your Name'
            value={name}
            onChangeText={text => setName(text)} // Update the name state
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={handleSubmit} // Add onPress handler for submission action
        style={styles.Dansection}
      >
        <Text style={styles.phone}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  img: {
    width: 220,
    height: 280,
    marginTop: 50,
  },
  loopimg: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  pop: {
    alignItems: 'center',
    marginTop: 50,
  },
  login: {
    fontSize: 30,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: '#000000',
  },
  number: {
    fontSize: 15,
    fontFamily: 'Helvetica',
    fontWeight: '300',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  loginitem: {
    height: 50,
    width: 320,
    borderWidth: 1,
    borderColor: '#c7c3c3',
    borderRadius: 5,
    color: '#968f8f',
  },
  can: {
    fontSize: 15,
    alignItems: 'center',
    marginTop: 50,
  },
  Dansection: {
    fontSize: 20,
    marginBottom: 50,
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
    width: 352,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#725cbc',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  phone: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  disabledButton: {
    opacity: 0.5, // Adjust the opacity to indicate that the button is disabled
  },
});
