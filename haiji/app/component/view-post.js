/**
 * @author neal.ma
 * @email neal.ma.sh@gmail.com
 * @blog http://nealma.com
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    CameraRoll,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView
} from 'react-native';
import Styles from './styles';

export default class HaiJiPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            selected: '',
            placeHolder: '这一刻的想法...',
            text: null,
            openLevel: 0
        };
    }

    componentDidMount() {
        let fetchParams = {
            first: 100,
            assetType: 'All'
            // assetType: 'Photos'
        };
        CameraRoll.getPhotos(fetchParams).then((data) => {
            const edges = data.edges;
            let photos = edges.map(photo=>{
                return photo.node.image.uri
            });
            this.setState({
                photos: photos
            });
        }).catch(alert);
    }

    selectImage(image) {
        this.setState({
            selected: image
        });
    }

    render() {

        const photos = this.state.photos || [];
        let photosView = [];
        for(let i = 0; i < photos.length; i+=4) {
            let imageUri = photos[parseInt(i)];
            let imageUri1 = photos[parseInt(i+1)];
            let imageUri2 = photos[parseInt(i+2)];
            let imageUri3 = photos[parseInt(i+3)];
            photosView.push(
                <View style={Styles.postCameraRollRow} key={i}>
                    <View style={Styles.container}>
                        <TouchableOpacity  onPress={this.selectImage.bind(this,imageUri)}>
                            <Image
                                resizeMode='stretch'
                                style={[Styles.postCameraRollPhoto]}
                                source={{uri: imageUri}} />
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.container}>
                        <TouchableOpacity  onPress={this.selectImage.bind(this,imageUri1)}>
                            <Image
                                resizeMode='stretch'
                                style={[Styles.postCameraRollPhoto]}
                                source={{uri: imageUri1}} />
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.container}>
                        <TouchableOpacity  onPress={this.selectImage.bind(this,imageUri2)}>
                            <Image
                                resizeMode='stretch'
                                style={[Styles.postCameraRollPhoto]}
                                source={{uri: imageUri2}} />
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.container}>
                        <TouchableOpacity  onPress={this.selectImage.bind(this,imageUri3)}>
                            <Image
                                resizeMode='stretch'
                                style={[Styles.postCameraRollPhoto]}
                                source={{uri: imageUri3}} />
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }

        return (
            <View style={[Styles.postContainer, Styles.bgColorWhite]}>
                <TextInput
                    style={Styles.postTextInput}
                    autoCapitalize="none"
                    multiline={true}
                    placeholder={this.state.placeHolder}
                    placeholderTextColor="#bfbfbf"
                    onEndEditing={this.clearFocus}
                    onChangeText={(text) => this.setState({text})}
                />

                <Image
                    resizeMode='stretch'
                    style={[Styles.postPreviewPhoto]}
                    source={{uri: this.state.selected}}/>
                <TouchableOpacity
                    onPress={()=>alert(this.state.text)}
                    style={[Styles.postButton,Styles.bgColorDarkRed]}>
                    <Text style={[Styles.postButtonText, Styles.menuItemText]}>发布</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>this.setState({openLevel: this.state.openLevel==0?1:0})}
                    style={[Styles.postButton,Styles.bgColorDarkRed, Styles.rowDirection,
                        {justifyContent: 'space-between', paddingLeft: 5, paddingRight: 5}]}>
                    <Text style={[Styles.postButtonText,Styles.menuItemText, Styles.centerText]}>谁可以看</Text>
                    <Text style={[Styles.postButtonText,Styles.menuItemText, Styles.centerText,{color: '#bfbfbf'}]}>{this.state.openLevel==0?'公开':'家人'}</Text>
                </TouchableOpacity>
                <ScrollView style={[Styles.postCameraRoll]}>
                    <View>
                        {photosView}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
