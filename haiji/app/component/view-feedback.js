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

import Config from './config';
import Styles from './styles'

export default class FeedBackPage extends Component {
    render() {
        return (
            <View style={[Styles.container, Styles.bgColorLightRed, Styles.feedbackPadding]}>
                <Text style={[Styles.menuItemText,Styles.feedbackPadding]}>{Config.feedback.introduce1}</Text>
                <Text style={[Styles.menuItemText,Styles.feedbackPadding]}>{Config.feedback.introduce2}</Text>
                <Text style={[Styles.menuItemText,Styles.feedbackPadding]}>{Config.feedback.introduce3}</Text>
                <View style={[Styles.rowDirection, Styles.center,Styles.feedbackPadding]}>
                    <Image source={{uri: Config.feedback.qrcode}} style={[Styles.feedbackQrcode]}/>
                </View>
            </View>
        );
    }
}