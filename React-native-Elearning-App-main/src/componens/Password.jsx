// Password.js

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';

const Password = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePassword = () => {
    console.log("Password submitted!"); 
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('BottomTabNavigator');
      setPassword(""); // Clear the text input value
    }, 2000);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);

    // Check password strength
    if (text.length >= 8) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loopimg}>
        <Image style={styles.img} source={require("../image/Assets/password-page.jpg")} />
      </View>
      <View style={styles.pop}>
        <Text style={styles.login}>Set a Strong Password</Text>
        <Text style={styles.number}>Set a strong password for your account</Text>
        <View style={styles.section}>
          <TextInput
            style={styles.loginitem}
            secureTextEntry={true}
            placeholder='Enter Your Password'
            onChangeText={handlePasswordChange}
            value={password}
          />
        </View>
        <Text style={[styles.number2, passwordValid ? styles.passwordValid : styles.passwordInvalid]}>
          {passwordValid ? 'Password meets requirements' : 'Password does not meet requirements'}
        </Text>
      </View>
      <TouchableOpacity
        onPress={handlePassword}
        style={styles.Dansection}
      >
        <Text style={styles.phone}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  img: {
    width: 300,
    height: 130,
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
    marginTop: 170,
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
  number2: {
    fontSize: 15,
    fontFamily: 'Helvetica',
    marginTop: 10,
  },
  passwordValid: {
    color: 'green',
  },
  passwordInvalid: {
    color: 'red',
  },
});

export default Password;
