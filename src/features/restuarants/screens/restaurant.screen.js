import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margintop: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.error};
  padding: 16px;
`;

const RestuarantListContainer = styled.View`
  flex: 1;
  background-color: blue;
  padding: 16px;
`;
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
export const RestaurantScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>

    <RestuarantListContainer>
      {/* <View style={styles.listheader}>
          <Text style={styles.listHeaderTitle}>List</Text>
        </View> */}
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
