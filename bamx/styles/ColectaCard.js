import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
"use strict";

var React = require('react-native');

var colectaCardStyle= React.StyleSheet.create({
  card: {
    backgroundColor: "#FFAF00",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: moderateScale(0), height: verticalScale(2) },
    marginBottom: moderateScale(16),
    overflow: "hidden"
  },
  image: {
    width: moderateScale("100%"),
    height: verticalScale(112), 
  },
  content: {
    padding: moderateScale(12),
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: "bold",
    color: "#5C2204", 
  },
  button: {
    marginTop: verticalScale(12),
    backgroundColor: "#FCD34D", 
    paddingVertical: verticalScale(8),
    paddingHorizontal: moderateScale(16),
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#3F1D0B",
    fontWeight: moderateScale("600"),
  }
});

module.exports = colectaCardStyle;