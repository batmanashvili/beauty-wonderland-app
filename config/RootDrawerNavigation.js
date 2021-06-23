import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ShopScreen from "../screens/ShopScreen";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";

import OrdersStackNavigation from './OrdersStackNavigation';
import ShopStackNavigation from './ShopStackNavigation'

const AppDrawer = createDrawerNavigator();
const RootDrawerNavigation = () => (
  <AppDrawer.Navigator drawerType="front">
    <AppDrawer.Screen
      name="Home"
      component={ShopStackNavigation}
      options={{ drawerLabel: "Home" }}
    />

    <AppDrawer.Screen
      name="Orders"
      component={OrdersStackNavigation}
      options={{
        gestureEnabled: false,
      }}
    />

  </AppDrawer.Navigator>
);

export default RootDrawerNavigation