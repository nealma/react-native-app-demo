/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
//noinspection JSUnresolvedVariable
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Image
} from 'react-native';
/**
 * Animated
 */
import CameraRollDemo from './camera-roll'; // 主页
// import NavigatorDemo from './navigator-main-page'; // 主页
import SideMenuNavigator from './sidemenu-navigator';
class helloworld extends React.Component {
    render() {
        // camera roll
        /*
        return (

        );
        */


        return (
            // camera roll
            //<CameraRollDemo />

            // navigator
            //<NavigatorDemo />

            //sidemenu navigator
            <SideMenuNavigator/>
        );
    }
}


AppRegistry.registerComponent('helloworld', () => helloworld);