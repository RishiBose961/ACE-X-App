import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../(redux)/authSlice";
const ProfileView = () => {
  const { isAuthenticated, isLoading, user } = useSelector(
    (state: {
      auth: { isAuthenticated: boolean; isLoading: boolean; user: any };
    }) => state.auth
  );

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUserAction());
  };

  return (
    <View className="flex-1 items-center mt-4">
      <View className="mt-3">
        <Image
          source={{ uri: user?.avatar }}
          style={{ width: 100, height: 100, borderRadius: 50 ,overflow: "hidden",}}
          contentFit="cover"
        />
      </View>
      <Text className="text-center text-lg mt-3">{user?.name}</Text>
      <Text className="text-center text-lg mt-3">{user?.username}</Text>
      <Text className="text-center text-lg mt-3">{user?.email}</Text>
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-red-500 py-3 px-4 rounded-lg mt-8"
      >
        <Text className="text-white text-center font-semibold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileView;
