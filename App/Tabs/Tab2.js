/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Tab2 extends Component {  
  render() {
    return (
     <Container>
       <Content>
         <Text>Patking Lot 2</Text>
       </Content>
     </Container>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    margin: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  content:{
    flex: 1,
    flexDirection: 'row'
  }
});
