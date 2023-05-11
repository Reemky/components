import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ToggleComponent from "../components/ToggleComponent";

const SwitchScreen = ({}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.container}>
      <ToggleComponent setIsEnabled={setIsEnabled} isEnabled={isEnabled} />
    </View>
  );
};

export default SwitchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
