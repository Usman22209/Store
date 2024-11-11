import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { setInput } from "../reducer/userReducer";
import Category from "../components/Category";
import Items from "../components/Items";
import { useNavigation } from "expo-router";
import CustomHeader from "../components/CustomHeader";
import typography from "../styles/Typo";

const Landing = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const inputval = useSelector((state) => state.user.inputVal);

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={"Home"} />
      <View style={styles.searchContainer}>
        <Icon name="search" size={22} color="#8F8F8F" style={styles.icon} />
        <TextInput
          placeholder="Search"
          style={[styles.input, typography.regular]}
          value={inputval}
          onChangeText={(text) => dispatch(setInput(text))}
          placeholderTextColor="#A8A8A8"
        />
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Icon name="shopping-cart" size={24} color="#8F8F8F" />
        </TouchableOpacity>
      </View>
      <Category />
      <Items />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7", // Light background for the whole screen
    flex: 1,
  },
  searchContainer: {
    backgroundColor: "#FFFFFF", // White background for the search bar
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    borderRadius: 30, // More rounded corners for modern look
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginTop: 20,
    shadowColor: "#000", // Light shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5, // For Android shadow
    alignItems: "center", // Center icons and input vertically
  },
  icon: {
    paddingRight: 12, // More space between the icon and input field
  },
  input: {
    color: "#333333", // Dark text for better contrast
    fontSize: 16,
    width: "75%", // Slightly reduced width for balance
    paddingVertical: 0,
    fontFamily: "Poppins-Regular",
  },
  btn: {
    backgroundColor: "#6C48C5", // Violet color for button (for consistency)
  },
});

export default Landing;
