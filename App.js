import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
  Image
} from "react-native";
import { useState } from "react";
import axios from "axios"
export default function App() {

  const [location,setLoaction]=useState('')
  const [random,setRandomImage]=useState(null)
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?query=${location}&client_id=LQb6hnPi9qChOAbbsZEutFa2XhxvPwZxcD4cTgAA1f4`
      );
      setRandomImage(response.data.urls.regular);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={{
            height: 40
            
          }}
          placeholder="Whats the weather like in"
          onChangeText={location => setLoaction(location)}
        />
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          onPress={handleSearch}
        />
        {random && <Image source={{ uri: random }} style={{ width: 300, height: 300 }} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
