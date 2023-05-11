import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";

const ButtonScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Button Screen</Text>
      <Button label='Go'/>
    </View>
  );
};

export default ButtonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
