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

import StaticContainer from 'react-static-container';
import Styles from './styles';
import Config from './config';
import Footer from './view-footer';
import Loading from './view-loading';

export default class HaijiAllyKids extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
        let rowData = Config.list;
        this.state = {
            dataSource: ds.cloneWithRows(rowData),
            data: rowData,
            isLoaded: false,
            isRefreshing: false,
            hasLoadMore: true
        };
    }

    componentDidMount() {
        console.log(Config.list)
        setTimeout(() => this.setState({isLoaded: true}), 1000);
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <Loading/>
            )
        }

        return (
            <ListView
                style={[Styles.bgColorWhite]}
                dataSource={this.state.dataSource}/* 要渲染的数据源，类型是数组 */
                renderRow={(rowData) => this._renderRowView(rowData, this._onPress)}
                onEndReached={this._handleLoadMore.bind(this)} /* 滑动偏移量 > onEndReachedThreshold的像素值时，触发 */
                onEndReachedThreshold={5} /* 调用onEndReached之前的临界值，单位是像素 */
                initialListSize={8} /* 初始值 */
                pageSize={8}/* 每次事件循环（每帧）渲染的行数 */
                /*renderHeader={this._renderHeader.bind(this)}
                 renderSectionHeader={this._renderSectionHeader.bind(this)}*/
                renderFooter={this._renderFooter.bind(this)}
                enableEmptySections={true}
                refreshControl={
                    <RefreshControl // 下拉刷新
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}/* 下拉刷新时，触发此事件*/
                        title={this.state.isRefreshing ? '释放刷新....' : '下拉刷新'}
                        colors={['#fb96cf', '#fb96cf', '#fb96cf', '#fb96cf']}
                        tintColor={Styles.loadingColor}
                        progressBackgroundColor="#fb96cf"
                    />
                }
            />
        )
    }

    _renderRowView(rowData, onPress) {
        return (
            <TouchableOpacity
                onPress={(rowData) => onPress(rowData)}>
                <View style={Styles.row}>
                    <View style={[{flex: 2}, Styles.bgColorOpacityRed]}/>
                    <View style={[{flex: 20}, Styles.transparent, Styles.center]}>
                        <View style={[Styles.dayCircle]}>
                            <Text style={{flex: 1, textAlign: 'center'}}></Text>
                            <Text style={{flex: 1, textAlign: 'center'}}>{ rowData.belongToText }</Text>
                            <Text style={{flex: 1, textAlign: 'center'}}></Text>
                        </View>
                    </View>
                    <View style={{flex: 100}}>
                        <Image source={{uri: rowData.pics[0].url}} style={[Styles.bgImage]}>
                            <Text style={[Styles.momentText]}>{rowData.title}</Text>
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

    _onFetch(isLoadMore) {
        if (isLoadMore) {
            let moreData = Config.list;
            moreData = this.state.data.concat(moreData);
            this.setState({
                data: moreData,
                dataSource: this.state.dataSource.cloneWithRows(moreData),
                loaded: true
            });
        } else {
            this.setState({
                data: Config.list,
                dataSource: this.state.dataSource.cloneWithRows(Config.list),
                loaded: true
            });
        }
    }

    _onRefresh() {
        // 刷新
        this.setState({isRefreshing: true, hasLoadMore: true});
        console.log('refresh', this.state.data);
        setTimeout(() => {
            this._onFetch(false);
            this.setState({isRefreshing: false});
        }, 1000);
    }

    _handleLoadMore() {
        // 加载更多
        if (this.state.data.length > 6) {
            this.setState({hasLoadMore: false});
        } else {
            setTimeout(() => {
                this._onFetch(true);
            }, 1000);
        }
    }

    _renderHeader() {
        return (
            <Header />
        );
    }

    _renderFooter() {
        let text = this.state.hasLoadMore ? '努力加载中...':'没有更多了:)~';
        return (
            <Footer text={text}/>
        );
    }

    _renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={{backgroundColor: '#fbfbfb'}}>
                <Text>{sectionID}</Text>
            </View>
        );

    }
}
class Header extends Component {
    render(){
        return(
            <StaticContainer>
                <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center', height:50, backgroundColor:'#fb96cf'}}>
                    <Text></Text>
                    <Text>列表组件</Text>
                    <Text></Text>
                </View>
            </StaticContainer>
        );
    }
}