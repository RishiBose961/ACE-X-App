import Header from "@/components/Header/Header";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          header:()=><Header/>,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={24}
              color={focused ? "purple" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="createPost"
        options={{
          title: "Create",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="create"
              size={24}
              color={focused ? "purple" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user-circle"
              size={24}
              color={focused ? "purple" : "black"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
