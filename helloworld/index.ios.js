/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
//noinspection JSUnresolvedVariable
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Image
} from 'react-native';
/**
 * Animated
 */
class Playground extends React.Component {
    constructor(props) {
        super(props);
        console.log('|-> constructor');
        this.state = {
            bounceValue: new Animated.Value(0)
        };
    }

    render() {
        console.log('|-> render');
        return (
            <Animated.Image                         // 可选的基本组件类型: Image, Text, View
                source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                style={{
                    flex: 1,
                    transform: [                        // `transform`是一个有序数组（动画按顺序执行）
                        {scale: this.state.bounceValue}  // 将`bounceValue`赋值给 `scale`
                    ]
                }}
            />
        );
    }

    componentDidMount() {
        console.log('|-> didMount');
        this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
        Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
            this.state.bounceValue,                 // 将`bounceValue`值动画化
            {
                toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
                friction: 1                       // Bouncier spring
            }
        ).start();                                // 开始执行动画
    }
}

var Main = require('./main.js'); // 主页

AppRegistry.registerComponent('helloworld', () => Main);