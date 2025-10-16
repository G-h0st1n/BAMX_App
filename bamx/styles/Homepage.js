import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

"use strict";

var React = require('react-native');

var homeStyle = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAD8",
  },
  bg:{
    flex:4
  },
  header: {
    backgroundColor: "#22C55E",
    paddingVertical: 20,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  scrollContent: {
    padding: 16,
  },
  button_container:{
    margin:4,
  }
});

module.exports = homeStyle;