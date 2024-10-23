import React from "react";
import { View, Text, StyleSheet, Image,ScrollView } from "react-native";
import Seprater from "../components/Seprater";
import CartButtton from "../components/CartButton";
import StarRating from "../components/StarRating";
const DetailPage = ({ route }) => {
  const { item } = route.params; // Get the item passed through navigation
  const { name, price, size, img,rating,reviews,description } = item;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: img }} style={styles.img} />
      
      <View style={styles.titleContainer}>
        <View style={styles.subCont}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.sizeText}>Size: {size}</Text>
        </View>
        <View style={styles.subCont}>
          <StarRating rating={rating}/>
          <Text style={styles.reviewsText}>{reviews} Reviews</Text>
        </View>
      </View>
      <Seprater />
      <Text style={{fontWeight:"bold",fontSize:20,marginVertical:10}}>Product Descripton</Text>
      <Text>{description}</Text>
      <CartButtton item={item}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20,
  },
  img: {
    width: "100%",
    height: 300,
    resizeMode: "stretch", 
    alignSelf: "center",
    marginVertical: 20,
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", 
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 8,
  },
  subCont: {
    flex: 1,
    paddingHorizontal: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  sizeText: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6C48C5",
  },
  reviewsText: {
    fontSize: 14,
    color: "#999",
    marginTop: 5,
  },
});

export default DetailPage;
