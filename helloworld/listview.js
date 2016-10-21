/**
 * @author neal.ma
 * @email neal.ma.sh@gmail.com
 * @blog http://nealma.com
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    ListView,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity,
    Text
} from 'react-native';

import StaticContainer from 'react-static-container';

export default class List extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2, //1, 对变化的行渲染
            sectionHeaderHasChanged : (s1, s2) => s1 !== s2 //2, 分组头部信息变更
        });
        let rowData = Array.from(new Array(10)).map((val, i) => ({title: '初始化数据 ' + i}));
        this.state = {
            dataSource: ds.cloneWithRows(rowData),
            data: rowData,
            isLoaded: false,
            isRefreshing: false,
            hasLoadMore: true
        };
    }

    render() {
        if (!this.state.isLoaded) {//3, loading
            return <Loading/>;
        }

        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}/* 要渲染的数据源，类型是数组 */
                renderRow={(rowData) => this._renderRowView(rowData, this._onPress)}
                onEndReached={this._handleLoadMore.bind(this)} /* 滑动偏移量 > onEndReachedThreshold的像素值时，触发 */
                onEndReachedThreshold={5} /* 调用onEndReached之前的临界值，单位是像素 */
                initialListSize={8} /* 初始值 */
                pageSize={8}/* 每次事件循环（每帧）渲染的行数 */
                renderHeader={this._renderHeader.bind(this)}
                renderFooter={this._renderFooter.bind(this)}
                /*renderSectionHeader={this._renderSectionHeader.bind(this)}*/
                enableEmptySections={true}
                refreshControl={
                    <RefreshControl // 下拉刷新
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}/* 下拉刷新时，触发此事件*/
                        title={this.state.isRefreshing? '刷新中....':'下拉刷新'}
                        colors={['#fb96cf', '#fb96cf','#fb96cf','#fb96cf']}
                        tintColor='#fb96cf'
                        progressBackgroundColor="#fb96cf"
                    />
                }
            />
        );
    }
    componentDidMount() {
        setTimeout(() => this.setState({isLoaded: true}),2000);
    }

    _onFetch(isLoadMore) {
        if(isLoadMore){
            let moreData = Array.from(new Array(10)).map((val, i) => ({title: 'Load More 数据行 ' + i}));
            moreData = this.state.data.concat(moreData);
            this.setState({
                data: moreData,
                dataSource:this.state.dataSource.cloneWithRows(moreData),
                loaded:true
            });
        }else{
            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(this.state.data),
                loaded:true
            });
        }
    }

    _renderRowView(rowData, onPress) {
        return (
            <TouchableOpacity
                underlayColor='#484848'
                onPress={(rowData) => onPress(rowData)}>
                <View style={styles.row}>
                    <View style={{flex: 1, backgroundColor: '#c8c7cc'}}/>
                    <View style={{flex: 20, backgroundColor: '#EFE',justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{
                            borderColor: '#d1d1d1',
                            borderWidth: 2,
                            borderRadius: 5 }}>{rowData.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    _onPress(rowData) {
        // 点击 item
        console.log(rowData, 'pressed');
    }

    _onRefresh() {
        // 刷新
        this.setState({isRefreshing: true});
        console.log('refresh', this.state.data);
        setTimeout(() => {
            this._onFetch(false);
            this.setState({isRefreshing: false});
        },2000);
    }

    _handleLoadMore() {
        // 加载更多
        console.log('load more',this.state.data);
        if(this.state.data.length > 20){
            this.setState({hasLoadMore: false});
        }else{
            setTimeout(() => {this._onFetch(true);},2000);
        }
    }
    _renderHeader(){
        return(
            <Header />
        );
    }
    _renderFooter(){

        return(
            this.state.hasLoadMore?<Footer/>:null
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
class Loading extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.loading}>
                    <ActivityIndicator
                        size='large'
                        color='#eabb33'/>
                </View>
            </View>
        );
    };
}
class Footer extends Component {
    render(){
        return(
            <StaticContainer>
                <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center', height:50, backgroundColor:'#fb96cf'}}>
                    <Text></Text>
                    <Text>加载更多</Text>
                    <Text></Text>
                </View>
            </StaticContainer>
        );
    }
}

var styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFF'
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
        height: 100,
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
        width: 300,
        height: 100
    }
};