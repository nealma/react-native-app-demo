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
import ImagePicker from 'react-native-image-crop-picker';


export default class ImagePickerDemo extends Component {
    constructor(props){
        super(props);
    }

    openPicker(){
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    }
    render(){
        return(
            <View style={[Styles.footer, Styles.bgColorDarkRed]}>
                <TouchableOpacity onPress={openPicker}>
                    <Text>openPicker</Text>
                </TouchableOpacity>
            </View>
        );
    }
}