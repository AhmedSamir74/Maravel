import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import HomeScreen from "../screens/Home/Home";
import SearchScreen from "../screens/Search/Search";
import DetailsScreen from "../screens/Details/Details";

const HomeFlow = createStackNavigator();

const HomeNavigation = () => (
  <HomeFlow.Navigator initialRouteName="Home">
    <HomeFlow.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeFlow.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeFlow.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerShown: false,
      }}
    />
  </HomeFlow.Navigator>
);

export default HomeNavigation;
