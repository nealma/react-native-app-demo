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
    Navigator,
    Text
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import HaijListView from './view-list';
const RESOURCE_AVATAR = require('../../app/resources/ly.png');
const window = Dimensions.get('window');

export  default class MenuNavigator extends Component {

    constructor(props) {
        super(props);
        this._setNavigatorRef = this._setNavigatorRef.bind(this);
    }

    renderScene(route, nav) {
        switch (route.id) {
            case 'shiguangji':
                return <ListViewPageMenu navigator={nav} />;
            case 'baobaoquan':
                return <ListViewPageMenu navigator={nav} />;
            case 'fankui':
                return <ListViewPageMenu navigator={nav} />;
            case 'tuichu':
                return <ListViewPageMenu navigator={nav} />;
            default:
                return <ListViewPageMenu navigator={nav} />;
        }
    }

    render() {
        return (
            <Navigator
                ref={this._setNavigatorRef}
                initialRoute={{id: 'shiguangji'}}
                renderScene={this.renderScene}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromBottom;
                }}
            />
        );
    }

    componentWillUnmount() {
        this._listeners && this._listeners.forEach(listener => listener.remove());
    }

    _setNavigatorRef(navigator) {
        if (navigator !== this._navigator) {
            this._navigator = navigator;

            if (navigator) {
                var callback = (event) => {
                    console.log(
                        `NavigatorMenu: event ${event.type}`,
                        {
                            route: JSON.stringify(event.data.route),
                            target: event.target,
                            type: event.type,
                        }
                    );
                };
                // Observe focus change events from the owner.
                this._listeners = [
                    navigator.navigationContext.addListener('willfocus', callback),
                    navigator.navigationContext.addListener('didfocus', callback),
                ];
            }
        }
    }
}

class ListViewPageMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
        this.props.navigator.push({ id: item });
    }

    render() {

        const menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;

        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <MenuButton onPress={() => this.toggle()} />
                <HaijListView />
            </SideMenu>
        );
    }
}

class Menu extends Component {

    static propTypes = {
        onItemSelected: React.PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
    }
    renderItem(id, text) {
        return (
            <TouchableOpacity onPress={()=>this.props.onItemSelected(id)}>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>{text}</Text>
                    <Icon name="angle-right" size={30} color="#4F8EF7"/>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <ScrollView scrollsToTop={false} style={styles.sidePage}>
                <View style={styles.profile}>
                    <Image source={ RESOURCE_AVATAR } style={styles.profileAvatar} />
                </View>
                <View style={styles.menu}>
                    {this.renderItem('shiguangji', '时光机')}
                    {this.renderItem('baobaoquan', '宝宝圈')}
                    {this.renderItem('fankui', '反馈')}
                    {this.renderItem('tuichu', '退出')}
                </View>
            </ScrollView>
        );
    }
};

class MenuButton extends Component {
    handlePress(e) {
        if (this.props.onPress) {
            this.props.onPress(e);
        }
    }

    render() {
        return (
            <View style={styles.menuButton}>
                    <TouchableOpacity onPress={this.handlePress.bind(this)} >
                        <Icon name="bars" size={20} color='#9ed8a6'/>
                    </TouchableOpacity>
                    <Text>孩记</Text>
                    <Icon name="camera" size={20} color="#9ed8a6" onPress={() => onPress(object)}/>
                </View>
        );
    }
}

var styles = {
    sidePage: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'gray'
    },
    profile: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#484848',
        width: window.width * 2 / 3
    },
    profileAvatar: {
        width: 100,
        height: 100
    },
    menu: {
        flex: 3,
        backgroundColor: '#cbcbcb',
        width: window.width * 2 / 3
    },
    menuItem: {
        padding: 16,
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuItemText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20
    },
    menuButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:50,
        backgroundColor:'#fcb064',
        paddingLeft: 5,
        paddingRight: 5
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