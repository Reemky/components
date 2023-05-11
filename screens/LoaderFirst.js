import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Loader from "../components/Loader";
import LottieView from "lottie-react-native";

const LoaderFirst = ({ navigation }) => {
  const [loading, setLoading] = useState(false); //state of loader
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setLoading(true); //this will trigger the loader to appear
          setTimeout(() => {
            navigation.navigate("LoaderSecond"); //Loader will appear while navigating to the second screen
          }, 2300); //The duration of the loader can be any other kind of loading object e.g retrieving data
        }}
      >
        <Text style={{ fontSize: 25, color: "blue" }}>
          Go to the next screen
        </Text>
      </TouchableOpacity>

      {loading ? (
        <Loader text={"Loading..."}>
          <LottieView
            autoPlay
            loop
            source={require("../assets/loading.json")}
            style={{ width: "40%" }}
          />
        </Loader>
      ) : null}
    </View>
  );
};

export default LoaderFirst;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
