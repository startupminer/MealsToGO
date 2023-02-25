import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

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

const OpenIcon = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Section = styled.View`
  flex-direction: row;
`;
const SectionRight = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
// restaurant needs to be passed in empty then set the defaults
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Cool Burger Place",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://lh5.googleusercontent.com/p/AF1QipOeVHTzV20qwFfhN2Umxn0rIpyN55fOjOeVzh22=w228-h228-n-k-no",
    ],
    description = "American-style gourmet burger joint. Family-owned since 1999 and famous for juicy burgers and cajun fries!",
    address = "555 Foodway",
    openingHours = "HOURS: 10AM - 12PM",
    rating = 4,
    isOpen = true,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <Card key={name}>
      <ImageView>
        <Card.Cover key={name} source={{ uri: photos[0] }} />
      </ImageView>
      <Card.Title title={name} subtitle={openingHours} left={LeftContent} />
      <Info>
        <Address>{address}</Address>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionRight>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpen && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionRight>
        </Section>

        <InfoDescription>{description}</InfoDescription>
      </Info>
      {/* <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
      </Card.Content> */}
    </Card>
  );
};
