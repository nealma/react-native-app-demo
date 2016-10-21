/**
 * @author neal.ma
 * @email neal.ma.sh@gmail.com
 * @blog http://nealma.com
 */
import React, { Component } from 'react';

import SideMenu from 'react-native-side-menu';
import HaijiCameraRoll from './view-photos';
import Menu from './view-menu';
import Header from './view-header';

export default class PhotosPageMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen, });
    }

    onMenuItemSelected = (item) => {
        let nodes = this.props.navigator.getCurrentRoutes();
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
        if(!nodes.find((node)=>node.id == item)){
            this.props.navigator.push({ id: item });
        }else{
            this.toggle();
            this.props.navigator.jumpTo(nodes.find((node)=>node.id == item));
        }
    }

    render() {

        const menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;

        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <Header menuOnPress={() => this.toggle()} photoOnPress={() => this.toggle()} />
                <HaijiCameraRoll />
            </SideMenu>
        );
    }
}
