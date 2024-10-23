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

const Landing = () => {
  const navigation=useNavigation()
  const dispatch = useDispatch();
  const inputval = useSelector((state) => state.user.inputVal);
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={30} color="white" style={styles.icon} />
        <TextInput
          placeholder="Search"
          style={styles.input}
          value={inputval}
          onChangeText={(text) => dispatch(setInput(text))}
          placeholderTextColor={"white"}
        />
        <TouchableOpacity onPress={() => navigation.navigate(name="Cart")}>
          <Icon name="shopping-cart" size={30} color="white"  />
        </TouchableOpacity>
      </View>
      <Category />
      <Items />
    </View>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "#6C48C5",
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    gap: 20,
  },
  container: {
    backgroundColor: "#EEEEEE",
    flex: 1,
  },
  input: {
    alignSelf: "center",
    color: "white",
    fontSize: 20,
    width: "65%",
  },
});
export default Landing;
