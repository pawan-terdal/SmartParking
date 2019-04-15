/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Image} from "react-native";
import dbConn from '../Config/Firestore'
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
  Text
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = async () => {
    try {
      await dbConn
        .collection("Parking_System")
        .doc("Parking Lot 2")
        .onSnapshot(
          {
            includeMetadataChanges: true // Listen for document metadata changes
          },
          doc => {
            // ...
            var data = doc.data();
            console.log("In tab2...... ",data);
            this.setState({
              lot1: data["Slot_1"],
              lot2: data["Slot_2"],
              lot3: data["Slot_3"]
            });
            console.log("In tab2 component did mount........", this.state);
          }
        );
      //alert(this.state.lot1);
    } catch (error) {
      alert("Error");
    }
  };
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Row style={styles.row}>
              <Col style={styles.column}>
                <Image
                  source={
                    this.state.lot1 == "parked"
                      ? require("./occupied.jpeg")
                      : require("./vacant.jpeg")
                  }
                />
              </Col>
              <Col style={styles.column}>
                <Image
                  source={
                    this.state.lot2 == "parked"
                      ? require("./occupied.jpeg")
                      : require("./vacant.jpeg")
                  }
                />
              </Col>
              <Col style={styles.column}>
                <Image
                  source={
                    this.state.lot3 == "parked"
                      ? require("./occupied.jpeg")
                      : require("./vacant.jpeg")
                  }
                />
              </Col>
            </Row>
          </Grid>
        </Content>
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
