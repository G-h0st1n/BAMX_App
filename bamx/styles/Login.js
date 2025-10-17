import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

"use strict";

var React = require('react-native');

var loginStyle = React.StyleSheet.create({
  container: {
    flex: 1,
  },
  bg:{
    flex:4
  },
  backdrop_container: {
    marginTop: verticalScale(150),
    height:verticalScale(160),
    padding: moderateScale(15),
    margin: moderateScale(30),
    backgroundColor: '#FFFAD8',
    borderRadius: 8,
  },
    button_container:{
    margin:moderateScale(10)
  },
  headerText:{
    bottom:verticalScale(-140),
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
    borderRadius:8,
    marginBottom:verticalScale(15)
  },
  goBackImg:{
    marginLeft:moderateScale(15),
    bottom:verticalScale(-20),
    width:moderateScale(25),
    height:verticalScale(25)
  }, 
  check:{
    fontSize:scale(15),
    color: '#FFAF00'
  }

});

module.exports = loginStyle;