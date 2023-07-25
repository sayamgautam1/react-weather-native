import React from "react";
import { Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { useCity } from "../hooks/useCity";
const CurrentWeather = () => {
  return (
    <SafeAreaView>
      <TextInput style={styles.inputArea}></TextInput>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  inputArea: {
    padding: 10,
    borderWidth: 1,
    width: 200,
    borderColor: "black",
  },

  body: {
    backgroundColor: "yellow",
    padding: 20,
    marginTop: 10,
  },
});
export default CurrentWeather;
