import React from 'react';
import { View, StyleSheet } from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Vector icons for stars

const StarRating = ({ rating }) => {
  return (
    <View style={styles.container}>
      <Stars
        default={rating}
        count={5}
        half={true} // Enable half and fractional stars
        starSize={50} // Adjust size of the stars
        fullStar={<Icon name="star" style={[styles.star, styles.fullStar]} />}
        emptyStar={<Icon name="star-outline" style={[styles.star, styles.emptyStar]} />}
        halfStar={<Icon name="star-half" style={[styles.star, styles.halfStar]} />}
        disabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  star: {
    color: '#FFD700', // Gold color for stars
    fontSize: 30, // Adjust size of stars
  },
  fullStar: {
    color: '#FFD700',
  },
  emptyStar: {
    color: '#CCCCCC', // Light gray for empty stars
  },
  halfStar: {
    color: '#FFD700',
  },
});

export default StarRating;
