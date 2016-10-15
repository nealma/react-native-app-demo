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
    ListView,
    ActivityIndicator,
    RefreshControl,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const API_URL = 'https://api.douban.com/v2/music/search?q=love';

class HaijiListView extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{title: 'fuck'}]),
            loaded: false,
            refreshing: false
        };
        this._onFetch(false)
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
        )
    }

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

    _renderRowView(rowData, onPress) {
        return (
            <TouchableOpacity
                underlayColor='#000'
                onPress={(rowData) => onPress(rowData)}>
                <View style={styles.row}>
                    <View style={{flex: 1, backgroundColor: '#c8c7cc'}}/>
                    <View style={{flex: 20, backgroundColor: '#EFE',justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="angle-right" size={30} color="#4F8EF7" style={{}}/>

                        <Text style={{
                            borderColor: '#d1d1d1',
                            borderWidth: 2,
                            borderRadius: 20 }}>{ rowData.attrs.pubdate }天</Text>
                    </View>
                    <View style={{flex: 100}}>
                        <Image source={{uri: rowData.image}} style={styles.bgImage}>
                            <Text style={{backgroundColor: 'transparent'}}>{rowData.title}</Text>
                        </Image>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    _onPress(rowData) {
        // 点击 item
        console.log(rowData + 'pressed');
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

module.exports = HaijiListView;