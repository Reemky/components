import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const RadioButton = ({ data, onSelect, error, disabled, alone }) => {
  const [selected, setSelected] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setSelected(value);
  };
  return (
    <View>
      <View>
        {data.map((item) => {
          return (
            // Mapping through the array
            <View key={item.id}>
              <View style={styles.radioButtonContainer}>
                <TouchableOpacity
                  disabled={item.disabled}
                  activeOpacity={0.6}
                  onPress={() => selectHandler(item.title)}
                  style={[
                    styles.radioButton,
                    {
                      borderColor: item.error
                        ? "#C72710"
                        : item.disabled
                        ? "#BFBFBF"
                        : "#A6A6A6",
                      backgroundColor: item.disabled ? "#D8D8D8" : null,
                    },
                  ]}
                >
                  {item.title === selected ? ( // Button's style when selected
                    <View
                      style={[
                        item.error
                          ? styles.circle
                          : item.disabled
                          ? styles.circle
                          : styles.radioButtonIcon,
                        {
                          borderColor: item.error
                            ? "#C72710"
                            : item.disabled
                            ? "#BFBFBF"
                            : "#A6A6A6",
                          backgroundColor: item.error
                            ? "#C72710"
                            : item.disabled
                            ? "#BFBFBF"
                            : "#469AD8",
                        },
                      ]}
                    />
                    // If unselected, the button is empty
                  ) : null} 
                </TouchableOpacity>
                {!item.alone ? (
                  <View style={styles.titleContainer}>
                    <Text style={[styles.title, { color: "#212755" }]}>
                      {item.title}
                    </Text>
                    <View style={styles.helperContainer}>
                      <Text style={[styles.helperText, { color: "#696868" }]}>
                        {item.title}
                      </Text>
                    </View>
                  </View>
                ) : null}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
    marginRight: 60,
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 200,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 20,
  },
  titleContainer: {
    width: 97,
    height: 24,
    // backgroundColor:'red',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 5,
    letterSpacing: 0.21,
    lineHeight: 24,
  },
  helperContainer: {
    width: 77,
    height: 20,
  },
  helperText: {
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 5,
    letterSpacing: 0.21,
    lineHeight: 20,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 20,
  },
});
