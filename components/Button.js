import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

//icon: image/icon
const Button = ({
  label,
  onPress = () => {},
  disabled,
  borderType,
  width,
  height,
  paddingHorizontal,
  paddingVertical,
  marginVertical,
  backgroundColor,
  borderRadius,
  color,
  textAlign,
  fontSize,
  fontWeight,
  borderColor,
  borderWidth,
  shape,
  alignItems,
  justifyContent,
  marginHorizontal,
  icon,
  showLabel,
  iconPosition, //next to label? (not recommended now, shall wait for the ux team design to have consistent design)
  iconName,
  iconSize,
  iconColor,
  labelMarginTop,
  labelMarginBottom,
}) => {
  return (
    //TouchableOpacity for the button
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.6} //1:1 for disabled button, 0.6:1 for enabled button
      onPress={!disabled && onPress} //onPress function does not work for disabled button
      style={{
        //Presets width for circle & box buttons, otherwise it will be the overridden value
        width: shape === "box" ? 100 : shape === "circle" ? 100 : width,
        //Presets height for circle & box buttons, otherwise it will be the overridden value
        height: shape === "box" ? 100 : shape === "circle" ? 100 : height,
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
        marginVertical: marginVertical,
        //Preset border radius for circle button
        borderRadius: shape === "circle" ? 100 / 2 : borderRadius,
        borderWidth: borderWidth,
        marginHorizontal: marginHorizontal,
        alignItems: alignItems,
        justifyContent: justifyContent,
        //Presets border color for disabled, filled, outlined & empty button border, otherwise it will be the overridden value
        borderColor: disabled
          ? "#e8e8e8"
          : borderType === "filled"
          ? "#212156"
          : borderType === "outlined"
          ? "#212156"
          : borderType === "empty"
          ? "transparent"
          : borderColor,
        //Presets border color for disabled, filled, outlined & empty button color, otherwise it will be the overridden value
        backgroundColor: disabled
          ? "#dbdbdb"
          : borderType === "filled"
          ? "#212156"
          : borderType === "outlined" || "empty"
          ? "transparent"
          : backgroundColor,
      }}
    >
      {icon ? ( // Check if icon={true} then it will be displayed
        showLabel ? ( // Check if showLabel={true} then it will be displayed
          iconPosition === "left" ? ( // Check if iconPosition: 'left'
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection:
                  iconPosition === "left" || "right" ? "row" : "column",
              }}
            >
              <Icon
                disabled={disabled}
                name={iconName}
                size={iconSize}
                style={{
                  color: disabled
                    ? "#ababab"
                    : borderType === "filled"
                    ? "#ffffff"
                    : borderType === "outlined" || "empty"
                    ? "#212156"
                    : iconColor,
                }}
              />
              <Text
                style={{
                  textAlign: textAlign,
                  fontSize: fontSize,
                  fontWeight: fontWeight,
                  width: "90%",
                  color: disabled
                    ? "#ababab"
                    : borderType === "filled"
                    ? "#ffffff"
                    : borderType === "outlined" || "empty"
                    ? "#212156"
                    : color,
                }}
              >
                {label}
              </Text>
            </View>
          ) : iconPosition === "right" ? (
            // If iconPosition: 'right'
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection:
                  iconPosition === "left" || "right" ? "row" : "column",
              }}
            >
              <Text
                style={{
                  textAlign: textAlign,
                  fontSize: fontSize,
                  fontWeight: fontWeight,
                  width: "90%",
                  color: disabled
                    ? "#ababab"
                    : borderType === "filled"
                    ? "#ffffff"
                    : borderType === "outlined" || "empty"
                    ? "#212156"
                    : color,
                }}
              >
                {label}
              </Text>
              <Icon
                disabled={disabled}
                name={iconName}
                size={iconSize}
                style={{
                  color: disabled
                    ? "#ababab"
                    : borderType === "filled"
                    ? "#ffffff"
                    : borderType === "outlined" || "empty"
                    ? "#212156"
                    : iconColor,
                }}
              />
            </View>
          ) : iconPosition === "top" ? (
            <View // If iconPosition: 'top'
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection:
                  iconPosition === "top" || "bottom" ? "column" : "row",
              }}
            >
              <Icon
                disabled={disabled}
                name={iconName}
                size={iconSize}
                style={{
                  color: disabled
                    ? "#ababab"
                    : borderType === "filled"
                    ? "#ffffff"
                    : borderType === "outlined" || "empty"
                    ? "#212156"
                    : iconColor,
                }}
              />
              <Text
                style={{
                  textAlign: textAlign,
                  fontSize: fontSize,
                  fontWeight: fontWeight,
                  marginTop: labelMarginTop,
                  marginBottom: labelMarginBottom,
                  color: disabled
                    ? "#ababab"
                    : borderType === "filled"
                    ? "#ffffff"
                    : borderType === "outlined" || "empty"
                    ? "#212156"
                    : color,
                }}
              >
                {label}
              </Text>
            </View>
          ) : (
            <View // If iconPosition: 'bottom'
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                flexDirection:
                  iconPosition === "top" || "bottom" ? "column" : "row",
              }}
            >
              <Text
                style={{
                  textAlign: textAlign,
                  fontSize: fontSize,
                  fontWeight: fontWeight,
                  marginTop: labelMarginTop,
                  marginBottom: labelMarginBottom,
                  color: disabled
                    ? "#ababab"
                    : borderType === "filled"
                    ? "#ffffff"
                    : borderType === "outlined" || "empty"
                    ? "#212156"
                    : color,
                }}
              >
                {label}
              </Text>
              <Icon
                disabled={disabled}
                name={iconName}
                size={iconSize}
                style={{
                  color: disabled
                    ? "#ababab"
                    : borderType === "filled"
                    ? "#ffffff"
                    : borderType === "outlined" || "empty"
                    ? "#212156"
                    : iconColor,
                }}
              />
            </View>
          )
        ) : (
          
          <View> // if showLabel={false}
            <Icon
              disabled={disabled}
              name={iconName}
              size={iconSize}
              style={{
                width: "100%",
                color: disabled
                  ? "#ababab"
                  : borderType === "filled"
                  ? "#ffffff"
                  : borderType === "outlined" || "empty"
                  ? "#212156"
                  : iconColor,
              }}
            />
          </View>
        )
      ) : (
        // if icon={false}
        <View>
          <Text
            style={{
              textAlign: textAlign,
              fontSize: fontSize,
              fontWeight: fontWeight,
              color: disabled
                ? "#ababab"
                : borderType === "filled"
                ? "#ffffff"
                : borderType === "outlined" || "empty"
                ? "#212156"
                : color,
            }}
          >
            {label}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

// Proptypes value check
Button.propTypes = {
  //Button's label is required for clear code purpose. To disable the label use showLabel={false}
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  borderType: PropTypes.oneOf(["filled", "outlined", "empty"]),
  backgroundColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.number,
  paddingHorizontal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingVertical: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginHorizontal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginVertical: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelMarginTop: PropTypes.number,
  labelMarginBottom: PropTypes.number,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  shape: PropTypes.oneOf(["rectangle", "box", "circle"]),
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  //icon={true} is required when using an icon
  //When using icon={true}, make sure to use iconName to display it
  icon: PropTypes.bool,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  iconPosition: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  showLabel: PropTypes.bool,
};

// Default values for props
Button.defaultProps = {
  disabled: false,
  backgroundColor: "#212156",
  width: 300,
  height: 42,
  borderRadius: 10,
  paddingHorizontal: 12,
  paddingVertical: 12,
  marginVertical: 10,
  marginHorizontal: 10,
  labelMarginTop: 5,
  labelMarginBottom: 5,
  textAlign: "center",
  fontSize: 15,
  fontWeight: "bold",
  color: "#ffffff",
  borderColor: "#212156",
  borderWidth: 0.5,
  alignItems: "center",
  justifyContent: "center",
  borderType: "filled",
  showLabel: true,
  icon: false,
  iconSize: 20,
  alignItems: "center",
  justifyContent: "center",
};

export default Button;
