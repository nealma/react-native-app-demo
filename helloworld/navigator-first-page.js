
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import SecondPageComponent from './navigator-second-page';

export default class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent
            });
        }
    }
    render() {
        return (
                <TouchableOpacity onPress={()=>{this._pressButton();}}>
            <View style={{backgroundColor: '#484848', marginTop: 100}}>
                    <Text>First</Text>
            </View>
                </TouchableOpacity>
        );
    }
}
