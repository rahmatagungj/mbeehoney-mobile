import React from "react";
import HomeScreen from "./screens/HomeScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ContactScreen from "./screens/ContactScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Beranda") {
            return (
              <MaterialIcons name={"home-filled"} size={size} color={color} />
            );
          } else if (route.name === "Produk") {
            return <AntDesign name={"appstore1"} size={size} color={color} />;
          } else if (route.name === "Kontak") {
            return <MaterialIcons name={"call"} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#F98404",
        inactiveTintColor: "#728196",
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          backgroundColor: "#ffffff",
          paddingBottom: 3,
          padding: 5,
          position: "absolute",
        },
      }}
    >
      <Tab.Screen name="Beranda" component={HomeScreen} />
      <Tab.Screen name="Produk" component={ProductListScreen} />
      <Tab.Screen name="Kontak" component={ContactScreen} />
    </Tab.Navigator>
  );
};

export default Home;
