'use strict';

var React = require('react-native');

var colectaStyle = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAD8",
  },
  headerImg: {
    width: 420,
    height:100,
  },
  header:{
    backgroundColor: '#FFAF00',
    width:210*2,
    height:80,
    padding:10
  },
  headerText:{
    textAlign:'left',
    fontSize:30,
    color: '#5C2204'
  },
  subText:{
    textAlign:'left',
    fontSize:15,
    color: '#5C2204'

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

module.exports = colectaStyle;