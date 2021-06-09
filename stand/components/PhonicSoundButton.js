import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component {

  render() {
    return (
      <TouchableOpacity>
        <Text style={styles.displayText}>
        {this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    backgroundColor: '#1C97F7',
    marginTop:5,
    marginLeft: 50,
    marginRight:50,
    marginBottom:30,
    paddingBottom: 10,
    borderRadius: 5,
    padding:7
  },
});