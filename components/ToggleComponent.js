import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import PropTypes from "prop-types";

const SwitchComponent = ({
  disabled,
  // onChange,
  // onValueChange,
  thumbColor,
  trackColorTrue,
  trackColorFalse,
  isEnabled,
  setIsEnabled,
  // value,
}) => {
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        disabled={disabled}
        trackColor={{ true: trackColorTrue, false: trackColorFalse }}
        thumbColor={thumbColor}
        ios_backgroundColor={trackColorFalse}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

SwitchComponent.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func, //Invoked when the user tries to change the value of the switch. Receives the change event as an argument. If you want to only receive the new value, use onValueChange instead.
  onValueChange: PropTypes.func, // Invoked when the user tries to change the value of the switch. Receives the new value as an argument. If you want to instead receive an event, use onChange.
  thumbColor: PropTypes.string,
  trackColorTrue: PropTypes.string,
  trackColorFalse: PropTypes.string,
  value: PropTypes.bool,
};

SwitchComponent.defaultProps = {
  disabled: false,
  thumbColor: "#ffffff",
  trackColorTrue: "#469AD8",
  trackColorFalse: "#D8D8D8",
};

export default SwitchComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
