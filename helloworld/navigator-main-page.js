import React from 'react';
import {
    View,
    Navigator
} from 'react-native';
import FirstPageComponent from './navigator-first-page';
import SecondPageComponent from './navigator-second-page';


export default class SampleComponent extends React.Component {
    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = FirstPageComponent;
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