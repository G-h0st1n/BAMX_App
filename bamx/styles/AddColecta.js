'use strict';
var React = require('react-native');

var { StyleSheet } = React;

var AddColectaStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5AB02F',
  },

  goBackImg: {
    marginLeft: 15,
    marginTop: 15,
    width: 25,
    height: 25,
  },

  headerText: {
    textAlign: 'center',
    fontSize: 26,
    color: '#FFFAD8',
    fontFamily: 'sans-serif-medium',
    marginTop: 40,
    letterSpacing: 1,
  },

  backdrop_container: {
    flex: 1,
    marginHorizontal: 25,
    marginTop: 50,
    backgroundColor: '#FFFAD8',
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },

  optionText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 10,
  },

  forumText: {
    borderWidth: 1.8,
    borderColor: '#B3B3B3',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },

  button_container: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },

  footer_container: {
    alignItems: 'center',
  },

  imageFit: {
    width: 420,
    height: 140,
    position: 'absolute',
    bottom: -5,
  },
});

module.exports = AddColectaStyle;
