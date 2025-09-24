'use strict';

var React = require('react-native');

var loginStyle = React.StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#FFAF00',
  },
  backdrop_container: {
    marginTop: 200,
    height:300,
    padding: 25,
    backgroundColor: '#FFFAD8',
    borderRadius: 5,
  },
    button_container:{
    margin:10
  }
});

module.exports = loginStyle;