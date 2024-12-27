import { AntDesign } from "@expo/vector-icons";

import { useQuery } from "@tanstack/react-query";
import { ImageBackground } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CheckEnvironment from "../CheckEnvironment/CheckEnvironment";
import ProjectLink from "./ProjectLink";

export default function PostId() {
  const params = useLocalSearchParams();
  const { base_url } = CheckEnvironment();

  const {
    isPending,
    error,
    isError,
    data: fetchPostById,
  } = useQuery({
    queryKey: ["fetchPostByIds", params.id],
    queryFn: async () => {
      return await fetch(`${base_url}/api/get-project-byid/${params.id}`, {
        method: "GET",
      }).then((res) => res.json());
    },
  });

  if (isError) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  if (isPending) {
    return <ActivityIndicator size="large" color="#0000ff" className="mt-3" />;
  }

  const data = fetchPostById?.specificPost;

  return (
    <View className="p-2">
      <View className="h-48">
        <Image
          source={{
            uri: data?.projectImage,
          }}
          className="w-full h-full rounded-xl"
        />
      </View>

      <View className="flex-row justify-between items-center p-1 mt-4 mb-3">
        <View className="flex-row items-center">
          <ImageBackground
            source={{
              uri: data?.users?.avatar,
            }}
            style={{ width: 30, height: 30 }}
          />
          <Text className="mx-2">{data?.users?.username}</Text>
          <Text className="text-black text-center font-semibold px-2">12k</Text>
        </View>

        <View className="flex-row items-center">
          <AntDesign name="staro" size={24} color="black" />
          <Text className="mx-2">1</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity className="bg-black rounded-full py-2 px-4">
          <Text className="text-white text-center font-semibold">Follow</Text>
        </TouchableOpacity>
      </View>
      <Text className="p-1 text-xl font-semibold">{data?.title}</Text>
      <Text className="p-1">{data?.description}</Text>
      <View className="flex-row justify-between items-center p-1 mt-4 mb-3">
        <View className="bg-black rounded-full py-2 px-4">
          <Text className="text-white text-center font-semibold">
            {data?.pcategory}
          </Text>
        </View>
        <Text className="mx-2">
          {new Date(data?.createdAt).toLocaleDateString()}
        </Text>
      </View>
      <View className="flex-row items-center">
        
        <ProjectLink title="Visit Project" data={data?.plink}/>
        <ProjectLink title="GitHub" data={data?.prepository}/>
 
      </View>
    </View>
  );
}
