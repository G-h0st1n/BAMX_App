'use strict';

var React = require('react-native');

var loginStyle = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFAF00',
  },
  backdrop_container: {
    marginTop: 200,
    height:300,
    margin: 25,
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

module.exports = loginStyle;