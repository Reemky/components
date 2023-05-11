import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TermsCheck from "../components/TermsCheck";

const TermsScreen = () => {
  return (
    <View style={styles.container}>
      <TermsCheck buttonLabel={'hi'}>
        <Text>ghi</Text>
      </TermsCheck>
    </View>
  );
};

export default TermsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
