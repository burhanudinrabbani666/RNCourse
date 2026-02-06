import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [test, setTest] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>{test ? "Hello World" : "False"}</Text>
      <StatusBar style="auto" />
      <Button color="#328736" title="Click me" onPress={() => setTest(!test)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  dummyText: {
    margin: 16,
    borderWidth: 1,
    borderColor: "#328736",
    padding: 10,
    borderRadius: 10,
  },
});
