import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import typography from '../styles/Typo'; // Import typography
import { Ionicons } from '@expo/vector-icons'; // For icon usage

const Card = ({ item }) => {
  const { name, price, size, img } = item;
  const navigation = useNavigation();

  const handleBuyNow = () => {
    navigation.navigate('detail', { item: item });
  };

  return (
    <View style={styles.card}>
      {img && <Image source={{ uri: img }} style={styles.img} />}
      <Text style={[styles.title, typography.bold]}>{name}</Text>
      
      <View style={styles.priceContainer}>
        <Ionicons name="pricetag" size={20} color="black" style={{ marginRight: 5 }} /> 
        <Text style={[styles.price, typography.regular]}>${price.toFixed(2)}</Text>
      </View>

      <View style={styles.sizeContainer}>
        <Text style={[styles.details, typography.regular]}>
          <Text style={[typography.bold]}>Size:</Text> {size}
        </Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={handleBuyNow}>
        <Text style={styles.btnText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 12,
    padding: 15,
    backgroundColor: "#FFFFFF", // Light background for card
    borderRadius: 12,
    shadowColor: "#000000", // Subtle shadow for elevation
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // Android shadow
    borderWidth: 1,
    borderColor: "#E0E0E0", // Light border color
    overflow: "hidden", // Keeps rounded corners in place
    justifyContent: 'center', // Centers content vertically
  },
  title: {
    fontSize: 24,
    color: "#7F3DFF", // Purple color for title
    marginVertical: 5,
    fontFamily: "Poppins-Bold",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  price: {
    fontSize: 18, // Dark green color for price
    marginLeft: 5,
    fontFamily: "Poppins-Bold",
  },
  details: {
    fontSize: 16,
    color: "#555", // Darker gray for details
    marginBottom: 5,
    fontFamily: "Poppins-Regular",
  },
  img: {
    width: "100%",
    height: 180,
    resizeMode: "contain",
    borderRadius: 12,
    marginBottom: 10, // Adds spacing between image and text
  },
  btn: {
    width: "100%",
    backgroundColor: "#7F3DFF", // Purple button color
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#FFFFFF", // White text for button
    fontWeight: "bold",
    fontSize: 16,
  },
  sizeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default Card;
