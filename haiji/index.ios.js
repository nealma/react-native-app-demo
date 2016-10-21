/**
 * @author neal.ma
 * @email neal.ma.sh@gmail.com
 * @blog http://nealma.com
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import HaijiNavigator from './app/component/view-menu-navigator';

class haiji extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HaijiNavigator style={{flex: 1, backgroundColor: '#FF6644'}} />
        )
    }
}

AppRegistry.registerComponent('haiji', () => haiji);
