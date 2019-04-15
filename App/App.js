/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Tabs,
  Tab,
  Spinner
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Tab1 from "./Components/Tab1";
import Tab2 from "./Components/Tab2";
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("In render of parent---");
    return (
      <Container>
        <Header>
          <Body>
            <Right>
              <Title style={styles.header}>Smart Parking</Title>
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
  header: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    margin: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  content: {
    flex: 1,
    flexDirection: "row"
  }
});
