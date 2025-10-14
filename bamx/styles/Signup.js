'use strict';

var React = require('react-native');

var signupStyle = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5AB02F',
    
  },
  backdrop_container: {
    marginTop: 50,
    height:550,
    padding: 25,
    margin:20,
    backgroundColor: '#FFFAD8',
    borderRadius: 8,
  },
    button_container:{
    margin:5,
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
    bottom:-40,
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
  }
});

module.exports = signupStyle;