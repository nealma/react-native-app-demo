import React from 'react';
import {
    View,
    Navigator
} from 'react-native';
import FirstPage from './navigator-first-page';

export default class Main extends React.Component {
    render() {
        let defaultName = 'FirstPage';
        let defaultComponent = FirstPage;
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