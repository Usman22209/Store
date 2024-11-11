import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../reducer/userReducer";
import { useNavigation } from "expo-router";
import typography from "../styles/Typo"; // Updated path to typography
import Animated, {
  FadeInDown,
  FadeOutUp,
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  withSequence,
} from "react-native-reanimated";

const CartButton = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.Cart);
  const [quantity, setQuantity] = useState(1);
  const { price } = item;
  const cartitem = { ...item, quantity };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    cartitem.quantity = quantity;
  }, [quantity]);

  const handleCart = () => {
    dispatch(addtoCart(cartitem));
    navigation.navigate("Cart");
  };

  // Use shared value for opacity and scale animations for both price and quantity
  const priceOpacity = useSharedValue(1);
  const priceScale = useSharedValue(1);

  useEffect(() => {
    // Trigger opacity and scale animation when quantity changes
    priceOpacity.value = withSequence(
      withSpring(0.5, { damping: 20, stiffness: 150 }), // Fade out
      withSpring(1, { damping: 20, stiffness: 150 }) // Fade back in
    );
    priceScale.value = withSequence(
      withSpring(1.2, { damping: 20, stiffness: 150 }), // Scale up
      withSpring(1, { damping: 20, stiffness: 150 }) // Scale back to normal
    );
  }, [quantity]);

  // Apply animated styles for opacity and scale
  const animatedPriceStyle = useAnimatedStyle(() => {
    return {
      opacity: priceOpacity.value, // Apply opacity animation
      transform: [{ scale: priceScale.value }], // Apply scale animation
    };
  });

  return (
    <View style={styles.container}>
      {/* Wrap Animated.View around the price and apply opacity & scale animations */}
      <Animated.View style={animatedPriceStyle}>
        <Text style={[styles.price, typography.Semibold]}>
          {(price * quantity).toFixed(2)}$
        </Text>
      </Animated.View>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        {/* Apply entering and exiting animations to the quantity */}
        <Animated.Text
          style={[styles.quantity, typography.regular]}
          key={quantity} // Ensures re-render on quantity change
          entering={FadeInDown.springify().damping(30).stiffness(300)}
          exiting={FadeOutUp.springify().damping(30).stiffness(300)}
        >
          {quantity < 10 ? `0${quantity}` : quantity}
        </Animated.Text>

        <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.cartButton} onPress={handleCart}>
        <Text style={[styles.cartButtonText, typography.regular]}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6C48C5", // Changed to match a more vibrant color theme
    padding: 12,
    borderRadius: 12,
    marginVertical: 12,
    justifyContent: "space-between",
    marginBottom: 30,
  },
  price: {
    color: "#fff",
    fontSize: 18,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: "#6C48C5", // Match button text with container color
  },
  quantity: {
    fontSize: 18,
    color: "#000",
    marginHorizontal: 5,
    textAlign: "center",
    width: 30,
  },
  cartButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  cartButtonText: {
    fontSize: 16,
    color: "#6C48C5", // Match button text with button background color
  },
});

export default CartButton;
