import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

import LoginScreen from "../pages/LoginScreen";
import HomeScreen from "../pages/HomeScreen";

export default () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Login" component={LoginScreen} />
    <MainStack.Screen name="Home" component={HomeScreen} />
  </MainStack.Navigator>
);