import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ModalPopUp from "../components/ModalPopUp";
import Button from "../components/Button";

const ModalScreen = () => {
  return (
    <View style={styles.container}>
      <ModalPopUp toggleType="button" label={'label'}>
        <View style={styles.container}>
        <Text>huuuu</Text>
        <Text>huuuu</Text>
        <Text>huuuu</Text>
        <Text>huuuu</Text>
        <Text>huuuu</Text>
        </View>
      </ModalPopUp>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
