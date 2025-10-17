import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

"use strict";

var React = require('react-native');

var signupStyle = React.StyleSheet.create({
  container: {
    flex: 1
  },
  bg:{
    flex:4
  },
  backdrop_container: {
    marginTop: verticalScale(110),
    height:verticalScale(340),
    padding: moderateScale(15),
    margin:moderateScale(30),
    backgroundColor: '#FFFAD8',
    borderRadius: 8,
  },
    button_container:{
    margin:5
  },
  headerText:{
    bottom:verticalScale(-90),
    textAlign:'center',
    fontSize: 25,
    color: '#FFFAD8',
    fontFamily:'sans-serif-medium'
  }, 
  optionText: {
    fontSize:moderateScale(15)
  },
  forumText:{
    borderWidth:2,
    borderColor:'#B3B3B3',
    borderRadius:8,
    marginBottom:verticalScale(16)
  },
  goBackImg:{
    marginLeft:horizontalScale(15),
    bottom:verticalScale(-20),
    width:horizontalScale(25),
    height:verticalScale(25)
  }
});

module.exports = signupStyle;