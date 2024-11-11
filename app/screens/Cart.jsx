import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '../components/CartCard';
import CheckoutSummary from '../components/CheckoutSummary';
import CustomHeader from '../components/CustomHeader';
import Animated, { Layout } from 'react-native-reanimated';
const Cart = () => {
  const cart = useSelector((state) => state.user.Cart);

  return (
    <Animated.View style={styles.container}
    key={"cart"}
    layout={Layout.springify()}
    >
      <CustomHeader title={"Cart"} />
      
      {cart && (
        <ScrollView style={styles.scroll}>
          {cart.map((item, index) => (
            <CartCard 
              key={item.id} 
              item={item} 
              animate={index === 0} // Pass `animate` prop as true for the last item
            />
          ))}
        </ScrollView>
      )}

      <CheckoutSummary />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    paddingBottom: 180,
  },
  scroll: {
    marginBottom: 30,
  },
});

export default Cart;
