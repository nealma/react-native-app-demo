/**
 * @author neal.ma
 * @email neal.ma.sh@gmail.com
 * @blog http://nealma.com
 */
import React, {Component} from 'react';
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
import Config from './config';

export default class Menu extends Component {

    static propTypes = {
        onItemSelected: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    renderItem(index, text, icon) {
        // if(icon === 'sign-out'){
        //     return (
        //         <TouchableOpacity style={[Styles.bgColorLightRed]} onPress={()=>this.props.onItemSelected(index)} key={index}>
        //             <View style={Styles.menuItemSignOut} key={index}>
        //                 <Text style={[Styles.menuItemText, Styles.fontSizeMiddle, Styles.paddingLeft]}>{text}</Text>
        //             </View>
        //         </TouchableOpacity>
        //     );
        // }
        return (
            <TouchableOpacity style={[Styles.bgColorLightRed, Styles.marginTop5]} onPress={()=>this.props.onItemSelected(index)} key={index}>
                <View style={Styles.menuItem} key={index}>
                    <Text style={[Styles.menuItemText, Styles.fontSizeMiddle, Styles.paddingLeft]}>{text}</Text>
                    <Icon name='angle-right' size={Styles.iconSize} color="rgba(249,145,146,1)"/>
                </View>
            </TouchableOpacity>
        )
    }

    renderMenus(){
        return Config.menus.map((menu)=>(this.renderItem(menu.index, menu.text, menu.icon)));
    }

    render() {
        return (
            <ScrollView scrollsToTop={false} style={[Styles.sidePage, Styles.bgColorDarkRed]}>
                <View style={[Styles.profile, Styles.sidePageWidth]}>
                    <View style={[Styles.center, Styles.margin]}>
                        <Image source={ RESOURCE_AVATAR } style={Styles.profileAvatar}/>
                        <Text style={[Styles.menuItemText]}>芽芽爸爸</Text>
                    </View>
                    <View style={[Styles.profileInfo]}>
                        <View style={[Styles.dayCircle]}>
                            <Text style={[Styles.transparent, Styles.container]}/>
                            <Text style={[Styles.menuItemText, Styles.container, Styles.transparent, Styles.centerText]}>+孩儿</Text>
                            <Text style={[Styles.transparent, Styles.container]}/>
                        </View>
                        <View style={[Styles.dayCircle]}>
                            <Text style={[Styles.transparent, Styles.container]}/>
                            <Text style={[Styles.menuItemText, Styles.container, Styles.transparent, Styles.centerText]}>+家人</Text>
                            <Text style={[Styles.transparent, Styles.container]}/>
                        </View>
                    </View>
                </View>
                <View style={[Styles.menu]}>
                    {this.renderMenus()}
                </View>
            </ScrollView>
        );
    }
};