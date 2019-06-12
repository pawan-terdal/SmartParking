/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import dbConn from "../Config/Firestore";
import { Container, Content } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import FillCars from "./FillCars";

export default class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = async () => {
    try {
      await dbConn
        .collection("Parking_System")
        .doc("Parking Lot 1")
        .onSnapshot(
          {
            includeMetadataChanges: true // Listen for document metadata changes
          },
          doc => {
            // ...
            var data = doc.data();
            console.log("In tab2...... ", data);
            this.setState({
              lot4: data["Slot_4"],
              lot5: data["Slot_5"],
              lot6: data["Slot_6"]
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
                    this.state.lot6 == "parked"
                      ? require("./dummy2.jpeg")
                      : require("./vacant.jpeg")
                  }
                />
              </Col>
            </Row>
          </Grid>
          <FillCars />
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
    marginRight: 10,
    alignItems: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginRight: 10
  }
});
