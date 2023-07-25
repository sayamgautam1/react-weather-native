import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
} from "react-native";

const CurrentWeather = () => {
  const [inputCity, setinputCity] = useState("");

  // function to clear input text
  const clearInput = () => {
    setinputCity("");
  };
  return (
    <SafeAreaView>
      <TextInput
        style={styles.inputArea}
        placeholder="enter city name!!"
        onChangeText={(newCity) => setinputCity(newCity)}
        clearButtonMode="always"
        value={inputCity}
      ></TextInput>
      <Button
        title="Search"
        onPress={() => {
          alert(inputCity);
          clearInput();
        }}
      />
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
