import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../reducer/userReducer";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  const { img, name, price, size, quantity } = item;
  const handleremove = (item) => {
    dispatch(removeFromCart(item.id));
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image source={{ uri: img }} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.heading}>Size: </Text>
          <Text style={styles.detail}>{size}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.heading}>Price: </Text>
          <Text style={styles.detail}>${price && price.toFixed(2)}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.heading}>Quantity: </Text>
          <Text style={styles.detail}>{quantity}</Text>
        </View>
        <TouchableOpacity
          style={styles.removeBtn}
          onPress={() => handleremove(item)}
        >
          <Text style={styles.remove}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 130,
    resizeMode: "cover",
    borderRadius: 10,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f8f8f8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    marginBottom: 5,
  },
  detailContainer: {
    flexDirection: "row",
    marginBottom: 3,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#555",
  },
  detail: {
    fontSize: 16,
    color: "#555",
  },
  removeBtn: {
    backgroundColor: "#6C48C5",
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  remove: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default CartCard;
