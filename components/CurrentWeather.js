import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
} from "react-native";
import { apiKey } from "@env";

function useCity(inputCity) {
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}`;

  return fetch(requestUrl)
    .then(function (response) {
      if (!response.ok) {
        alert("sorry, the city you have search cannot be found");
        throw response.json();
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return data;
    });
}

const CurrentWeather = () => {
  const [inputCity, setinputCity] = useState("");

  // function to clear input text
  const clearInput = () => {
    useCity(inputCity);
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
