import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  Image,
} from "react-native";
import CurrentWeather from "./components/CurrentWeather";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, { flexDirection: "column" }]}>
      <View style={styles.viewDiv}>
        <Text style={styles.header}>Weather</Text>
      </View>
      <View style={styles.viewDiv1}>
        <CurrentWeather />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
    padding: 20,
    // alignItems: "center",
  },
  header: {
    // padding: 10,
    color: "white",
    fontSize: 25,
    textAlign: "left",
    fontWeight: "bold",
  },
  viewDiv: {
    padding: 20,
  },
  viewDiv1: {
    padding: 20,
    flex: 2,
  },
});
