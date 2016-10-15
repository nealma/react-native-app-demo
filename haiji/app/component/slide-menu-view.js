/**
 * @author neal.ma
 * @email neal.ma.sh@gmail.com
 * @blog http://nealma.com
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';

import JellySideMenu from 'react-native-jelly-side-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import HaijiListView from './list-view';

class SlideMenu extends Component {

    constructor(props) {
        super(props);
        this.itemStyle = {padding: 16, backgroundColor: 'transparent',
            flex: 1, flexDirection: 'row', justifyContent: 'space-between'};
        this.itemTextStyle = { color: '#000000', fontWeight: 'bold', fontSize: 20};
        this.renderMenu = this.renderMenu.bind(this);
    }

    renderItem(text, onPress) {
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={this.itemStyle}>
                    <Text style={this.itemTextStyle}>{text}</Text>
                    <Icon name="angle-right" size={30} color="#4F8EF7" style={{}}/>
                </View>
            </TouchableOpacity>
        )
    }

    renderMenu() {
        return (
            <View style={{flex: 1, backgroundColor: '#FF6644'}}>
                <View style={{backgroundColor: '#FF6644',
                    flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../../app/resources/ly.png')} style={{width: 100, height: 100}} />
                </View>
                <View style={{flex: 2}}>
                    {this.renderItem("时光", () => {this.jsm.toggleSideMenu(true);})}
                    {this.renderItem("宝贝", () => {this.jsm.toggleSideMenu(false);})}
                    {this.renderItem("反馈", () => {this.jsm.toggleSideMenu(false);})}
                    {this.renderItem("退出", () => {this.jsm.toggleSideMenu(false);})}
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#FF6644'}}>
                <JellySideMenu
                    ref={(view) => {this.jsm = view}}
                    fill={"#FFF"} fillOpacity={1.0}
                    renderMenu={this.renderMenu}>

                    <HaijiListView />

                </JellySideMenu>
            </View>
        )
    }

}

var styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    itemStyle: {

    },
    navBar: {
        height: 64,
        backgroundColor: '#CCC'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        height: 200,
        backgroundColor: '#FFF'

    },
    loading: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bgImage: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch',
    }
};

module.exports = SlideMenu;