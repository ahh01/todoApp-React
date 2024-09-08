import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useTodos } from "../context/TodoContext";

const AddScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { todos, setTodos } = useTodos(); // Hämta todos och setTodos från Context

  const handleAddTodo = () => {
    if (title.trim()) {
      const newTodo = {
        id: Date.now().toString(), // Ger varje todo ett unikt ID baserat på tiden
        title,
        description,
      };
      setTodos([...todos, newTodo]); // Lägg till den nya todo:n till listan
      setTitle("");
      setDescription("");
      navigation.goBack(); // Stäng modalen efter att todo har lagts till
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Enter Todo"
          value={title}
          onChangeText={setTitle}
          style={styles.inputTitle}
        />
        <TextInput
          placeholder="Enter Description"
          value={description}
          onChangeText={setDescription}
          multiline
          style={styles.inputDescription}
        />
        <Button title="Add Todo" onPress={handleAddTodo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputTitle: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  inputDescription: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    height: 150, 
    fontSize: 16,
  },
});

export default AddScreen;
