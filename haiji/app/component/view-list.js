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
    ListView,
    ActivityIndicator,
    RefreshControl,
    Text
} from 'react-native';

const API_URL = 'https://api.douban.com/v2/music/search?q=love';
import StaticContainer from 'react-static-container';
import Icon from 'react-native-vector-icons/FontAwesome';
import HaijiCameraRoll from './view-photos';
import Styles from './styles';

export default class HaijiListView extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged : (s1, s2) => s1 !== s2
        });
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
                <View style={[Styles.container, Styles.center, Styles.bgColorWhite]}>
                    <ActivityIndicator
                        size='large'
                        color='#eabb33'/>
                </View>
            )
        }

        return (
            <ListView
                style={[Styles.bgColorWhite]}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this._renderRowView(rowData, this._onPress)}
                onEndReached={this._handleLoadMore.bind(this)}
                initialListSize={8}
                pageSize={8}
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
                    // console.log(musics)
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
                onPress={(rowData) => onPress(rowData)}>
                <View style={Styles.row}>
                    <View style={[{flex: 2}, Styles.bgColorLightPurple]}/>
                    <View style={[{flex: 20}, Styles.transparent, Styles.center]}>
                        <Text style={[
                            {borderWidth: 1},Styles.dayCircle, Styles.borderColorBrown]}>{ rowData.attrs.pubdate }天</Text>
                    </View>
                    <View style={{flex: 100}}>
                        <Image source={{uri: rowData.image}} style={Styles.bgImage}>
                            <Text style={[Styles.bgColorWhite]}>{rowData.title}</Text>
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
    _goPhotos(object) {
        // 打开相册
        const { navigator } = object.props;
        if(navigator) {
            navigator.push({
                name: '相册',
                component: HaijiCameraRoll
            });
        }
    }

    _handleLoadMore() {
        // 加载更多
        this._onFetch(true);
    }
    _renderHeader(object,onPress){
        return(
            <StaticContainer>
                <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center', height:50, backgroundColor:'red'}}>
                    <Text></Text>
                    <Text>孩记</Text>
                    <Icon name="camera" size={20} color="#4F8EF7" onPress={() => onPress(object)}/>
                </View>
            </StaticContainer>
        )
    }
    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.section}>
                <Text style={styles.sectionText}>{sectionID}</Text>
            </View>
        )
    }
}