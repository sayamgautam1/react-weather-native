import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  View,
} from "react-native";
import { apiKey } from "@env";

async function useCity(inputCity) {
  const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}`;

  const response = await fetch(requestUrl);
  if (!response.ok) {
    alert("sorry, the city you have search cannot be found");
    throw response.json();
  }
  const data = await response.json();
  console.log("return value", data.name);
  return data;
}

const CurrentWeather = () => {
  const [inputCity, setinputCity] = useState("");
  const [cityData, setCityData] = useState();
  const [currentPlace, setCurrentPlace] = useState("");
  // function to clear input text
  const clearInput = async () => {
    const data = await useCity(inputCity);
    setCityData(data);
    setinputCity("");
  };
  useEffect(() => {
    if (cityData) {
      setCurrentPlace(cityData);
      console.log(cityData);
    }

    return;
  }, [cityData]);

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
      <View>
        <Text>current weather</Text>
        <Text>city : {currentPlace.name}</Text>
        <Text>current temperature : {currentPlace.main.temp}</Text>
        <Text>max temperature:{currentPlace.main.temp_max}</Text>
        <Text>current weather:{currentPlace.main.temp_min}</Text>
      </View>
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
