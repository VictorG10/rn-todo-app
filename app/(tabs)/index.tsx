import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Todos() {
  const { toggleDarkMode } = useTheme();

  const todos = useQuery(api.todos.getTodos);

  console.log(todos);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <TouchableOpacity onPress={() => toggleDarkMode()}>
        <Text>Toggle</Text>
      </TouchableOpacity>
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
