import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

"use strict";

var React = require('react-native');

var homeStyle = React.StyleSheet.create({
  container: {
    flex: 1
  },
  bg:{
    flex:4
  },
  header: {
    backgroundColor: "#22C55E",
    height: verticalScale(60),
    width: moderateScale(380),
    padding:moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    color: "#fff",
    fontSize: scale(20),
    fontWeight: "bold",
    textAlign: "left",
  },
  userImage: {
    width: moderateScale(50),
    height: verticalScale(50),
    borderRadius: 25,
  },
  scrollContent: {
    padding: moderateScale(16),
  },
  button_container:{
    width:moderateScale(120),
    padding:moderateScale(5),
    height:verticalScale(60),
    marginTop:verticalScale(20)
  },
  button_add:{
    marginTop: 20, 
    marginBottom: 40, 
    alignItems: "center" 
  }
});

module.exports = homeStyle;