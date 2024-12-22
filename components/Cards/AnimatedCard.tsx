import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
export default function AnimatedCard() {
  return (
    <View className="p-2">
      <View className="h-48">
        <Image
          src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          alt="loading"
          className="w-full h-full rounded-xl"
        />
      </View>
      <Text className="p-1 text-lg font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at quia,
        quo voluptate magni quos eveniet quasi neque eligendi autem ipsa
        consequatur, voluptatum commodi incidunt, reiciendis labore
        necessitatibus iure suscipit.
      </Text>
      <View className="flex-row justify-between p-1">
        <AntDesign name="eyeo" size={24} color="black" />
        <View className="flex-row items-center">
          <AntDesign name="staro" size={24} color="black" />
          <Text className="mx-2">1</Text>
        </View>
        <AntDesign name="qrcode" size={24} color="black" />
        <AntDesign name="sharealt" size={24} color="black" />
      </View>
    </View>
  );
}
