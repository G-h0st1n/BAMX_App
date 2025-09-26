'use strict';

var React = require('react-native');

var logSignStyle = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2042A',
  },
  backdrop_container: {
    marginTop: 260,
    margin:25,
    height:150,
    padding: 25,
    backgroundColor: '#FFFAD8',
    borderRadius: 5,
  },
  button_container:{
    margin:10,
    marginBottom:2,
  },
  footer_container:{
    flex:4
  },
  imageFit:{
    width:412,
    height:150,
    position:'absolute',
    bottom:-5,
  },  
  headerText:{
    bottom:-250,
    textAlign:'center',
    fontSize: 25,
    color: '#FFFAD8',
    fontFamily:'sans-serif-medium'
  },
  goBackImg:{
    marginLeft:15,
    bottom:-20,
    width:25,
    height:25
  }

});

module.exports = logSignStyle;