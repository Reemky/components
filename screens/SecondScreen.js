import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { EventRegister } from "react-native-event-listeners";
import hidableContext from "../config/HidableContextt";

import Icon from "react-native-vector-icons/Ionicons";

export default function App({ navigation }) {
  const hidableValues = useContext(hidableContext);
  const [hidden, setHidden] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Second Screen</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("First");
        }}
        style={styles.button}
      >
        <Text>First Screen</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={() => {
            setHidden(!hidden);
            //   console.log(hidden);
            EventRegister.emit("hide/show", hidden);
          }}
        >
          <Icon
            style={{
              fontSize: 30,
            }}
            name={hidableValues.icon} //useContext to save the state of the icon to each pages
          />
          {/* <Text>{hidden ? "show" : "hide"}</Text> */}
        </TouchableOpacity>
      </View>
      <View style={styles.textcontainer}>
      <Text style={styles.text}>Balance:</Text>
      <Text style={[styles.text, { top: -12 }]}>{hidableValues.text}</Text>
        <Text style={styles.text}>Transaction Amount: </Text>
        <Text style={[styles.text, { top: -12 }]}>{hidableValues.text}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "lightgrey",
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 30,
  },
  textcontainer: {
    textAlign: "left",
    fontWeight: "bold",
  },
  text: {
    marginTop: 20,
    fontWeight: "bold",
  },
});
