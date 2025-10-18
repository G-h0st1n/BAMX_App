import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

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
    margin:moderateScale(10),
    flex:1
  },
  board: {
    backgroundColor: '#FFAF00',
    padding: moderateScale(10),
    marginVertical: verticalScale(2),
    marginHorizontal: moderateScale(16),
    borderRadius: 6
  },
  boardText:{
    marginTop:verticalScale(10),
    textAlign:'center',
    fontSize:moderateScale(15),
    color: '#5C2204'
  },
  goBackImg:{
    marginLeft:verticalScale(15),
    bottom:verticalScale(-15),
    width:moderateScale(25),
    height:verticalScale(25),
    position:'relative'
  },
  headerImg: {
    width: moderateScale(420),
    height:verticalScale(100),
  },
  header:{
    backgroundColor: '#FFAF00',
    width:moderateScale(210*2),
    height:verticalScale(70),
    padding:moderateScale(6)
  },
  headerText:{
    textAlign:'left',
    fontSize:scale(30),
    color: '#5C2204',
    marginLeft:6
  },
  subText:{
    textAlign:'left',
    fontSize:scale(15),
    color: '#5C2204',
    marginTop:verticalScale(3),
    marginLeft:moderateScale(6)
  },
  desc:{
    backgroundColor: '#FFAF00',
    borderRadius: 8,
    width:moderateScale(180*2),
    height:verticalScale(90),
    alignContent:'center'
  },
  descText:{
    padding:moderateScale(8),
    alignContent:'center',
    fontSize:moderateScale(16),
    color: '#5C2204'
  },
  graphs:{
    padding:moderateScale(10),
    paddingLeft:moderateScale(10)
  }
});

module.exports = colectaStyle;