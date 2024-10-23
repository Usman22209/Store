import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Card = ({item}) => {
  const { name, price, size, img } = item;
  
  const navigation = useNavigation(); // Hook for navigation

  // Function to handle Buy Now button press
  const handleBuyNow = () => {
    navigation.navigate('detail', { item: item });
  };

  return (
    <View style={styles.item}>
      {img && <Image source={{ uri: img }} style={styles.img} />}
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.details}>{price}</Text>
      <Text style={styles.details}><Text style={{fontWeight:"bold"}}>Size:</Text> {size}</Text>

      
      <TouchableOpacity style={styles.btn} onPress={handleBuyNow}>
        <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 10,
    padding: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color:"#6C48C5",
    paddingVertical:5
  },
  details: {
    fontSize: 18,
    color: "#3C3D37",
  },
  img: {
    width: "90%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 10,
    alignSelf: "center",
  },
  btn: {
    width: "100%",
    backgroundColor: "#6C48C5",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});

export default Card;
