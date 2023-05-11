import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CheckBox from "./CheckBox";
import ModalPopUp from "../components/ModalPopUp";
import Button from "../components/Button";

const TermsCheck = ({ buttonLabel, onPress, children }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.section}>
        <View style={{ backgroundColor: "red" }}>
          <CheckBox
            onPress={() => setIsChecked(!isChecked)}
            isChecked={isChecked}
            title={
              <View>
                <Text style={styles.paragraph}>I Agree to {""}</Text>
                <ModalPopUp toggleType="text" label={"Terms and Conditions"}>
                  {children}
                </ModalPopUp>
              </View>
            }
          />
        </View>
      </View>
      <Button label={buttonLabel} disabled={!isChecked} onPress={onPress} />
    </View>
  );
};

export default TermsCheck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
