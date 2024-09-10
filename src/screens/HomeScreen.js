import React from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet} from "react-native";
import { useTodos } from "../context/TodoContext"; 
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

const HomeScreen = () => {
  const { todos } = useTodos(); 
  const navigation = useNavigation();

  const handleNavigate = (todo) => {
    navigation.navigate("Detail", { todo });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleNavigate(item)}
      style={styles.itemContainer}
    >
      <View style={styles.itemContent}>
      <Text style={styles.itemText}>
        {item.title} - {item.done ? "Done" : "Pending"}
      </Text>
      <AntDesign
        name="rightcircleo"
        size={20}
        color="black"
        style={styles.icon}
      /></View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {todos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Set up your todo</Text>
        </View>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginVertical: 4,
    elevation: 2, // Skugga för Android
    shadowColor: "#000", // Skugga för iOS
    shadowOffset: { width: 0, height: 2 }, // Skugga för iOS
    shadowOpacity: 0.1, // Skugga för iOS
    shadowRadius: 2, // Skugga för iOS
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  itemText: {
    fontSize: 16,
  },
  icon: {
    marginRight:15

  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#888",
  },
});
export default HomeScreen;
