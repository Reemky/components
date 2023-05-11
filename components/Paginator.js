import { StyleSheet, View, Animated, Dimensions } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const Paginator = ({ data, scrollX, dotColor }) => {
  const { width } = Dimensions.get("window");

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {data.map((_, i) => { // Mapping through the flatlise
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const indicatorWidth = scrollX.interpolate({
            inputRange,
            outputRange: [15, 25, 15],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={[
                styles.indicatorHorizontal,
                {
                  width: indicatorWidth,
                  opacity,
                  backgroundColor: dotColor,
                },
              ]}
              key={i.toString()} // Unique key for each dot
            />
          );
        })}
      </View>
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  indicatorHorizontal: {
    height: 8,
    marginHorizontal: 5,
    borderRadius: 20,
  },
});

Paginator.propTypes = {
  dotColor: PropTypes.string,
  type: PropTypes.string,
};

Paginator.defaultProps = {
  dotColor: "#2D4CAF",
  type: "numbers",
};
