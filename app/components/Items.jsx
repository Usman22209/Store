import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import data from "../data/data.js"; // Make sure this path is correct
import Card from "./Card.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setAllData } from "../reducer/userReducer.js";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown, FadeOutUp, withSpring } from "react-native-reanimated";
import typography from "../styles/Typo.js";

const Items = () => {
  const dispatch = useDispatch();
  const searchedData = useSelector((state) => state.user.inputVal);

  useEffect(() => {
    dispatch(setAllData(data));
  }, [dispatch]);

  const selectedCategories = useSelector(
    (state) => state.user.selectedCategories
  );
  const allData = useSelector((state) => state.user.allData);

  // Filter the data based on selectedCategories and search input
  const filteredData = allData
    .filter((item) => selectedCategories.includes(item.category)) // Check category match
    .filter((item) =>
      item.name.toLowerCase().includes(searchedData.toLowerCase())
    ); // Check name match with search input

  const renderItem = ({ item }) => (
    <Animated.View
      style={[styles.item]}
      entering={FadeInDown.springify().stiffness(300).damping(30)} // Animation for entering card
      exiting={FadeOutUp.springify().stiffness(300).damping(30)} // Animation for exiting card
    >
      <Card item={item} />
    </Animated.View>
  );

  return (
    <View>
      <View style={{ flexDirection: "row", width: "auto" }}>
        <Text style={[styles.title, typography.Semibold, { marginRight: -20 }]}>
          Total Items:
        </Text>
        <Animated.Text
          style={[styles.title, typography.regular]}
          entering={FadeInDown.springify().stiffness(300).damping(30)} // Animation for entering count
          exiting={FadeOutUp.springify().stiffness(300).damping(30)} // Animation for exiting count
          key={filteredData.length}
        >
          {filteredData.length}
        </Animated.Text>
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1} // Ensure single column
        contentContainerStyle={styles.container}
        extraData={filteredData} // Ensure re-render when data changes
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 5,
    backgroundColor: "#EEEEEE",
    paddingBottom: 150,
  },
  item: {
  },
  title: {
    fontSize: 20,
    paddingLeft: 30,
    paddingVertical: 15,
  },
  details: {
    fontSize: 16,
    color: "#666",
  },
});

export default Items;
