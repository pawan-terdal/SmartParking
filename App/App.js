/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Right,
  Body,
  Tabs,
  Tab} from "native-base";
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
