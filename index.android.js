import React, { Component } from 'react';
import { StyleSheet, AppRegistry, View } from 'react-native';

export default class LayoutComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View id="navbar" style={[styles.box, styles.box1]}></View>
        <View id="main" style={[styles.box, styles.box2]}></View>
        <View id="footer" style={[styles.box, styles.box3]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    flex: 1
  },
  box1: {
    backgroundColor: '#2196F3'
  },
  box2: {
    flex: 10,
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  }
});

AppRegistry.registerComponent('newProject', () => LayoutComponent);