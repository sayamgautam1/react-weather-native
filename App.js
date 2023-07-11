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
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello</Text>
      </View>
      <View style={styles.body}>
        <Text> {name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="update Name"
          onPress={() => {
            handleNameChange;
          }}
        />
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
  header: {
    backgroundColor: "skyblue",
    padding: 20,
  },
  boldText: {
    fontWeight: 500,
  },

  body: {
    backgroundColor: "yellow",
    padding: 20,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
