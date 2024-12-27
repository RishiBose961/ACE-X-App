import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageBackground } from "expo-image";
import { useSelector } from "react-redux";

export default function Header() {
  const { user } = useSelector((state: { auth: { user: any } }) => state.auth);

  return (
    <View className="flex-row justify-between items-center bg-black p-3">
      <Text className=" text-white text-2xl font-bold">ACE-X</Text>
      <ImageBackground
        source={{ uri: user?.avatar }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          overflow: "hidden",
        }}
        contentFit="cover"
      />
    </View>
  );
}
