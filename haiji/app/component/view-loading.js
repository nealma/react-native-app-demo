/**
 * @author neal.ma
 * @email neal.ma.sh@gmail.com
 * @blog http://nealma.com
 */
import React, { Component } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';

import Styles from './styles';

export default class Loading extends Component {
    render(){
        return (
            <View style={Styles.container}>
                <View style={Styles.listLoading}>
                    <ActivityIndicator
                        size='large'
                        color={Styles.loadingColor}/>
                </View>
            </View>
        );
    };
}