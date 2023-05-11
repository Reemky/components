import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

const Loader = ({ text, fontSize, color, fontStyle, children }) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      {children}
      <View>
        <Text
          style={{ fontSize: fontSize, color: color, fontStyle: fontStyle }}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Slightly darker background
    zIndex: 1, // Rendering loader at the top of any other component
  },
});

Loader.propTypes = {
  fontSize: PropTypes.number,
  color: PropTypes.string,
  fontStyle: PropTypes.string,
};

Loader.defaultProps = {
  fontSize: 20,
  color: "#333333",
  fontStyle: "normal",
};

export default Loader;
