import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CheckBox from "../components/CheckBox";

const CheckBoxScreen = ({ navigation }) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);

  return (
    <View style={styles.container}>
      <CheckBox
        title={"Test 1"}
        helperText={"Helper text"}
        onPress={() => setIsChecked1(!isChecked1)}
        isChecked={isChecked1}
      />
      <CheckBox
        title={"Test 2"}
        helperText={"Helper text"}
        onPress={() => setIsChecked2(!isChecked2)}
        isChecked={isChecked2}
        error
      />
      <CheckBox
        title={"Test 3"}
        helperText={"Helper text"}
        onPress={() => setIsChecked3(!isChecked3)}
        isChecked={isChecked3}
      />
      <CheckBox
        title={"Test 4"}
        helperText={"Helper text"}
        onPress={() => setIsChecked4(!isChecked4)}
        isChecked={isChecked4}
        disabled
      />
      <CheckBox
        title={"Test 5"}
        helperText={"Helper text"}
        onPress={() => setIsChecked5(!isChecked5)}
        isChecked={isChecked5}
      />
      <CheckBox
        title={"Test 6"}
        helperText={"Helper text"}
        onPress={() => setIsChecked6(!isChecked6)}
        isChecked={isChecked6}
      />
      <CheckBox
        title={"Test 7"}
        helperText={"Helper text"}
        onPress={() => setIsChecked7(!isChecked7)}
        isChecked={isChecked7}
      />
      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 500 }}>Alone</Text>
        <CheckBox onPress={() => setIsChecked8(!isChecked8)} isChecked={isChecked8} alone />
      </View>
    </View>
  );
};

export default CheckBoxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
