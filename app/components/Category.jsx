import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../reducer/userReducer";
import typography from "../styles/Typo";

const Category = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state) => state.user.selectedCategories);

  const handlePress = (category) => {
    dispatch(toggleCategory(category));
  };

  return (
    <View style={styles.container}>
      {["Food", "Drink", "Dress", "Mobile"].map((category) => (
        <Pressable
          key={category}
          onPress={() => handlePress(category.toLowerCase())}
          style={[styles.pressable, selectedCategories.includes(category.toLowerCase()) && styles.selected]}
        >
          <Text
            style={[
              selectedCategories.includes(category.toLowerCase())
                ? styles.textSelect
                : styles.text,
              typography.regular,
            ]}
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
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  pressable: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5, // Add some space between items
  },
  text: {
    fontSize: 12,
    backgroundColor: "#E3D9F7", // Lighter shade for unselected category
    paddingTop: 12,
    paddingBottom: 8,
    paddingHorizontal: 18,
    borderRadius: 30, // Larger radius for a more modern rounded look
    textAlign: "center",
    overflow: "hidden",
    color: "#6C48C5", // Matching primary color for unselected items
    fontWeight: "500", // Slightly bolder text for better readability
    transition: "background-color 0.3s ease-in-out", // Smooth hover transition
  },
  textSelect: {
    fontSize: 12,
    backgroundColor: "#7F3DFF", // Selected category color
    color: "#FFFFFF", // White text for selected items
    paddingTop: 12,
    paddingBottom: 8,
    paddingHorizontal: 18,
    borderRadius: 30,
    textAlign: "center",
    overflow: "hidden",
    fontWeight: "500",
  },
  selected: {
    transform: [{ scale: 1.05 }], // Slightly enlarge selected category for emphasis
  },
});

export default Category;
