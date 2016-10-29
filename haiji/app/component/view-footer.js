/**
 * @author neal.ma
 * @email neal.ma.sh@gmail.com
 * @blog http://nealma.com
 */
import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import Styles from './styles';

export default class Footer extends Component {
    static propTypes = {
        text: React.PropTypes.string.isRequired,
    };
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={[Styles.footer, Styles.bgColorDarkRed]}>
                <Text></Text>
                <Text style={[Styles.fontColorWhite, Styles.centerText, Styles.menuItemText]}>{this.props.text}</Text>
                <Text></Text>
            </View>
        );
    }
}