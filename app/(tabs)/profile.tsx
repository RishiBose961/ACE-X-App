import React from "react";
import { View, Text, Image, Button } from "react-native";

const ProfileView = () => {
  return (
    <View className="flex-1 items-center mt-4">
      <View className="mt-3">
        <Image
          src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          className="w-48 h-48 rounded-full"
          alt="Profile"
        />
      </View>
      <Text className="text-center text-lg mt-3">NAME</Text>
      <Text className="text-center text-lg mt-3">USERNAME</Text>
      <Text className="text-center text-lg mt-3">EMAIL</Text>
      <Button title="Logout"/>
    </View>
  );
};

export default ProfileView;
