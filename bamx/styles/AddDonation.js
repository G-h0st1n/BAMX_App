import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

"use strict";

var React = require('react-native');

var addStyle = React.StyleSheet.create({
  container: {
    flex: 1
  },
  bg:{
    flex:4
  },
  backdrop_container: {
    marginTop: verticalScale(120),
    height:verticalScale(250),
    padding: moderateScale(15),
    margin:moderateScale(30),
    backgroundColor: '#FFFAD8',
    borderRadius: 8,
  },
    button_container:{
    margin:5,
  },
  headerText:{
    bottom:verticalScale(-100),
    textAlign:'center',
    fontSize: scale(25),
    color: '#FFFAD8',
    fontFamily:'sans-serif-medium'
  }, 
  optionText: {
    fontSize:moderateScale(15)
  },
  forumText:{
    borderWidth:2,
    borderColor:'#B3B3B3',
    borderRadius:4,
    marginBottom:verticalScale(8)
  },
  goBackButton: {
    position: 'absolute',
    top: verticalScale(40),
    left: verticalScale(15),
    width: moderateScale(30),
    height: verticalScale(30),
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  goBackImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

});

module.exports = addStyle;