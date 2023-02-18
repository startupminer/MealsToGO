import React from "react";
import { Text, View } from "react-native";

// restaurant needs to be passed in empty then set the defaults
export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Cool Burger Place",
    icon,
    photos = [
      "https://lh5.googleusercontent.com/p/AF1QipOeVHTzV20qwFfhN2Umxn0rIpyN55fOjOeVzh22=w228-h228-n-k-no",
    ],
    address = "555 Foodway",
    openingHours = "10AM - 12PM",
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <View>
      <Text>RestaurantInfo</Text>
      <Text>{name}</Text>
    </View>
  );
};
