import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

function AboutScreen({ navigation }) {
  const [otp, setOtp] = useState(['', '', '', '']); // State to store OTP digits
  const [isLoading, setIsLoading] = useState(false); // State to track loading state

  // Function to update OTP digit at given index
  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  // Function to join OTP digits into a single string
  const getOtpValue = () => {
    return otp.join('');
  };

  // Function to handle OTP verification
  const handleVerifyOTP = () => {
    setIsLoading(true);
    // Simulate API call to verify OTP
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Password', { otp: getOtpValue() });
    }, 2000); // Simulating 2 seconds delay for verification
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.looping}>
        <Image style={styles.img} source={require("../image/Assets/otp-page.jpg")} />
      </View>
      <View style={styles.pop}>
        <Text style={styles.login}>Verify OTP</Text>
        <Text style={styles.description}>Please enter the 4-digit verification code sent to you at</Text>
        <View style={styles.phoneNumberContainer}>
          <Text style={styles.phoneNumber}>+91 7558847558</Text>
        </View>
        <View style={styles.codeInputContainer}>
          {/* Render 4 TextInput fields for OTP */}
          {Array.from({ length: 4 }).map((_, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType='numeric'
              maxLength={1}
              onChangeText={text => handleOtpChange(text, index)}
              value={otp[index]}
            />
          ))}
        </View>
      </View>
      <View style={styles.actions}>
        <View style={styles.maxelo}>
          <Text>Don't receive code?</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Resend Code</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          disabled={!otp} // Disable the button if OTP is empty
          onPress={handleVerifyOTP}
          style={[styles.verifyButton, !otp && styles.disabledButton]} // Apply styles based on OTP presence
        >
          {isLoading ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <Text style={styles.verifyText}>Verify</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  img: {
    width: 220,
    height: 130,
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
  description: {
    fontSize: 15,
    fontFamily: 'Helvetica',
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  phoneNumber: {
    color: 'blue',
    fontWeight: 'bold',
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    textAlign: 'center',
    marginHorizontal: 5,
    fontSize: 18,
  },
  actions: {
    alignItems: 'center',
    marginTop: 50,
  },
  maxelo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  verifyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#725cbc',
  },
  verifyText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.5, // Adjust the opacity to indicate that the button is disabled
  },
});

export default AboutScreen;
