import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../reducer/userReducer";

const Category = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state) => state.user.selectedCategories);

  const handlePress = (category) => {
    dispatch(toggleCategory(category));

    
  };

  return (
    <View style={styles.container}>
      {["Food", "Drink", "Dress", "Mobile"].map((category) => (
        <Pressable key={category} onPress={() => handlePress(category.toLowerCase())}>
          <Text
            style={
              selectedCategories.includes(category.toLowerCase())
                ? styles.textSelect
                : styles.text
            }
          >
            {category}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    backgroundColor: "#D4BEE4",
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  textSelect: {
    fontSize: 18,
    backgroundColor: "#6C48C5",
    padding: 5,
    color: "white",
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});

export default Category;
