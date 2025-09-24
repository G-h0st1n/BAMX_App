'use strict';

var React = require('react-native');

var logSignStyle = React.StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#E2042A',
  },
  backdrop_container: {
    marginTop: 200,
    height:150,
    padding: 25,
    backgroundColor: '#FFFAD8',
    borderRadius: 5,
  },
  button_container:{
    margin:10
  },
  /*
  circle: {
    width: 200,
    height: 200,
    backgroundColor:'#5BB02F',
    borderRadius: 200/2,
  }*/
});

module.exports = logSignStyle;