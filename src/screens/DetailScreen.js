
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTodos } from "../context/TodoContext"; // Använd Context API för att hämta setTodos
import { useRoute, useNavigation } from "@react-navigation/native";
import { format } from "date-fns";

const DetailScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const { todo } = params;
  const { setTodos } = useTodos(); // Hämta setTodos från Context

  const handleToggleDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todo.id ? { ...item, done: !item.done } : item
      )
    );
    navigation.goBack();
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todo.id));
    navigation.goBack();
  };

  const currentDate = format(new Date(), "MMMM d, yyyy");


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{todo.title}</Text>
        <Text style={styles.description}>{todo.description}</Text>
        <Button
            title={todo.done ? "Undo" : "Mark as Done"}
            onPress={handleToggleDone}
          />
      </View>
      <View style={styles.footer}>
        <Text style={styles.date}>{currentDate}</Text>
        <View style={styles.buttons}>
          
          <Button title="Delete" onPress={handleDelete} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "gray",
    marginBottom: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  date: {
    fontSize: 14,
    color: "gray",
  },
  buttons: {
    flexDirection: "row",
    gap: 8, 
  },
});

export default DetailScreen;
