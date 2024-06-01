import { StyleSheet, Text, View, Button, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Hafeex = ({ navigation }) => {
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
          <Image style={styles.image} source={require('../image/Assets/pngtree-vector-bell-icon-png-image_927119-removebg-preview.png')} />
        </View>
      </View>
      <View style={styles.scroll}>
        {/* <Image style={styles.imges1} source={require('../image/Assets/3d-art-illution.jpg')} /> */}
        <Text style={styles.h2}>ongoing</Text>
        <Text style={styles.h3}>3D Art & Illustartion</Text>
        <View style={styles.lock}>
          <Text style={styles.pop}>50%</Text>
        </View>
        <Text style={styles.kock}>Continue</Text>
      </View>
      <View style={styles.middle}>
        <View>
          <Text style={styles.p2}>Choose Your Course</Text>
        </View>
        <View style={styles.hafee}>
          <View style={styles.hafe}>
            <View style={styles.middler}>
              <Text style={styles.p1}>UI/UX Design</Text>
              <View style={styles.max}>
                <Text style={styles.p0}>03Classes</Text>
                <Image style={styles.image1} source={require('../image/Assets/ui-ux.jpg')} />
              </View>
            </View>
          </View>
          <View style={styles.hafe1}>
            <View style={styles.middler}>
              <Text style={styles.p1}>Derivation</Text>
              <View style={styles.max}>
                <Text style={styles.p0}>03Classes</Text>
                <Image style={styles.image1} source={require('../image/Assets/history.jpg')} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.hafee}>
          <View style={styles.hafe2}>
            <View style={styles.middler}>
              <Text style={styles.p1}>Photoshop</Text>
              <View style={styles.max}>
                <Text style={styles.p0}>03Classes</Text>
                <Image style={styles.image1} source={require('../image/Assets/derivation.jpg')} />
              </View>
            </View>
          </View>
          <View style={styles.hafe3}>
            <View style={styles.middler}>
              <Text style={styles.p1}>Business</Text>
              <View style={styles.max}>
                <Text style={styles.p0}>03Classes</Text>
                <Image style={styles.image1} source={require('../image/Assets/bussiness.jpg')} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView >
  );
};

export default Hafeex;

const styles = StyleSheet.create({
  contant: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  p2: {
    fontSize: 12,
    padding: 12,
    color: '#272525',
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },

  h2: {
    fontSize: 15,
    color: '#b7b0b0',

  },

  h3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  lock: {
    display: 'flex',
    justifyContent: 'center',
  },
  pop: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  kock: {
    color: '#ffffff',
    width: 100,
    padding: 10,
    marginTop: 10,
    borderRadius: 40,
    textAlign: 'center',
    backgroundColor: '#948d8d',
  },
  imges1: {
    width: 200,
    height: 100,
    marginLeft: 20,
  },
  scroll: {
    width: 350,
    height: 200,
    marginLeft: 20,
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#2e4880',
    padding: 20,
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
  middler: {
    width: 200,

  },
  image1: {
    width: 60,
    height: 60,
    borderRadius: 15,


  },

  middle: {
    padding: 10,
    color: '#fff',



  },
  hafe: {
    width: 150,
    textAlign: 'center',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#4174e1',
    borderRadius: 20,

  },
  hafe1: {
    width: 150,
    textAlign: 'center',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#5999c7',
    borderRadius: 20,

  },
  hafe2: {
    width: 150,
    textAlign: 'center',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#cb56cf',
    borderRadius: 20,

  },
  hafe3: {
    width: 150,
    textAlign: 'center',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#2e4880',
    borderRadius: 20,

  },
  p1: {
    fontSize: 19,
    color: '#fff',
    fontWeight: 'bold',
    gap: 10,
  },
  p0: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    gap: 10,
  },
  max: {
    color: '#ffff',
  },
  hafee: {
    marginLeft: 10,
    flexDirection: 'row',
    gap: 40,
    marginTop: 20,
  },
});
