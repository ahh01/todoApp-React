import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Todos",
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate("Add")}
                title="Add"
                color="#000"
              />
            ),
          })}
        />

        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{title: "New todo",
          presentation: "modal" }}
          
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "Todo Details", }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
