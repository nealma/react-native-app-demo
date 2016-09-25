/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 * Blink
 */
class Helloworld extends Component {
  render() {
    return (
        <Text> hello {this.props.name}! </Text>
    )
  }
}

class helloworld1 extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Helloworld name="neal1" />
        <Helloworld name="neal" />
        <Helloworld name="neal" />
      </View>
    )
  }
}

/**
 * Blink
 */

class Blink extends Component {
  constructor(props){
    super(props);
    this.state={
        showText: true
      };
    setInterval(() => {
      this.setState({
        showText: !this.state.showText
      });
    }, 1000);
  }
  render() {
      let display=this.state.showText?this.props.text:'';
      return (
          <Text>{display}</Text>
      );
    }
}

class BlinkApp extends Component {
  render(){
    return (
      <View>
        <Blink text='I am neal.'/>
        <Blink text='I am yaya' />
        <Blink text='I am mama' />
      </View>
    )
  }
}

AppRegistry.registerComponent('helloworld', () => BlinkApp);
