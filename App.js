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


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello</Text>
      </View>
      <View style={styles.body}>
        <Text> Body content</Text>
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
    color: "lightGreen",
  },
});
