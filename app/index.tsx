import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
const index = () => {
  const router = useRouter();
  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar />
        <ScrollView className="flex-1">
          {/* Hero Section */}
          <View className="bg-blue-500/55 p-8 items-center">
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/rishibose1901-f5ff6.appspot.com/o/ace-x-high-resolution-logo-transparent.png?alt=media&token=582900cc-6269-432d-a03d-e2555e4f3f51",
              }}
              className="w-32 h-32 rounded-full mb-4"
            />
            <Text className="text-3xl font-bold text-white mb-2">
              Welcome to ACE-X
            </Text>
            <Text className="text-white text-center mb-6">
              Discover amazing features and boost your Project
            </Text>

            <TouchableOpacity className="bg-white py-3 px-6 rounded-full" onPress={() => router.push("/(auths)/login")}>
                <Text className="text-blue-500 font-semibold">Get Started</Text>
            </TouchableOpacity>
          </View>

          {/* Features Section */}
          <View className="p-8">
            <Text className="text-2xl font-bold mb-6 text-center">
              Key Features
            </Text>
            <View className="my-4 space-x-4">
              <FeatureItem
                icon="speedometer-outline"
                title="Lightning Fast"
                description="Experience unparalleled speed and performance"
              />
              <FeatureItem
                icon="lock-closed-outline"
                title="Secure"
                description="Your data is protected with state-of-the-art encryption"
              />
            </View>
          </View>

          {/* Call to Action */}
          <View className="bg-gray-100 p-8 items-center">
            <Text className="text-2xl font-bold mb-4 text-center">
              Ready to dive in?
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/(auths)/register")}
            >
              <Text className="text-blue-500 font-semibold">
                Create an Account
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>

    </>
  );
};

export default index;
interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <View className="flex-row items-center">
      <View className="bg-blue-100 p-3 rounded-full mr-4">
        <Ionicons name={icon as any} size={24} color="#3b82f6" />
      </View>
      <View className="flex-1">
        <Text className="font-semibold text-lg mb-1">{title}</Text>
        <Text className="text-gray-600">{description}</Text>
      </View>
    </View>
  );
}
