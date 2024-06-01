// HomeScreen.js
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

function HomeScreen({ navigation }) {
  const [otp, setOtp] = useState(''); // State to store OTP value
  const [isLoading, setIsLoading] = useState(false); // State to track loading state

  // Function to handle OTP verification
  const handleVerifyOTP = () => {
    setIsLoading(true);
    // Simulate API call to verify OTP
    setTimeout(() => {
      setIsLoading(false);
      setOtp("")
      navigation.navigate('Verify OTP', { otp });
    }, 2000); // Simulating 2 seconds delay for verification
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.looping}>
        <Image style={styles.img} source={require("../image/Assets/login-page.jpg")} />
      </View>
      <View style={styles.pop}>
        <Text style={styles.login}>Login to Your account</Text>
        <Text style={styles.number}>Login With Your number</Text>
        <View style={styles.section}>
          <Image style={styles.loginimg} source={require("../image/Assets/flag.png")} />
          <TextInput
            style={styles.loginitem}
            placeholder='+91'
            keyboardType='phone-pad'
            value={otp} // Set the value of TextInput to the OTP state
            onChangeText={text => setOtp(text)} // Update the OTP state
          />
        </View>
        <Text style={styles.sentMessage}>An OTP has been sent to your phone</Text>
      </View>
      <TouchableOpacity
        disabled={!otp} // Disable the button if OTP is empty
        onPress={handleVerifyOTP}
        style={[styles.Dansection, !otp && styles.disabledButton]} // Apply styles based on OTP presence
      >
        {isLoading ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text style={styles.phone}>Join Now</Text>
        )}
      </TouchableOpacity>
      <View style={styles.can}>
        <View style={styles.elo}>
          <Text>Don't have an account?</Text>
          <Text style={styles.text}>Create an Account</Text>
        </View>
      </View>
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
    width: 220,
    height: 220,
    marginTop: 50,
  },
  looping: {
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
    width: 290,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 1,
    marginRight: 22,
  },
  loginimg: {
    height: 50,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  can: {
    fontSize: 15,
    alignItems: 'center',
    marginTop: 50,
  },
  Dansection: {
    fontSize: 20,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 352,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#725cbc',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  elo: {
    flexDirection: 'row',
  },
  phone: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
  },
  sentMessage: {
    fontSize: 14,
    marginTop: 10,
    color: '#888', // Adjust color as needed
  },
  disabledButton: {
    opacity: 0.5, // Adjust the opacity to indicate that the button is disabled
  },
});

export default HomeScreen;
