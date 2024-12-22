import AnimatedCard from "@/components/Cards/AnimatedCard";
import React from "react";
import { ScrollView, View } from "react-native";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
    <View>
      {[0, 1, 2, 3].map((i, j) => (
        <AnimatedCard key={j}/>
      ))}
    </View>
    </ScrollView>

  );
}

