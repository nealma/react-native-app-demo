/**
 * @author neal.ma
 * @email neal.ma.sh@gmail.com
 * @blog http://nealma.com
 */
import React, { Component } from 'react';
import {
    TextInput,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Styles from './styles';
import Config from './config';

export default class LoginPage extends Component {
    handleLogin(e) {
        console.log(e)
        if (this.props.loginOnPress) {
            console.log('handleLogin')
            this.props.loginOnPress(e);
        }
    }
    render() {
        return (
            <ScrollView keyboardShouldPersistTaps={false}
                        style={[Styles.container, Styles.bgColorDarkRed, Styles.feedbackPadding]}>
                <View
                    style={[Styles.loginTop,Styles.center, Styles.feedbackPadding]}>
                    <Text style={[Styles.menuItemText, Styles.fontSizeLogo]}>孩记</Text>
                    <Text style={[Styles.subLogoText, Styles.fontSizeLarge]}>——专注孩时记忆</Text>
                </View>
                <View style={[Styles.loginMargin,Styles.bgColorLightRed]}>
                    <Text style={[Styles.menuItemText]} />
                    <TextInput
                        style={[Styles.loginText,{flex:1}]}
                        multiline={false}
                        keyboardType='numeric'
                        onEndEditing={this.clearFocus}
                        placeholder={Config.phoneTips}
                        placeholderTextColor='rgba(248,248,248,0.5)'
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => this.setState({phoneNum: text})}
                    />
                </View>
                <View style={[Styles.loginMargin,Styles.bgColorLightRed]}>
                    <Text style={[Styles.menuItemText]} />
                    <TextInput
                        style={[Styles.loginText,{flex:1}]}
                        multiline={false}
                        onEndEditing={this.clearFocus}
                        keyboardType='numeric'
                        placeholder={Config.phoneCheckTips}
                        placeholderTextColor='rgba(248,248,248,0.5)'
                        onChangeText={(text) => this.setState({phoneCheck: text})}
                    />
                </View>
                <TouchableOpacity style={[Styles.center,Styles.loginCheck,Styles.bgColorLightRed]}>
                    <Text style={[Styles.menuItemText, Styles.fontSizeLarge]}>
                        获取手机验证码
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.handleLogin.bind(this)}
                    style={[Styles.center,Styles.loginCheck,Styles.bgColorLightRed]}>
                    <Text style={[Styles.menuItemText, Styles.fontSizeLarge]}>
                       登录
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}