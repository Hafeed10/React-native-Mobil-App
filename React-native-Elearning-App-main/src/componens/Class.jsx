import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

const Class = () => {
  return (
    <SafeAreaView style={styles.popup}>
      <View style={styles.popup1}>
        <Image style={styles.img} source={require('../image/Assets/person.jpg')} />
        <Text style={styles.des1}>Hafeex</Text>
        <Text style={styles.des}>hafeexmuhammed@gmail.com</Text>
      </View>

      <View style={styles.deser}>
        <Text style={styles.detrs}>Course You're Taking</Text>
      </View>

      <ScrollView horizontal={true} style={styles.section}>
        <View style={styles.hafee}>
          {courses.map((course, index) => (
            <View key={index} style={styles.hafe}>
              <View style={styles.middler}>
                <Text style={styles.p1}>{course.title}</Text>
                <View style={styles.max}>
                  <Text style={styles.p0}>{course.classes}</Text>
                  <Image style={styles.image1} source={course.image} />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View>
        <Text style={styles.detrs23}>Account</Text>
      </View>
      <View style={styles.last}>
        <Image style={styles.img1} source={require('../image/Assets/derivation.jpg')} />
        <Text style={styles.detrs20}>Educational Information</Text>
        <Image style={styles.img2} source={require('../image/Assets/home-active.png')} />
      </View>
      <View style={styles.last}>
        <Image style={styles.img1} source={require('../image/Assets/derivation.jpg')} />
        <Text style={styles.detrs20}>Payment History</Text>
        <Image style={styles.img3} source={require('../image/Assets/home-active.png')} />
      </View>
      <View style={styles.last}>
        <Image style={styles.img1} source={require('../image/Assets/derivation.jpg')} />
        <Text style={styles.detrs20}>Payment History</Text>
        <Image style={styles.img3} source={require('../image/Assets/home-active.png')} />
      </View>
    </SafeAreaView>
  );
};

const courses = [
  { title: 'UI/UX Design', classes: '03 Classes', image: require('../image/Assets/ui-ux.jpg') },
  { title: 'Derivation', classes: '03 Classes', image: require('../image/Assets/history.jpg') },
  { title: 'UI/UX Design', classes: '03 Classes', image: require('../image/Assets/ui-ux.jpg') }
];

const styles = StyleSheet.create({
  popup: {
    display: 'flex',
    justifyContent: 'center',
    padding: 40,
  },
  popup1: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
    marginLeft: 20,
    textAlign: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  img1: {
    width: 30,
    height: 30,
    padding: 10,
  },
  img2: {
    width: 30,
    height: 30,
    padding: 10,
    marginLeft: 50,
  },
  img3: {
    width: 30,
    height: 30,
    padding: 10,
    marginLeft: 95,
  },
  des1: {
    fontSize: 20,
    textAlign: 'center',
    color: '#3e3939',
    fontWeight: 'bold',
  },
  des: {
    fontSize: 15,
    padding: 5,
    textAlign: 'center',
    color: '#3e3939',
    fontWeight: '300',
  },
  detrs: {
    fontSize: 17,
    fontWeight: '500',
  },
  detrs23: {
    fontSize: 17,
    marginTop: 17,
    fontWeight: '500',
  },
  section: {
    marginTop: 20,
  },
  hafee: {
    flexDirection: 'row',
    gap: 20,
  },
  hafe: {
    width: 150,
    padding: 10,
    backgroundColor: '#41c4e1',
    borderRadius: 20,
    marginRight: 10,
  },
  middler: {
    alignItems: 'center',
  },
  image1: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginTop: 10,
  },
  p1: {
    fontSize: 19,
    color: '#fff',
    fontWeight: 'bold',
  },
  p0: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  max: {
    alignItems: 'center',
    marginTop: 10,
  },
  last: {
    flexDirection: 'row',
    marginLeft: 10,
    padding: 10,
    marginTop: 15,
    backgroundColor: '#fff',
  },
});

export default Class;
