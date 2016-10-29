/**
 * @author neal.ma
 * @email neal.ma.sh@gmail.com
 * @blog http://nealma.com
 */
import React, { Component } from 'react';
import { Navigator } from 'react-native';

import PhotosPageMenu from './view-menu-page-photos';
import ListViewPageMenu from './view-menu-page-list';
import HaijiFeedbackPageMenu from './view-menu-page-feedback';
import HaijiPostPageMenu from './view-menu-page-post';
import HaijiLogoutPageMenu from './view-menu-page-logout';
import Config from './config';
export default class MenuNavigator extends Component {

    constructor(props) {
        super(props);
        this._setNavigatorRef = this._setNavigatorRef.bind(this);
    }

    renderScene(route, nav) {
        switch (route.id) {
            case 0:
                return <ListViewPageMenu navigator={nav} />;
            case 1:
                return <PhotosPageMenu navigator={nav} />;
            case 2:
                return <HaijiPostPageMenu navigator={nav} />;
            case 3:
                return <HaijiFeedbackPageMenu navigator={nav} />;
            case 4:
                return <HaijiLogoutPageMenu navigator={nav} />;
            default:
                return <ListViewPageMenu navigator={nav} />;
        }
    }

    render() {
        return (
            <Navigator
                ref={this._setNavigatorRef}
                initialRoute={{id: Config.menus[4].index}}
                renderScene={this.renderScene}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return {
                        ...Navigator.SceneConfigs.FloatFromRight,
                        gesture: false
                    }
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
                    // console.log(
                    //     `NavigatorMenu: event ${event.type}`,
                    //     {
                    //         route: JSON.stringify(event.data.route),
                    //         target: event.target,
                    //         type: event.type,
                    //     }
                    // );
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