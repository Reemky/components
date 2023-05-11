import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
import React from "react";
import IconCheck from "react-native-vector-icons/Octicons";
import IconAlert from "react-native-vector-icons/Ionicons";

const CheckBox = ({
  title,
  helperText,
  disabled,
  onPress,
  isChecked,
  error,
  alone,
  ...props
}) => {
  const { width } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.6}
      >
        {isChecked ? ( // Box's style when checked
          error ? (
            <View
              style={[
                styles.unselected,
                {
                  borderColor: error
                    ? "#C72710"
                    : disabled
                    ? "#BFBFBF"
                    : "#212755",
                  backgroundColor: disabled ? "#D8D8D8" : null,
                },
              ]}
            >
              <View
                style={[
                  styles.square,
                  {
                    backgroundColor: error
                      ? "#C72710"
                      : disabled
                      ? "#BFBFBF"
                      : null,
                  },
                ]}
              />
            </View>
          ) : disabled ? (
            <View
              style={[
                styles.unselected,
                {
                  borderColor: error
                    ? "#C72710"
                    : disabled
                    ? "#BFBFBF"
                    : "#212755",
                  backgroundColor: disabled ? "#D8D8D8" : null,
                },
              ]}
            >
              <View
                style={[
                  styles.square,
                  {
                    backgroundColor: error
                      ? "#C72710"
                      : disabled
                      ? "#BFBFBF"
                      : null,
                  },
                ]}
              />
            </View>
          ) : (
            <View style={styles.selected}>
              <IconCheck
                name={"check"}
                size={15}
                color={disabled ? "#909090" : "#ffffff"}
              />
            </View>
          )
        ) : (
          // Box's style when unchecked
          <View
            style={[
              styles.unselected,
              {
                borderColor: error
                  ? "#C72710"
                  : disabled
                  ? "#BFBFBF"
                  : "#212755",
                backgroundColor: disabled ? "#D8D8D8" : null,
              },
            ]}
          />
        )}
      </TouchableOpacity>
      <View>
        <View style={[styles.titleContainer, { width: width }]}>
          
          <Text // Title
            style={[
              styles.title,
              { color: error ? "#C72710" : disabled ? "#828282" : "#212755" },
            ]}
          >
            {title}
          </Text>
          {error ? null : ( // Default helper text
            <View style={styles.helperContainer}>
              <Text style={[styles.helperText, { color: "#A6A6A6" }]}>
                {helperText}
              </Text>
            </View>
          )}
          {error && ( // Error helper text, including an alert icon
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                left: 6,
              }}
            >
              <IconAlert
                name={"alert-circle-outline"}
                size={22}
                color={"#C72710"}
              />
              <View style={styles.helperContainer}>
                <Text style={[styles.helperText, { color: "#C72710" }]}>
                  {helperText}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: 150,
    marginTop: 5,
    marginHorizontal: 5,
    marginBottom: 35,
  },
  titleContainer: {
    height: 24,
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
  unselected: {
    borderColor: "#A6A6A6",
    borderWidth: 1,
    width: 24,
    height: 24,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    backgroundColor: "#469AD8",
    width: 24,
    height: 24,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: 8,
    height: 8,
    borderRadius: 1,
  },
});

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  boxColor: PropTypes.string,
  labelColor: PropTypes.string,
};

CheckBox.defaultProps = {
  label: "label",
  disabled: false,
  isChecked: false,
  boxColor: "#469AD8",
  labelColor: "#212156",
};

export default CheckBox;
