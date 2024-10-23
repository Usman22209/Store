import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch,useSelector } from "react-redux";
import { addtoCart } from "../reducer/userReducer";

const CartButton = ({ item }) => {
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
    console.log(cart);
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.price}>{(price * quantity).toFixed(2)}$</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>
          {quantity < 10 ? `0${quantity}` : quantity}
        </Text>
        <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.cartButton} onPress={handleCart}>
        <Text style={styles.cartButtonText}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#002366",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  price: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 16,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 5,
  },
  button: {
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#000",
  },
  quantity: {
    fontSize: 16,
    color: "#000",
    marginHorizontal: 10,
  },
  cartButton: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 20,
  },
  cartButtonText: {
    fontSize: 16,
    color: "#000",
  },
});

export default CartButton;
