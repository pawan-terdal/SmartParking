/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Dimensions } from "react-native";
import { Container, Header, Title, Content, Spinner, Text } from "native-base";
type Props = {};
export default class LoadingPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Content>
          <Spinner style = {{marginTop: 20}}/>
          <View>
            <Text style={styles.text}>{"Looking for near by parking lots ....."}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: "#211b1a",
    alignSelf: "center"
  }
});