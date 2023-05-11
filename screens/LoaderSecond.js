import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/Ionicons";

const LoaderSecond = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Text style={{ fontSize: 20, marginVertical: 20, color: "#4A5CA8" }}>
            Hi there
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoaderSecond;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
