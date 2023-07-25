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
  const [currentPlace, setCurrentPlace] = useState(null);
  // function to clear input text
  const handleLocationSearch = async () => {
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
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.inputArea}
        placeholder="enter city name!!"
        placeholderTextColor={"white"}
        onChangeText={(newCity) => setinputCity(newCity)}
        clearButtonMode="always"
        value={inputCity}
      ></TextInput>
      <Button
        title="Search"
        onPress={() => {
          handleLocationSearch();
        }}
      />
      {currentPlace != null && (
        <View style={styles.displayDetails}>
          <Text style={styles.textStyles}>current weather</Text>
          <Text style={styles.textStyles}>city : {currentPlace.name}</Text>
          <Text style={styles.textStyles}>
            current temperature : {currentPlace.main.temp}
          </Text>
          <Text style={styles.textStyles}>
            max temperature:{currentPlace.main.temp_max}
          </Text>
          <Text style={styles.textStyles}>
            current weather:{currentPlace.main.temp_min}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    color: "white",
  },
  inputArea: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: "white",
  },
  textStyles: {
    borderWidth: 1,
    fontSize: 20,

    color: "white",
  },
});
export default CurrentWeather;
