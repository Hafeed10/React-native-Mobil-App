import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from '@react-navigation/native';

const Todo = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.heading}>
        <Image style={styles.image1} source={require('../image/Assets/class-dark.svg')} />
        <Text style={styles.head}>Today's lectures</Text>
      </View>

      <View style={styles.headline}>
        <Link to="/LecturesScreen">
          <Text style={styles.line}>Lectures</Text>
        </Link>

        <Link to="/ongoing">
          <Text style={styles.line}>Ongoing</Text>
        </Link>
        <Link to="/completed">
          <Text style={styles.line}>Completed</Text>
        </Link>
      </View>

      <View>
        <TouchableOpacity style={styles.love}>
          <View style={styles.lineloop}>
            <Image style={styles.image2} source={require('../image/Assets/maths.jpg')} />
            <View style={styles.love2}>
              <Text style={styles.love3}>Maths</Text>
              <Text style={styles.love4}>Running...</Text>
            </View>
            <View style={styles.vove2}>
              <Text style={styles.vove3}></Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.love}>
          <View style={styles.lineloop}>
            <Image style={styles.image2} source={require('../image/Assets/photoshop.jpg')} />
            <View style={styles.love2}>
              <Text style={styles.love3}>UiUX</Text>
              <Text style={styles.love4}>Running...</Text>
            </View>
            <View style={styles.vove2}>
              <Text style={styles.vove3}></Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.love}>
          <View style={styles.lineloop}>
            <Image style={styles.image2} source={require('../image/Assets/ui-ux.jpg')} />
            <View style={styles.love2}>
              <Text style={styles.love3}>3D Art</Text>
              <Text style={styles.love4}>Running...</Text>
            </View>
            <View style={styles.vove4}>
              <Text style={styles.vove3}></Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.love}>
          <View style={styles.lineloop}>
            <Image style={styles.image2} source={require('../image/Assets/biology.jpg')} />
            <View style={styles.love2}>
              <Text style={styles.love3}>History</Text>
              <Text style={styles.love4}>Running...</Text>
            </View>
            <View style={styles.vove2}>
              <Text style={styles.vove3}></Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.love}>
          <View style={styles.lineloop}>
            <Image style={styles.image2} source={require('../image/Assets/3d-art-illution.jpg')} />
            <View style={styles.love2}>
              <Text style={styles.love3}>Python</Text>
              <Text style={styles.love4}>Running...</Text>
            </View>
            <View style={styles.vove4}>
              <Text style={styles.vove3}></Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Todo;

const styles = StyleSheet.create({
  heading: {
    width: '100%',
    padding: 10,
  },
  wrapper: {
    width: '100%',
    padding: 20,
  },
  head: {
    fontSize: 16,
    fontWeight: '300',
    color: '#272525',
    textAlign: 'left',
    padding: 10,
  },
  headline: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    fontSize: 18,
    fontWeight: '500',
    color: '#272525',
    textAlign: 'center',
  },
  love: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2, // Add some shadow for iOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
  },
  image2: {
    width: 60,
    height: 60,
    borderRadius: 30,

  },
  lineloop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  love2: {
    // flex: 1,
    paddingHorizontal: 10,
  },
  love3: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#595555',
  },
  love4: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#102dd5',
  },
  vove2: {
    width: 150,
    height: 10,
    borderRadius: 20,
    backgroundColor: '#33acdb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vove4: {
    width: 150,
    height: 10,
    borderRadius: 20,
    backgroundColor: '#1bc305',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vove3: {
    width: 100,
    marginRight: 50,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5250c8',
  },
});