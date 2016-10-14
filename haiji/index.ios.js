/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ListView,
    ActivityIndicator,
    RefreshControl,
    Text
} from 'react-native';

import JellySideMenu from 'react-native-jelly-side-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
const API_URL = 'https://api.douban.com/v2/music/search?q=love';

class haiji extends Component {

    constructor(props) {
        super(props);
        this.itemStyle = {padding: 16, backgroundColor: 'transparent',
            flex: 1, flexDirection: 'row', justifyContent: 'space-between'};
        this.itemTextStyle = { color: '#000000', fontWeight: 'bold', fontSize: 20};
        this.renderMenu = this.renderMenu.bind(this);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{title: 'fuck'}]),
            loaded:false,
            refreshing: false
        };
        this._onFetch(false);
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
                    <Image source={require('./resources/ly.png')} style={{width: 100, height: 100}} />
                </View>
                <View style={{flex: 2}}>
                    {this.renderItem("时光", () => {this.jsm.toggleSideMenu(true);})}
                    {this.renderItem("反馈", () => {this.jsm.toggleSideMenu(false);})}
                    {this.renderItem("宝贝", () => {this.jsm.toggleSideMenu(false);})}
                    {this.renderItem("退出", () => {this.jsm.toggleSideMenu(false);})}
                </View>
            </View>
        )
    }

    render() {
        if (!this.state.loaded) {
            return (
                <View style={styles.container}>
                    <View style={styles.loading}>
                        <ActivityIndicator
                            size='large'
                            color='#eabb33'/>
                    </View>
                </View>
            )
        }

        return (
            <View style={{flex: 1, backgroundColor: '#FF6644'}}>
                <JellySideMenu
                    ref={(view) => {this.jsm = view}}
                    fill={"#FFF"} fillOpacity={1.0}
                    renderMenu={this.renderMenu}>

                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this._renderRowView(rowData, this._onPress)}
                        onEndReached={this._handleLoadMore.bind(this)}
                        refreshControl={
                            <RefreshControl // 下拉刷新
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                                title={'下拉刷新'}
                            />
                        }
                    />
                </JellySideMenu>
            </View>
        )
    }

//  listview demo

    _musics = [];

    _onFetch(loadmore) {
        fetch(API_URL)
            .then(response => response.json())
            .then(musics => {
                if(loadmore){
                    _musics = _musics.concat(musics.musics);
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(_musics),
                        loaded:true
                    })
                }else{
                    _musics = musics.musics;
                    console.log(_musics)
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(_musics),
                        loaded:true
                    })
                }

            })
            .done();
    }

    _onPress(rowData) {
        console.log(rowData + 'pressed');
    }

    /**
     * Render a row
     * @param {object} rowData Row data
     */
    _renderRowView(rowData, onPress) {
        return (
            <TouchableHighlight
                underlayColor='#c8c7cc'
                onPress={(rowData) => onPress(rowData)}>
                <View style={styles.row}>
                    <View style={{flex: 1, backgroundColor: '#c8c7cc'}}/>
                    <View style={{flex: 20, backgroundColor: '#EFE',justifyContent: 'center', alignItems: 'center'}}>
                        <Text>16年</Text>
                        <Text>10月</Text>
                        <Text>13日</Text>
                    </View>
                    <View style={{flex: 100}}>
                        <Image source={{uri: rowData.image}} style={styles.bgImage}>
                            <Text style={{backgroundColor: 'transparent'}}>{rowData.title}</Text>
                        </Image>
                    </View>

                </View>
            </TouchableHighlight>
        );
    }

    _onRefresh() {
        // 刷新
        this._onFetch(false);
    }

    _handleLoadMore() {
        // 加载更多
        this._onFetch(true);
    }

}

var styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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
        alignItems: 'stretch',
        resizeMode: 'stretch',
    }
};
AppRegistry.registerComponent('haiji', () => haiji);
