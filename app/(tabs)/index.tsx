import AnimatedCard from "@/components/Cards/AnimatedCard";
import useFetchAllProject from "@/hooks/useFetchAllProject";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
} from "react-native";

export default function Home() {
  const {
    isPending,
    fetchProjectAll,
    page,
    totalPages,
    pageNumbers,
    handleNextPage,
    handlePreviousPage,
  } = useFetchAllProject() as {
    isPending: boolean;
    fetchProjectAll: any;
    page: number;
    totalPages: any;
    pageNumbers: number[];
    handleNextPage: () => void;
    handlePreviousPage: () => void;
  };

  const [refreshing, setRefreshing] = useState(false);

  if (isPending) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          fetchProjectAll;
          setRefreshing(false);
        }}
      />
    } contentContainerStyle={{ paddingVertical: 10 }}>
      <View>
        {fetchProjectAll?.map((i: unknown, j: React.Key | null | undefined) => (
          <AnimatedCard item={i} key={j} />
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="p-3"
      >
        <TouchableOpacity
           className={`p-3 rounded-2xl   ${
            page === 1 ? "bg-red-500" : "bg-blue-500"
          }`}
          onPress={handlePreviousPage}
          disabled={page === 1}
        >
          <Text className=" text-white font-semibold">Previous</Text>
        </TouchableOpacity>

        <Text>({page})</Text>
        <TouchableOpacity
          className={`p-3 rounded-2xl   ${
            page === totalPages ? "bg-red-500" : "bg-blue-500"
          }`}
          onPress={handleNextPage}
          disabled={page === totalPages}
        >
          <Text className=" text-white font-semibold">Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
