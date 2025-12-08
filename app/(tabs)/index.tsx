import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Todos() {
  const [user, setUser] = useState("Victor");
  const [email, setEmail] = useState("victor@email.com");

  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    fontSize: 50,
  },
});
