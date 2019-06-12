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
  Tab,
  Content,
  Text
} from "native-base";
import Tab1 from "./Components/Tab1";
import Tab2 from "./Components/Tab2";
import dbConn from "./Config/Firestore";
import LoadingPage from "./Components/LoadingPage";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { carDistance: "near" };
  }
  _isMounted = false;
  componentDidMount = async () => {
    this._isMounted = true;
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
            console.log("In tab1....... ", data);

            if (this._isMounted)
              this.setState({
                carDistance: data["Slot_1"]
              });
            console.log("In tab1 component did mount........", this.state);
          }
        );
      //alert(this.state.lot1);
    } catch (error) {
      alert(error);
    }
  };
  componentWillMount(){
    this._isMounted = false;
  }
  render() {
    console.log("In render of parent---");
    if (this.state.carDistance == "near") {
      return <LoadingPage />;
    } else {
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
