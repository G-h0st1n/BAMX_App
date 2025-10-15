import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

"use strict";

var React = require('react-native');

var colectaStyle = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAD8"
  },
  goBackImg:{
    marginLeft:15,
    bottom:-20,
    width:25,
    height:25,
    position:'relative'
  },
  headerImg: {
    width: horizontalScale(420),
    height:verticalScale(100),
  },
  header:{
    backgroundColor: '#FFAF00',
    width:horizontalScale(210*2),
    height:verticalScale(80),
    padding:10
  },
  headerText:{
    textAlign:'left',
    fontSize:moderateScale(30),
    color: '#5C2204'
  },
  subText:{
    textAlign:'left',
    fontSize:moderateScale(15),
    color: '#5C2204'
  },
  desc:{
    backgroundColor: '#FFAF00',
    borderRadius: 8,
    marginLeft:moderateScale(8),
    width:horizontalScale(180*2),
    height:verticalScale(90),
    marginTop:verticalScale(10),
    alignContent:'center'
  },
  descText:{
    padding:8,
    alignContent:'center',
    fontSize:moderateScale(16),
    color: '#5C2204'
  },
  footer_container:{
    flex:4
  },
  imageFit:{
    width:horizontalScale(380),
    height:verticalScale(100),
    position:'absolute',
    bottom:verticalScale(-5),
  }
});

module.exports = colectaStyle;