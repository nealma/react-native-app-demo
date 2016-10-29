import {
    Dimensions
} from 'react-native';
const window = Dimensions.get('window');

module.exports  = {
    iconColorWhite: '#f8f8f8',
    iconColorBrown: '#d68086',
    loadingColor: 'rgba(249,145,146,1)',
    iconSize: 16,
    container: {
        flex: 1,
    },
    rowDirection: {
        flexDirection: 'row',
    },
    paddingLeft: {
        paddingLeft: 10,
        paddingTop: 1
    },
    sidePage: {
        flex: 1,
        flexDirection: 'row',
        height: window.height
    },
    sidePageWidth: {
        width: window.width * 2 / 3
    },
    dayCircle: {
        width: window.width * 1 / 7,
        height: window.width * 1 / 7,
        borderWidth: 1,
        borderColor: 'rgba(255,107,107,1)',
        borderRadius: window.width * 1 / 7 / 2
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 200
    },
    footer : {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:50,
        marginTop: 10
    },
    bgImage: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        resizeMode: 'stretch',
    },
    momentText: {
        height: 30,
        flex: 1,
        color: '#4c4c4c',
        backgroundColor: 'rgba(248,248,248,0.3)'
    },
    profile: {
        flex: 2
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerText: {
        textAlign: 'center'
    },
    margin: {
        marginTop: 30,
        padding: 5
    },
    marginTop5: {
        marginTop: 5
    },
    transparent: {
        backgroundColor: 'transparent'
    },
    profileAvatar: {
        width: 80,
        height: 80,
    },
    profileInfo: {
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'space-around'
    },
    feedbackQrcode: {
        width: window.width*2/3,
        height: window.width*2/3,
        resizeMode: 'stretch',
    },
    feedbackPadding: {
       padding: 15,
    },
    loginMargin: {
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    loginCheck: {
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
    },
    subLogoText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        color: '#f8f8f8',
        opacity: 0.8,
        paddingTop: 50
    },
    loginTop: {
        height: window.height*2/5
    },
    loginText: {
        fontFamily: 'Helvetica Neue',
        color: '#bfbfbf',
        fontWeight: 'bold'
    },
    menu: {
        flex: 4,
    },
    menuItem: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuItemSignOut: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuItemText: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        color: '#f8f8f8',
    },
    menuButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:50,
        padding: 10
    },
    postContainer: {
        flex: 1,
    },
    postTextInput: {
        height: 50,
        margin: 5
    },
    postPreviewPhoto: {
        height: 150,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#DDD'
    },
    postButton: {
        height: 30,
        margin: 5
    },
    postButtonText: {
        textAlign: 'center',
        padding: 5
    },
    postCameraRoll: {
    },
    postCameraRollRow: {
        flexDirection: 'row'
    },
    postCameraRollPhoto: {
        height: 80,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#DDD'
    },
    listLoading: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontSizeLarge: {
        fontSize: 16
    },
    fontSizeLogo: {
        fontSize: 20
    },
    fontSizeMiddle: {
        fontSize: 14
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
        backgroundColor: 'rgba(104,206,241,0.2)'
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
    bgColorDarkRed: {
        backgroundColor: 'rgba(213,70,66,1)'
    },
    bgColorOpacityRed: {
        backgroundColor: 'rgba(249,145,146,1)'
    },
    bgColorLightRed: {
        backgroundColor: 'rgba(255,107,107,1)'
    },
    bgColorWhiteForContainer: {
        backgroundColor: 'rgba(235,235,235,1)'
    },
    fontColorBlack : {
        color: 'rgba(52,62,78,1)'
    },
    menuItemRightIcon: {
        height: 14,
        width: 2
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