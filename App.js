import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  Image,
} from "react-native";
import { useState } from "react";
import axios from "axios";
export default function App() {
  const [name, setName] = useState("sam");

  const handleNameChange = () => {
    setName("changedName");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>enter your name</Text>
      <TextInput
        style={styles.inputArea}
        placeholder="enterName"
        onChangeText={(val) => setName(val)}
      />
      <View style={styles.body}>
        <Text> {name}</Text>
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
