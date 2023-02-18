import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <Text style={styles.searchHeaderTitle}>Search</Text>
            <Searchbar />
          </View>
          <View style={styles.listContainer}>
            <View style={styles.listheader}>
              <Text style={styles.listHeaderTitle}>List</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

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
