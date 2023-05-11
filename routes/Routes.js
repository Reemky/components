import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import LoaderFirst from "../screens/LoaderFirst";
import LoaderSecond from "../screens/LoaderSecond";
import ModalScreen from "../screens/ModalScreen";
import TermsScreen from "../screens/TermsScreen";
import SwitchScreen from "../screens/SwitchScreen";
import CheckBoxScreen from "../screens/CheckBoxScreen";
import RadionButtonScreen from "../screens/RadionButtonScreen";
import PaginatorScreen from "../screens/PaginatorScreen";
import ButtonScreen from "../screens/ButtonScreen";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Switch"
    >
      <Stack.Screen name="First" component={FirstScreen} />
      <Stack.Screen name="Second" component={SecondScreen} />

      <Stack.Screen name="LoaderFirst" component={LoaderFirst} />

      <Stack.Screen name="LoaderSecond" component={LoaderSecond} />

      <Stack.Screen name="Modal" component={ModalScreen} />

      <Stack.Screen name="Terms" component={TermsScreen} />

      <Stack.Screen name="Switch" component={SwitchScreen} />

      <Stack.Screen name="CheckBox" component={CheckBoxScreen} />

      <Stack.Screen name="RadionButton" component={RadionButtonScreen} />

      <Stack.Screen name="Paginator" component={PaginatorScreen} />

      <Stack.Screen name="Button" component={ButtonScreen} />
    </Stack.Navigator>
  );
}
