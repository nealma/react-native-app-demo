/**
 * @author neal.ma
 * @email neal.ma.sh@gmail.com
 * @blog http://nealma.com
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    CameraRoll,
    Image,
    ScrollView
} from 'react-native';

const fetchParams = {
    first: 10,
    assetType: 'Photos'
};
const imgURL = 'https://blog.yourtion.com/images/2016/03/'; //backup0.png

export default class FeedBackPage extends Component {
    render() {
        return (
            <View><Text>反馈</Text></View>
        );
    }
}