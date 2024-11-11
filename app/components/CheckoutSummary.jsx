import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../reducer/userReducer";
import { useNavigation } from "expo-router";
import FlashMessage, { showMessage } from "react-native-flash-message";
import typography from "../styles/Typo"; // Import typography
import Animated, { FadeInDown, FadeInLeft, FadeOutRight, FadeOutUp } from "react-native-reanimated";

const CheckoutSummary = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.Cart);
  const sum = cart.reduce((total, item) => total + item.price * item.quantity, 0);
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
    } else {
      showMessage({
        message: "Cart is empty",
        type: "warning",
        icon: "warning",
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <Text style={[styles.totalText, typography.bold]}>
          Total:
        </Text>
        <Animated.Text
          style={[styles.totalAmountText, typography.bold]}
          entering={FadeInDown.springify().stiffness(300).damping(30)}
          exiting={FadeOutUp.springify().stiffness(300).damping(30)}
          key={sum}
        >
          {sum.toFixed(2)}$
        </Animated.Text>
      </View>
<View style={{flexDirection:"row"}}>
      <Animated.Text
        style={[styles.itemsText, typography.regular]}
        entering={FadeInLeft.springify().stiffness(300).damping(30)}
        exiting={FadeOutRight.springify().stiffness(300).damping(30)}
        key={itemsnum}
      >
        {itemsnum}&nbsp;
      </Animated.Text>
      <Text style={[styles.itemsText]}>Items</Text></View>

      <TouchableOpacity style={styles.button} onPress={handle}>
        <Text style={[styles.buttonText, typography.Semibold]}>
          Proceed To Checkout
        </Text>
      </TouchableOpacity>

      <FlashMessage position="top" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E2A47", // Darker background for better contrast
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    shadowColor: "#000", // Subtle shadow for a floating effect
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5, // For Android
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  totalText: {
    color: "#fff",
    fontSize: 26, // Larger font size for the total label
  },
  totalAmountText: {
    color: "#fff", // Price text color
    fontSize: 26, // Same font size for the amount
    marginLeft: 5,
  },
  itemsText: {
    color: "#D1D1D1", // Lighter color for the items text
    fontSize: 18,
    marginBottom: 18,
  },
  button: {
    backgroundColor: "#66BB6A",
    borderRadius: 10, // More rounded corners for a modern look
    paddingVertical: 12,
    paddingHorizontal: 30,
    shadowColor: "#32CD32",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5, // For Android
  },
  buttonText: {
    color: "#fff",
    fontSize: 20, // Larger text for better readability
  },
});

export default CheckoutSummary;
