import TextFeild from "@/components/TextFeild/TextFeild";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";
import CheckEnvironment from "../CheckEnvironment/CheckEnvironment";

export default function createPost() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [title, settitle] = useState<string | null>("");
  const [description, setdescription] = useState("");
  const [pcategory, setcategory] = useState("");
  const [plink, setlink] = useState("");
  const [prepository, setprepository] = useState("");
  const [error, setError] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [base64Image, setBase64Image] = useState<string>("");

  const { user } = useSelector(
    (state: { auth: { user: { token: string } } }) => state.auth
  );
  const { base_url } = CheckEnvironment();

  const createPostMutation = useMutation({
    mutationFn: async ({
      title,
      description,
      pcategory,
      plink,
      prepository,
    }: {
      title: string;
      description: string;
      pcategory: string;
      plink: string;
      prepository: string;
    }) => {
      const response = await axios.post(
        `${base_url}/api/create-project`,
        {
          projectImage: base64Image,
          title,
          description,
          pcategory,
          plink,
          prepository,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              progressEvent.total
                ? (progressEvent.loaded * 100) / progressEvent.total
                : 0
            );
            setUploadProgress(percentCompleted);
          },
        }
      );

      return response.data; // Return response data
    },
    // eslint-disable-next-line no-unused-vars
    onSuccess: (data) => {
      alert("Post created successfully!");

      setUploadProgress(0);
    },
    onError: (error) => {
      setError(error.message || "An error occurred");
      setUploadProgress(0);
    },
  });

  const handleSubmit = () => {
    setError("");

    // Basic validation
    if (!title || !description || !pcategory || !plink || !prepository) {
      setError("All fields are required.");
      return;
    }

    // Trigger the mutation
    if (selectedImage) {
      createPostMutation.mutate({
        title,
        description,
        pcategory,
        plink,
        prepository,
      });
    } else {
      setError("Please upload an image.");
    }
  };

  // Function to request permissions and pick an image
  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri; // Use the result directly
      setSelectedImage(imageUri);

      // Convert the image to Base64
      const base64 = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setBase64Image(`data:image/jpeg;base64,${base64}`);
    }
  };

  const takePhoto = async () => {
    // Request camera permissions
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission to access camera is required!");
      return;
    }

    // Open camera
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri; // Use the result directly
      setSelectedImage(imageUri);

      // Convert the image to Base64
      const base64 = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setBase64Image(`data:image/jpeg;base64,${base64}`);
    }
  };

  const wordLimits = 10;
  const wordLimit = 50;

  const handleTitleChange = (inputText: string) => {
    const wordCount = inputText.trim().split(/\s+/).length;

    if (wordCount <= wordLimits || inputText.trim() === "") {
      settitle(inputText);
    }
  };

  const handleDescriptionChange = (inputText: string) => {
    const wordCount = inputText.trim().split(/\s+/).length;

    if (wordCount <= wordLimit || inputText.trim() === "") {
      setdescription(inputText);
    }
  };

  return (
    <ScrollView>
      <View className="p-2">
        <TextFeild
          title={"Project Title"}
          placeholder={"Enter Project Title"}
          onChangeText={handleTitleChange}
          value={title}
        />
        <Text>
          {(title || "").trim().split(/\s+/).length}/{wordLimits} words
        </Text>
        <View>
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={styles.image} />
          )}
          <View className="flex">
            <TouchableOpacity
              className=" bg-black/20 p-3 rounded-xl mt-3"
              onPress={pickImage}
            >
              <Text className=" text-center">Pick an image from gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className=" bg-black/20 p-3 rounded-xl mt-3"
              onPress={takePhoto}
            >
              <Text className=" text-center">Take a photo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextFeild
          title={"Project Category"}
          placeholder={"Enter Project Category"}
          //(text: string) => settitle(text)
          onChangeText={(text: string) => setcategory(text)}
          value={pcategory}
        />
        <TextFeild
          title={"Project Links"}
          placeholder={"Enter Project Links"}
          onChangeText={(text: string) => setlink(text)}
          value={plink}
        />
        <TextFeild
          title={"Project Repository (Optional)"}
          placeholder={"Enter Project Repository (Optional)"}
          onChangeText={(text: string) => setprepository(text)}
          value={prepository}
        />
        <TextFeild
          title={"Project Description"}
          placeholder={"Enter Project Description"}
          onChangeText={handleDescriptionChange}
          value={description}
        />
        <Text>
          {description.trim().split(/\s+/).length}/{wordLimit} words
        </Text>
        {error && <Text style={{ color: "red" }}>{error}</Text>}
        <Text>Upload Progress: {uploadProgress}%</Text>
        <Text>Project Status:</Text>

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-black p-3 rounded-lg mt-4"
        >
          <Text className="text-white text-center font-semibold">
            {createPostMutation.isPending ? "Plz Wait.." : "Published"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
