import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../reducer/userReducer";
import { useNavigation } from "expo-router";
import FlashMessage, { showMessage } from "react-native-flash-message";
const CheckoutSummary = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.Cart);
  const sum = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const itemsnum = cart.reduce((total, item) => total + item.quantity, 0);
  const handle = () => {
    dispatch(emptyCart());
    if (cart.length > 0) {
      showMessage({
        message: "Order Placed Successfully",
        type: "success",
        icon: "success",
      });
      setTimeout(() => {
        navigation.navigate("Landing");
      }, 1000);
      
    }else{
      showMessage({
        message: "Cart is empty",
        type: "warning",
        icon: "warning",
      });
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.totalText}>Total: ${sum.toFixed(2)}</Text>
      <Text style={styles.itemsText}>({itemsnum} items)</Text>
      <TouchableOpacity style={styles.button} onPress={handle}>
        <Text style={styles.buttonText}>Proceed To Checkout</Text>
      </TouchableOpacity>
      <FlashMessage position="top" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000080",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  totalText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemsText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#32CD32",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CheckoutSummary;
