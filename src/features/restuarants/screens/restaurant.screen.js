import * as React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && "margintop: ${StatusBar.currentHeight}px"};
`;

const SearchContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`;

const RestuarantListContainer = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`;
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
export const RestaurantScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>

    <RestuarantListContainer>
      <RestaurantInfoCard />
    </RestuarantListContainer>
  </SafeArea>
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
//   searchContainer: {
//     backgroundColor: "green",
//     padding: 16,
//   },
//   searchHeaderTitle: {
//     justifyContent: "flex-start",
//   },
//   listContainer: {
//     flex: 1,
//     backgroundColor: "blue",
//     padding: 16,
//   },
//   listHeader: {
//     justifyContent: "flex-start",
//   },
//   listHeaderTtle: {
//     color: "white",
//   },
// });
