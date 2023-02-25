import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const InfoDescription = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding: ${(props) => props.theme.space[2]};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[2]};
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ImageView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]};
`;

// restaurant needs to be passed in empty then set the defaults
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Cool Burger Place",
    icon,
    photos = [
      "https://lh5.googleusercontent.com/p/AF1QipOeVHTzV20qwFfhN2Umxn0rIpyN55fOjOeVzh22=w228-h228-n-k-no",
    ],
    description = "American-style gourmet burger joint. Family-owned since 1999 and famous for juicy burgers and cajun fries!",
    address = "555 Foodway",
    openingHours = "HOURS: 10AM - 12PM",
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <Card>
      <ImageView>
        <Card.Cover key={name} source={{ uri: photos[0] }} />
      </ImageView>
      <Card.Title title={name} subtitle={openingHours} left={LeftContent} />
      <Info>
        <Address>{address}</Address>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <InfoDescription>{description}</InfoDescription>
      </Info>
      {/* <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content> */}
    </Card>
  );
};
