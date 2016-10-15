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

import SlideMenu from './app/component/slide-menu-view';

class haiji extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <SlideMenu style={{flex: 1, backgroundColor: '#FF6644'}} />
    )
  }
}

var styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  navBar: {
    height: 64,
    backgroundColor: '#CCC'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 200,
    backgroundColor: '#FFF'
  },
  loading: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
  }
};
AppRegistry.registerComponent('haiji', () => haiji);
