
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import SecondPage from './navigator-second-page';

export default class FirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'SecondPage',
                component: SecondPage
            });
        }
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fcb064', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={()=>{this._pressButton();}}>
                            <Text style={{height: 30, width: 80}}>第一页</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
