/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import Video from "react-native-video";

const { height, width } = Dimensions.get("screen");

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={foo => foo}
          data={[`a`, `b`, `c`, `d`, `e`]}
          renderItem={() => (
            <View style={{ marginBottom: 80 }}>
              <Video
                cache={true}
                source={
                 require("./021830c5-8183-42fe-ab8c-7e51232ecc9b.mov")
                }
                ref={player => {
                  this.player = player;
                }}
                resizeMode="cover"
                style={{ flex: 1, width: 300, height: 300  }}
                repeat={true}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
