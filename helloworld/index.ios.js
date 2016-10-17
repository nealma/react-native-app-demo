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

class helloworld extends React.Component {
    render() {
        return (
            //<Text> hello React Native! </Text>
            <CameraRollDemo />
            //{CameraRollDemo}
        );
    }
}


AppRegistry.registerComponent('helloworld', () => helloworld);