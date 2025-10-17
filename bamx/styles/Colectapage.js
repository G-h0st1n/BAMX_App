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
  },
  bg:{
    flex:4
  },
  content:{
    margin:10,
    flex:1
  },
  board: {
    backgroundColor: '#FFAF00',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 16,
    borderRadius: 6
  },
  boardText:{
    marginTop:verticalScale(10),
    textAlign:'center',
    fontSize:moderateScale(15),
    color: '#5C2204'
  },
  goBackImg:{
    marginLeft:15,
    bottom:-15,
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
    height:verticalScale(70),
    padding:6
  },
  headerText:{
    textAlign:'left',
    fontSize:moderateScale(30),
    color: '#5C2204',
    marginLeft:6
  },
  subText:{
    textAlign:'left',
    fontSize:moderateScale(15),
    color: '#5C2204',
    marginTop:3,
    marginLeft:6
  },
  desc:{
    backgroundColor: '#FFAF00',
    borderRadius: 8,
    width:horizontalScale(180*2),
    height:verticalScale(90),
    alignContent:'center'
  },
  descText:{
    padding:8,
    alignContent:'center',
    fontSize:moderateScale(16),
    color: '#5C2204'
  },
  graphs:{
    padding:moderateScale(10),
    paddingLeft:horizontalScale(10)
  }
});

module.exports = colectaStyle;