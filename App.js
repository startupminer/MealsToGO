import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantScreen } from "./src/features/restuarants/screens/restaurant.screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// Temp import to test request response
import { restuarantsRequest } from "./src/services/restuarants/restuarants.service";
import { RestuarantContextProvider } from "./src/services/restuarants/restuarants.context";
import { LocationProviderContext } from "./src/services/locations/location.context";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

function MapScreen() {
  return <Text>Map!</Text>;
}

function SettingsScreen() {
  return <Text>Settings!</Text>;
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* All navigation now has access to the restuarants */}
        {/* <LocationProviderContext> */}
        <RestuarantContextProvider>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name="Restuarants"
                component={RestaurantScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="md-restuarants" size={32} color="red" />
                  ),
                  tabBarActiveTintColor: "blue",
                }}
              />
              <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="md-map" size={32} color="red" />
                  ),
                  tabBarActiveTintColor: "blue",
                }}
              />
              <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="md-settings" size={32} color="red" />
                  ),
                  tabBarActiveTintColor: "blue",
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </RestuarantContextProvider>
        {/* </LocationProviderContext> */}
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
