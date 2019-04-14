/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Tabs, Tab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import dbConn from './Config/Firestore';
export default class App extends Component {  
  render() {
    console.log("hello there");
    console.log(dbConn);
    
    return (
     <Container>
       <Header>
        <Body>
          <Right>
            <Title style = {styles.header}>Smart Parking</Title>
          </Right>
        </Body>
       </Header>
       <Tabs>
          <Tab heading="Parking Lot 1">
              <Tab1 />
          </Tab>
          <Tab heading="Parking Lot 2">
              <Tab2 />
          </Tab>
       </Tabs>
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
