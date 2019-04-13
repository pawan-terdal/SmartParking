/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Tab1 extends Component {  
  render() {
    return (
     <Container>
       <Content>
         <Grid>
          <Col style = {styles.column}>
            <Image source = {require('./vacant.jpeg')}/>
          </Col>
          <Col style = {styles.column}>
            <Image source = {require('./vacant.jpeg')}/>
          </Col>
          <Col style = {styles.column}>
            <Image source = {require('./occupied.jpeg')}/>
          </Col>          
         </Grid>
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
  },
  column:{
    margin:10
  }
});
