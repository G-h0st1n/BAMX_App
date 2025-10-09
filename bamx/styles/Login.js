'use strict';

var React = require('react-native');

var loginStyle = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFAF00',
  },
  backdrop_container: {
    marginTop: 200,
    height:250,
    padding: 15,
    margin: 30,
    backgroundColor: '#FFFAD8',
    borderRadius: 8,
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
  },
  headerText:{
    bottom:-190,
    textAlign:'center',
    fontSize: 25,
    color: '#FFFAD8',
    fontFamily:'sans-serif-medium'
  }, 
  optionText: {
    fontSize:15
    
  },
  forumText:{
    borderWidth:2,
    borderColor:'#B3B3B3',
    borderRadius:8,
    marginBottom:15
  },
  goBackImg:{
    marginLeft:15,
    bottom:-20,
    width:25,
    height:25
  }, 
  check:{
    fontSize:15,
    color: '#FFAF00'
  }

});

module.exports = loginStyle;