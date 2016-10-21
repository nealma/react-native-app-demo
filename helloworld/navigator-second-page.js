import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class SecondPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            //入栈出栈, 把当前的页面pop掉，返回到了上一个页面:FirstPage
            navigator.pop();
        }
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fb9696', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={()=>{this._pressButton();}}>
                    <Text style={{height: 30, width: 80}}>第二页</Text>
                </TouchableOpacity>
            </View>
        );
    }
}