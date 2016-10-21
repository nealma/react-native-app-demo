/**
 * @author neal.ma
 * @email neal.ma.sh@gmail.com
 * @blog http://nealma.com
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    View,
    Image,
    Text
} from 'react-native';

import SideMenu from './app/component/view-menu-navigator';

class haiji extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <SideMenu style={{flex: 1, backgroundColor: '#FF6644'}} />
    )
  }
}

AppRegistry.registerComponent('haiji', () => haiji);
