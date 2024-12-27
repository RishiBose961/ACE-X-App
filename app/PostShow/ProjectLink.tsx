import React from 'react';
import { Linking, Alert, TouchableOpacity, Text } from 'react-native';

const ProjectLink = ({ data, title }: { data: string, title: string }) => {

  const handlePress = async () => {


    const url: string = data;
    

    if (!url) {
      Alert.alert("Error", "No URL provided.");
      return;
    }

    if (!url.startsWith("https")) {
      Alert.alert("Error", "Invalid URL format. Ensure it starts with 'http://' or 'https://'.");
      return;
    }

    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", `Cannot open URL: ${url}`);
      }
    } catch (error) {
      console.error("Error opening URL:", error);
      Alert.alert("Error", "An unexpected error occurred.");
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} className=' m-4'>
      <Text style={{ color: "blue", fontWeight: "bold" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ProjectLink;
