import React from 'react';
import {
    View,
    Navigator
} from 'react-native';
import HaijiSideMenu from './view-side-menu';

export default class HaijiNavigator extends React.Component {
    render() {
        let defaultName = '聚宝盆';
        let defaultComponent = HaijiSideMenu;
        console.log(defaultName)
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    const Component = route.component;
                    return (<Component {...route.params} navigator={navigator} />);
                }} />
        );
    }
}