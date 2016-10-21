/**
 * @author neal.ma
 * @email neal.ma.sh@gmail.com
 * @blog http://nealma.com
 */
import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Styles, { menuButton } from './styles';

export default class Header extends Component {
    menuHandlePress(e) {
        if (this.props.menuOnPress) {
            this.props.menuOnPress(e);
        }
    }
    photoHandlePress(e) {
        if (this.props.photoOnPress) {
            this.props.photoOnPress(e);
        }
    }
    render() {
        return (
            <View style={[Styles.menuButton, Styles.bgColorDarkGray]}>
                <TouchableOpacity onPress={this.menuHandlePress.bind(this)} >
                    <Icon name="bars" size={Styles.iconSize} color={Styles.iconColorWhite}/>
                </TouchableOpacity>
                <Text style={[Styles.fontSizeLarge, Styles.fontColorWhite]}>孩记</Text>
                <Icon name="camera" size={Styles.iconSize} color={Styles.iconColorWhite} onPress={this.photoHandlePress.bind(this)}/>
            </View>
        );
    }
}