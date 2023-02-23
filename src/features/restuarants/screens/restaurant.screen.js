import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
export const RestaurantScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchHeaderTitle}>Search</Text>
        <Searchbar />
      </View>
      <View style={styles.listContainer}>
        {/* <View style={styles.listheader}>
          <Text style={styles.listHeaderTitle}>List</Text>
        </View> */}
        <RestaurantInfoCard />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    backgroundColor: "green",
    padding: 16,
  },
  searchHeaderTitle: {
    justifyContent: "flex-start",
  },
  listContainer: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
  listHeader: {
    justifyContent: "flex-start",
  },
  listHeaderTtle: {
    color: "white",
  },
});
