import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import styled from "styled-components";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Title = styled.Text`
  color: purple;
  padding: 20px;
`;

// restaurant needs to be passed in empty then set the defaults
export const RestaurantInfoCard = ({ restaurant = {} }) => {
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
    <Card style={styles.card}>
      <View style={styles.imageContainer}>
        <Card.Cover key={name} source={{ uri: photos[0] }} />
      </View>
      <Title>{address}</Title>
      <Card.Title title={name} subtitle={openingHours} left={LeftContent} />
      {/* <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content> */}
    </Card>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: "white",
  },
});
