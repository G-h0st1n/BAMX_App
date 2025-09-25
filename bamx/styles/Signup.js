'use strict';

var React = require('react-native');

var signupStyle = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5AB02F',
  },
  backdrop_container: {
    marginTop: 100,
    height:300,
    padding: 25,
    margin:25,
    backgroundColor: '#FFFAD8',
    borderRadius: 5,
  },
    button_container:{
    margin:10
  },
  footer_container:{
    flex:4
  },
  imageFit:{
    width:412,
    height:150,
    position:'absolute',
      bottom:-5,
  }
});

module.exports = signupStyle;