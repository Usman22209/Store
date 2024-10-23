import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from '../components/CartCard'
import CheckoutSummary from '../components/CheckoutSummary'

const Cart = () => {
    const cart = useSelector((state) => state.user.Cart);
  return (
    <View style={styles.container}>
   {cart && <ScrollView style={styles.scroll} >
      {cart.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </ScrollView>}
    <CheckoutSummary/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    paddingBottom: 180,
  },
})
export default Cart