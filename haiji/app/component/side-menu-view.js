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
    Dimensions,
    ScrollView,
    Text
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import HaijiListView from './list-view';
const window = Dimensions.get('window');

export  default class Menu extends Component {

    constructor(props) {
        super(props);
        this.itemStyle = {padding: 16, backgroundColor: 'transparent',
            flex: 1, flexDirection: 'row', justifyContent: 'space-between'};
        this.itemTextStyle = { color: '#000000', fontWeight: 'bold', fontSize: 20};
        this.state = {isOpen :false};
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen, });
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
    }

    renderItem(text, onPress) {
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={this.itemStyle}>
                    <Text style={this.itemTextStyle}>{text}</Text>
                    <Icon name="angle-right" size={30} color="#4F8EF7"/>
                </View>
            </TouchableOpacity>
        )
    }

    renderMenu() {
        return (
            <ScrollView scrollsToTop={false} style={styles.container}>
                <View style={{flex: 1, justifyContent: 'center',
                    alignItems: 'center',backgroundColor: '#484848', width: window.width * 2 / 3}}>
                    <Image source={require('../../app/resources/ly.png')} style={{width: 100, height: 100}} />
                </View>
                <View style={{flex: 3, backgroundColor: '#cbcbcb', width: window.width * 2 / 3}}>
                    {this.renderItem("时光机")}
                    {this.renderItem("宝贝圈")}
                    {this.renderItem("反馈")}
                    {this.renderItem("退出")}
                </View>
            </ScrollView>
        )
    }

    render() {
        const  m = this.renderMenu();
        return (
            <SideMenu style={styles.container}
                menu={m}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <HaijiListView style={styles.color1} />
            </SideMenu>
        )
    }

}

class Button extends Component {
    handlePress(e) {
        if (this.props.onPress) {
            this.props.onPress(e);
        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.handlePress.bind(this)}
                style={this.props.style}>
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

var styles = {
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: 'gray',
        padding: 20,
    },
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    },
    name: {
        position: 'absolute',
        left: 70,
        top: 20,
    },
    item: {
        fontSize: 14,
        fontWeight: '300',
        paddingTop: 5,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'gray',
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
    },
    color1 : {
        color: '#cb7dc9'
    },
    color2 : {
        color: '#fcb064'
    },
    color3 : {
        color: '#68cef1'
    },
    color4 : {
        color: '#f8f8f8'
    },
    color5 : {
        color: '#919191'
    },
    color6 : {
        color: '#9ed8a6'
    },
    color7 : {
        color: '#d68086'
    },
    color8 : {
        color: '#68cef2'
    },
    color9 : {
        color: '#4c4c4c'
    }
};