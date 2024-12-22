import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextFeild from "@/components/TextFeild/TextFeild";

export default function createPost() {
  return (
    <View className="p-2">
      <TextFeild
        title={"Project Title"}
        placeholder={"Enter Project Title"}
        onChangeText={undefined}
        value={undefined}
      />
      <TextFeild
        title={"Project Category"}
        placeholder={"Enter Project Category"}
        onChangeText={undefined}
        value={undefined}
      />
      <TextFeild
        title={"Project Image"}
        placeholder={"Enter Project Image"}
        onChangeText={undefined}
        value={undefined}
      />
      <TextFeild
        title={"Project Links"}
        placeholder={"Enter Project Links"}
        onChangeText={undefined}
        value={undefined}
      />
      <TextFeild
        title={"Project Repository (Optional)"}
        placeholder={"Enter Project Repository (Optional)"}
        onChangeText={undefined}
        value={undefined}
      />
      <TextFeild
        title={"Project Description"}
        placeholder={"Enter Project Description"}
        onChangeText={undefined}
        value={undefined}
      />

      <Text>Project Status:</Text>
      <View
        style={{ flexDirection: "row", justifyContent: "space-between" }}
        className="mt-2"
      >
        <Button title="View" />
        <Button title="Published" onPress={() => Alert.alert('Button with adjusted color pressed')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
