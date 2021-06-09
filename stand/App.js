import * as React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import db from './localdb';
import PhonicSoundButton from './components/PhonicSoundButton';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      gotra: [],
      pravar: [],
    };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header
          backgroundColor={'#1C97F7'}
          centerComponent={{
            text: 'Sonar Gotravali ',
            style: { color: 'black', fontSize: 20 },
          }}
        />

        <Image style={styles.imageIcon} source={require('./vis.png')} />

        <TextInput
          style={styles.inputBox}
          placeholder="Enter your surname here"
          placeholderTextColor="black"
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.search}
          onPress={() => {
            var word = this.state.text.toLowerCase().trim();
            db[word]
              ? (this.setState({ gotra: db[word].gotra }),
                this.setState({ phonicSounds: db[word].pravar }))
              : Alert.alert('The word does not exist in our database');
          }}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <ScrollView>
          {this.state.gotra.map((item, index) => {
            return (
              <PhonicSoundButton
                wordChunk={this.state.gotra[index]}
                soundChunk={this.state.phonicSounds[index]}
                buttonIndex={index}
              />
            );
          })}
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    outline: 'none',
    borderRadius: 5,
    backgroundColor: '#1C97F7',
  },
  search: {
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: '#1C97F7',
    padding: 7,
    marginTop: 10,
    marginBottom: 50,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  imageIcon: {
    width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
  },
});
