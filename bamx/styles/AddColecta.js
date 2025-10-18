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
    marginTop: verticalScale(60),
    height:verticalScale(350),
    padding: moderateScale(15),
    margin:moderateScale(30),
    backgroundColor: '#FFFAD8',
    borderRadius: 8,
  },
    button_container:{
    margin:5
  },
  headerText:{
    bottom:verticalScale(-50),
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
    marginBottom:verticalScale(8)
  },
  goBackImg:{
    marginLeft:moderateScale(15),
    bottom:verticalScale(-20),
    width:moderateScale(25),
    height:verticalScale(25)
  },
});

module.exports = addStyle;