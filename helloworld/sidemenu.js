import  {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

import React, {Component}  from 'react';
import SideMenu from 'react-native-side-menu';

export  default  class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen, });
    }

    onMenuItemSelected = (item) => {
        //TODO：单击菜单的后续动作, 跳转到相应的页面
        alert("单击 " + item);
    }

    render() {
        const menu = <LeftView onItemSelected={this.onMenuItemSelected} />;
        return (
            <SideMenu
                menu={menu} /* 设置左侧页面(菜单) */
                isOpen={this.state.isOpen}/* 状态控制: true 打开，false 关闭*/
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <ContentView />
            </SideMenu>
        );
    }
}

class ContentView extends Component {
    render() {
        return (
            <View style={styles.page}><Text style={styles.pageContent}>Content</Text></View>
        );
    }
}

class LeftView extends Component {

    static propTypes = {
        onItemSelected: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView scrollsToTop={true} style={styles.menu}>
                <Text
                    onPress={() => this.props.onItemSelected('first')}
                    style={styles.item}>
                    First
                </Text>

                <Text
                    onPress={() => this.props.onItemSelected('second')}
                    style={styles.item}>
                    Second
                </Text>

                <Text
                    onPress={() => this.props.onItemSelected('third')}
                    style={styles.item}>
                    Third
                </Text>
            </ScrollView>
        );
    }
};

var styles = StyleSheet.create({
    menuButton: {
        backgroundColor: '#777'
    },
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        padding: 20,
    },
    item: {
        fontSize: 16,
        fontWeight: '300',
        paddingTop: 20,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#777'
    },
    pageContent: {
        flex: 1,
        alignItems: 'center',
        top: 200,
    },
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        padding: 20,
    },
    item: {
        fontSize: 16,
        fontWeight: '300',
        paddingTop: 20,
    },
});