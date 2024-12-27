import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

interface AnimatedCardProps {
  item: any;
}

export default function AnimatedCard({ item }: AnimatedCardProps) {
  return (
    <View className="p-2">
      <View className="h-48">
        <Image
          source={{
            uri: item?.projectImage,
          }}
          alt="loading"
          className="w-full h-full rounded-xl"
        />
      </View>
      <Text className="p-1 text-lg font-semibold">{item?.title}</Text>
      <View className="flex-row justify-between p-1">
        <Link
          href={{
            pathname: "/PostShow/PostId",
            params: {
              id: item?.id,
            },
          }}
        >
          <AntDesign name="eyeo" size={24} color="black" />
        </Link>

        <View className="flex-row items-center">
          <AntDesign name="staro" size={24} color="black" />
          <Text className="mx-2">1</Text>
        </View>
        <AntDesign name="qrcode" size={24} color="black" />
        <AntDesign name="sharealt" size={24} color="black" />
        <FontAwesome name="user-circle" size={24} color="black" />
      </View>
    </View>
  );
}
