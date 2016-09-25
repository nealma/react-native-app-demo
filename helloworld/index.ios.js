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

class helloworld extends Component {
  render() {
    return (
      <Text>
        hello {this.props.name}!
      </Text>
    );
  }
}
// class multiLang extends Component {
//   render(){
//     return (
//     <View> >
//       <helloworld name="baba" />
//       <helloworld name="mama" />
//       <helloworld name="yaya" />
//     </View>
//     );
//   }
// }

AppRegistry.registerComponent('helloworld', () => helloworld);
