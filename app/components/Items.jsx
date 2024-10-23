import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import data from "../data/data.js"; // Make sure this path is correct
import Card from "./Card.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setAllData } from "../reducer/userReducer.js";
import { useNavigation } from '@react-navigation/native';
const Items = () => {
  const dispatch = useDispatch();
  const searchedData=useSelector(state=>state.user.inputVal)
  

  useEffect(() => {
    dispatch(setAllData(data));
  }, [dispatch]);

  const selectedCategories = useSelector((state) => state.user.selectedCategories);
  const allData = useSelector((state) => state.user.allData);

  // Filter the data based on selectedCategories
  const filteredData = allData
  .filter(item => selectedCategories.includes(item.category)) // Check category match
  .filter(item => item.name.toLowerCase().includes(searchedData.toLowerCase())); // Check name match with search input

 
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Card item={item} />
    </View>
  );

  return (
    <View>
      <Text style={styles.title}>Total Items: {filteredData.length}</Text>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1} // Ensure single column
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#EEEEEE",
    paddingBottom: 150,
  },
  item: {
    flex: 1,
    margin: 10,
    padding: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 30,
    paddingVertical: 15,
  },
  details: {
    fontSize: 16,
    color: "#666",
  },
});

export default Items;
