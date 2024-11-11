import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../reducer/userReducer";
import Animated, { FadeInLeft, FadeOutRight, Layout } from "react-native-reanimated";
import typography from "../styles/Typo"; // Import typography

const CartCard = ({ item, animate }) => {
  const dispatch = useDispatch();
  const { img, name, price, size, quantity } = item;

  const handleRemove = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decrementQuantity(item.id));
  };

  return (
    <Animated.View
      style={styles.mainContainer}
      key={item.id}
      entering={animate ? FadeInLeft.duration(500).damping(30).stiffness(100) : undefined}
      exiting={FadeOutRight.duration(700).damping(50).stiffness(500)} // More noticeable exit
      layout={Layout.springify()} // Add Layout transition for smoother animation
    >
      <View>
        <Image source={{ uri: img }} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.name, typography.bold]}>{name}</Text>
        <View style={styles.detailContainer}>
          <Text style={[styles.heading, typography.Semibold]}>Size: </Text>
          <Text style={[styles.detail, typography.regular]}>{size}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={[styles.heading, typography.Semibold]}>Price: </Text>
          <Text style={[styles.detail, typography.regular]}>${price && price.toFixed(2)}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={[styles.heading, typography.Semibold]}>Quantity: </Text>
          <Text style={[styles.detail, typography.regular]}>{quantity}</Text>
        </View>
        <TouchableOpacity
          style={styles.removeBtn}
          onPress={() => handleRemove(item)}
        >
          <Text style={[styles.remove, typography.regular]}>Remove</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleDecreaseQuantity(item)}
            style={styles.decrementButton}
          >
            <Text style={[styles.buttonText, typography.semibold]}>-</Text>
          </TouchableOpacity>
          <Text style={[styles.quantity, typography.regular]}>
            {quantity < 10 ? `0${quantity}` : quantity}
          </Text>
          <TouchableOpacity
            onPress={() => handleIncreaseQuantity(item)}
            style={styles.incrementButton}
          >
            <Text style={[styles.buttonText, typography.semibold]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 110,
    resizeMode: "cover",
    borderRadius: 8,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "85%",
    alignSelf: "center",
    marginVertical: 8,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 4,
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  name: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  detailContainer: {
    flexDirection: "row",
    marginBottom: 6,
    alignItems: "center",
  },
  heading: {
    fontSize: 12,
    color: "#555",
    marginRight: 4,
  },
  detail: {
    fontSize: 12,
    color: "#333",
  },
  removeBtn: {
    backgroundColor: "#FF4D4D",
    padding: 6,
    borderRadius: 6,
    marginTop: 8,
  },
  remove: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12, // Increased margin for spacing
  },
  decrementButton: {
    backgroundColor: "#D3D3D3", // Light gray for decrement
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 6,
    marginRight: 10,
  },
  incrementButton: {
    backgroundColor: "#66BB6A", // Light green for increment
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 6,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  quantity: {
    fontSize: 16,
    color: "#000",
    marginHorizontal: 12,
  },
});

export default CartCard;
