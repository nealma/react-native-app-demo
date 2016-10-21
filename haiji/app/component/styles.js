import {
    Dimensions
} from 'react-native';
const window = Dimensions.get('window');

module.exports  = {
    iconColorWhite: '#f8f8f8',
    iconColorBrown: '#d68086',
    iconSize: 16,
    container: {
        flex: 1,
    },
    sidePage: {
        flex: 1,
        flexDirection: 'row',
    },
    sidePageWidth: {
        width: window.width * 2 / 3
    },
    dayCircle: {
        width: window.width * 1 / 7,
        height: window.width * 1 / 7,
        lineHeight: window.width * 1 / 7,
        borderRadius: window.width * 1 / 7 / 2
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 200
    },
    bgImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch',
    },
    profile: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    transparent: {
        backgroundColor: 'transparent'
    },
    profileAvatar: {
        width: 100,
        height: 100
    },
    menu: {
        flex: 3,
    },
    menuItem: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuItemText: {
        lineHeight: 20,
    },
    menuButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:50,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 15
    },
    fontSizeLarge: {
        fontSize: 16
    },
    fontSizeMiddle: {
        fontSize: 12
    },
    fontSizeSmall: {
        fontSize: 8
    },
    bgColorDarkPurple : {
        backgroundColor: '#cb7dc9'
    },
    bgColorLightPurple : {
        backgroundColor: '#fb96cf'
    },
    bgColorLightBlue : {
        backgroundColor: '#68cef1'
    },
    bgColorWhite : {
        backgroundColor: '#f8f8f8'
    },
    bgColorLightGray : {
        backgroundColor: '#919191'
    },
    bgColorLightGreen : {
        backgroundColor: '#9ed8a6'
    },
    bgColorOrange : {
        backgroundColor: '#fcb064'
    },
    bgColorBrown : {
        backgroundColor: '#d68086'
    },
    bgColorDarkGray : {
        backgroundColor: '#4c4c4c'
    },
    fontColorWhite : {
        color: '#f8f8f8'
    },
    fontColorLightGray : {
        color: '#919191'
    },
    borderColorBrown: {
        borderColor: '#d68086'
    }

};