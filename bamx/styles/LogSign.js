'use strict';

var React = require('react-native');

var logSignStyle = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2042A',
  },
  backdrop_container: {
    marginTop: 200,
    margin:25,
    height:150,
    padding: 25,
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
  /*
  circle: {
    width: 200,
    height: 200,
    backgroundColor:'#5BB02F',
    borderRadius: 200/2,
  }*/
});

module.exports = logSignStyle;