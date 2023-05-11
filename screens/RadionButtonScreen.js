import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import RadioButton from "../components/RadioButton";

const RadionButtonScreen = ({ navigation }) => {
  const [option, setOption] = useState(null);

  const data = [
    { id: 1, title: "Default" },
    { id: 2, title: "Error", error: true },
    { id: 3, title: "Disabled", disabled: true},
    { id: 4, title: "Alone", alone: true },
  ];

  return (
    <View style={styles.container}>
      <RadioButton data={data} onSelect={(value) => setOption(value)} />
    </View>
  );
};

export default RadionButtonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
