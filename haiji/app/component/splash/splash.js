/**
 *  闪屏页面
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    StatusBar
} from 'react-native';

import main from '../main/main';

class splash extends Component{
    constructor(props){
        super(props);
        this.state = {splash:true};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigator.replace({
                name:"home",
                component:main
            });
        },1000);
    }
    render(){
        let {width,height} = Dimensions.get("window");
        return (
            <View style={{flex:1}}>
                <StatusBar hidden={true}/>
                <Image source={require('../../images/splash/19-58-28.jpg')} style={{width:width,height:height}}/>
            </View>
        );
    }
}

//noinspection JSUnresolvedVariable
module.exports = splash;