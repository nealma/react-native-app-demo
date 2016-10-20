/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
/**
 * Animated
 */
//import CameraRollDemo from './camera-roll'; // 主页
// import NavigatorDemo from './navigator-main-page'; // 主页
// import SideMenuNavigator from './sidemenu-navigator';
// import SideMenu from './sidemenu';
import ListView from './listview';
class helloworld extends React.Component {
    render() {

        return (
            // camera roll
            //<CameraRollDemo />

            // navigator
            //<NavigatorDemo />

            //sidemenu navigator
            //<SideMenuNavigator/>

            //sidemenu
            //<SideMenu />

            //listview
            <ListView />
        );
    }
}

AppRegistry.registerComponent('helloworld', () => helloworld);