import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

export class Logo extends Component {
  render(): React.ReactNode {
    return (
      <>
        <View style={styles.flex}>
          <Image style={styles.img} source={require('./meliza-icon.png')} />
          <Text style={styles.logoText}> meliza </Text>
        </View>
      </>
    );
  }
}
