/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Content} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class FillCars extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Row style={styles.row}>
              <Col style={styles.column}>
                <Image source={require("./dummy2.jpeg")} />
              </Col>
              <Col style={styles.column}>
                <Image source={require("./dummy2.jpeg")} />
              </Col>
              <Col style={styles.column}>
                <Image source={require("./dummy2.jpeg")} />
              </Col>
            </Row>
            <Row style={styles.row}>
              <Col style={styles.column}>
                <Image source={require("./dummy2.jpeg")} />
              </Col>
              <Col style={styles.column}>
                <Image source={require("./dummy2.jpeg")} />
              </Col>
              <Col style={styles.column}>
                <Image source={require("./vacant.jpeg")} />
              </Col>
            </Row>
            <Row style={styles.row}>
              <Col style={styles.column}>
                <Image source={require("./vacant.jpeg")} />
              </Col>
              <Col style={styles.column}>
                <Image source={require("./dummy2.jpeg")} />
              </Col>
              <Col style={styles.column}>
                <Image source={require("./vacant.jpeg")} />
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
  },
  column: {
    margin: 10,
    marginRight: 10
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginRight: 10
  }
});
