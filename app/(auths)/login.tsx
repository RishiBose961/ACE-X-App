import TextFeild from "@/components/TextFeild/TextFeild";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../(redux)/authSlice";
import type { AppDispatch } from "../(redux)/store";
import CheckEnvironment from "../CheckEnvironment/CheckEnvironment";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [Error, setError] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { base_url } = CheckEnvironment();
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const response = await axios.post(`${base_url}/api/login`, {
        email,
        password,
      });
      dispatch(loginUserAction(response.data));
      return response.data; // Return response data
    },
    // eslint-disable-next-line no-unused-vars
    onSuccess: (data) => {
      alert("Login successful!");
      router.replace("/(tabs)");
      // console.log("Login success:", data);
    },
    onError: (error: any) => {
      setError(error.response.data);
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Trigger the mutation
    loginMutation.mutate({ email, password });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar />
      <View className="flex-1 justify-center px-8">
        <View className="bg-white p-8 rounded-2xl shadow-md">
          <Text className="text-3xl font-bold mb-6 text-center text-gray-800">
            Login
          </Text>
          <View className="space-y-4">
            <View>
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
          {
            password.length > 0 && (
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <Text className=" text-center">Hide Password</Text>
                ) : (
                  <Text className=" text-center">Show Password</Text>
                )}
              </TouchableOpacity>
            )
          }
              
            </View>
            {Error && <Text className="text-red-500 text-center">{Error}</Text>}
            <TouchableOpacity
              onPress={handleSubmit}
              className="bg-blue-500 py-3 rounded-lg mt-4"
            >
              <Text className="text-white text-center font-semibold">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
