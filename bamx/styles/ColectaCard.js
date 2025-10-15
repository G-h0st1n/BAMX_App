import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

"use strict";

var React = require('react-native');

var colectaCardStyle= React.StyleSheet.create({
  card: {
    backgroundColor: "#FFAF00", // yellow-100
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 16,
    overflow: "hidden",
  },
  image: {
    width: horizontalScale("100%"),
    height: verticalScale(112), 
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    color: "#5C2204", 
  },
  progressBarBackground: {
    width: horizontalScale("100%"),
    height: verticalScale(12),
    backgroundColor: "#4E342E", 
    borderRadius: moderateScale(6),
    marginTop: verticalScale(8),
  },
  progressBarFill: {
    height: verticalScale(12),
    backgroundColor: "#22C55E", 
    borderRadius: moderateScale(6),
  },
  button: {
    marginTop: verticalScale(12),
    backgroundColor: "#FCD34D", 
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(16),
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#3F1D0B",
    fontWeight: moderateScale("600"),
  },
});

module.exports = colectaCardStyle;