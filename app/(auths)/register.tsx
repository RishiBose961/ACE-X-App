import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TextFeild from "@/components/TextFeild/TextFeild";
import { useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import CheckEnvironment from "../CheckEnvironment/CheckEnvironment";

export default function register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const { base_url } = CheckEnvironment();

  const registerMutation = useMutation({
    mutationFn: async ({
      name,
      email,
      password,
    }: {
      name: string;
      email: string;
      password: string;
    }) => {
      const response = await axios.post(`${base_url}/api/register`, {
        name,
        email,
        password,
      });
      return response.data; // Return response data
    },
    // eslint-disable-next-line no-unused-vars
    onSuccess: (data) => {
      alert("Register successful!");
      router.replace("/(auths)/login");
    },
    onError: (error: any) => {
      setError(error.response.data);
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Trigger the mutation
    registerMutation.mutate({ name, email, password });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar />
      <View className="flex-1 justify-center px-8">
        <View className="bg-white p-8 rounded-2xl shadow-md">
          <Text className="text-3xl font-bold mb-6 text-center text-gray-800">
            Register
          </Text>
          <View className="space-y-4">
            <View>
              <TextFeild
                title={"Name"}
                placeholder={"Enter your name"}
                keyboardType={"name-phone-pad"}
                onChangeText={(text: any) => setName(text)}
                value={name}
                autoCapitalize="none"
              />
            </View>
            <View className="mt-5">
              <TextFeild
                title={"Email"}
                placeholder={"Enter your email"}
                keyboardType={"email-address"}
                onChangeText={(text: any) => setEmail(text)}
                value={email}
                autoCapitalize="none"
              />
            </View>
            <View className="mt-5">
              <TextFeild
                title={"Password"}
                placeholder={"Enter your password"}
                onChangeText={(text: any) => setPassword(text)}
                value={password}
                secureTextEntry={!isPasswordVisible}
                autoCapitalize="none"
              />
              {password.length > 0 && (
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? (
                    <Text className=" text-center">Hide Password</Text>
                  ) : (
                    <Text className=" text-center">Show Password</Text>
                  )}
                </TouchableOpacity>
              )}
            </View>
            {error && <Text className="text-red-500 text-center">{error}</Text>}
            <TouchableOpacity
              className="bg-blue-500 py-3 rounded-lg mt-4"
              onPress={handleSubmit}
            >
              <Text className="text-white text-center font-semibold">
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
