/**
 * @author neal.ma
 * @email neal.ma.sh@gmail.com
 * @blog http://nealma.com
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const RESOURCE_AVATAR = require('../../app/resources/ly.png');
import Styles from './styles';

export default class Menu extends Component {

    static propTypes = {
        onItemSelected: React.PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
    }
    renderItem(id, text) {
        return (
            <TouchableOpacity onPress={()=>this.props.onItemSelected(id)}>
                <View style={Styles.menuItem}>
                    <Text style={[Styles.menuItemText, Styles.fontSizeMiddle]}>{text}</Text>
                    <Icon name="angle-right" size={Styles.iconSize} color="#d68086"/>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <ScrollView scrollsToTop={false} style={Styles.sidePage}>
                <View style={[Styles.profile,Styles.sidePageWidth, Styles.bgColorLightBlue]}>
                    <Image source={ RESOURCE_AVATAR } style={Styles.profileAvatar} />
                </View>
                <View style={[Styles.menu, Styles.bgColorWhite]}>
                    {this.renderItem('shiguangji', '时光机')}
                    {this.renderItem('baobaoquan', '宝宝圈')}
                    {this.renderItem('fankui', '反馈')}
                    {this.renderItem('tuichu', '退出')}
                </View>
            </ScrollView>
        );
    }
};