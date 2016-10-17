import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    CameraRoll,
    Image,
    ScrollView,
    ListView
} from 'react-native';

const fetchParams = {
    first: 10,
    assetType: 'Photos'
};
const imgURL = 'https://blog.yourtion.com/images/2016/03/'; //backup0.png

export default class CameraRollDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: null
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
        CameraRoll.getPhotos(fetchParams).then((data) => {
            const edges = data.edges;
            let photos = [];
            for(const photo of edges) {
                photos.push(photo.node.image.uri);
            }
            console.log(photos);
            this.setState({
                photos: photos
            });
        }).catch(alert);
        /*
        */
    }

    saveImg(img1) {
        console.log('saveImg');

        CameraRoll.saveToCameraRoll(imgURL + img1, 'photo').then((url) =>{
            if (url){
                let photos = this.state.photos;
                photos.unshift(url);
                this.setState({
                    photos: photos
                });
                alert('保存成功');
            }

        }).catch(alert);
    }

    render() {

        console.log('render');

        const photos = this.state.photos || [];
        let photosView = [];
        for(let i = 0; i < photos.length; i += 2) {
            photosView.push(
                <View style={styles.row} key={i}>
                    <View style={styles.flex}>
                        <Image
                            resizeMode='stretch'
                            style={[styles.imgHeight, styles.m5]}
                            source={{uri: photos[parseInt(i)]}} />
                    </View>
                    <View style={styles.flex}>
                        <Image
                            resizeMode='stretch'
                            style={[styles.imgHeight, styles.m5]}
                            source={{uri: photos[parseInt(i) + 1]}} />
                    </View>
                </View>
            );
        }

        return (
            <ScrollView>
                <View style={styles.row}>
                    <View style={styles.flex}>
                        <Image
                            resizeMode='stretch'
                            style={[styles.imgHeight, styles.m5]}
                            source={{uri: imgURL + 'backup0.png'}} />
                    </View>
                    <View style={styles.flex}>
                        <Image
                            resizeMode='stretch'
                            style={[styles.imgHeight, styles.m5]}
                            source={{uri: imgURL + 'backup1.png'}} />
                    </View>
                </View>
                <View>
                    <Text onPress={this.saveImg.bind(this, 'backup1.png')}
                          style={styles.saveImg}>保存图片到相册</Text>
                </View>
                <View style={styles.marginTop20}>
                    {photosView}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        marginTop: 30,
        flex: 1
    },
    marginTop20:{
        marginTop: 20
    },
    m5: {
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#DDD'
    },
    row: {
        flexDirection: 'row'
    },
    imgHeight: {
        height: 120
    },
    saveImg: {
        flex: 1,
        height: 30,
        textAlign: 'center',
        marginTop: 20,
        backgroundColor: '#3BC1FF',
        color: '#FFF',
        lineHeight: 20,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        fontWeight: 'bold'
    }
});