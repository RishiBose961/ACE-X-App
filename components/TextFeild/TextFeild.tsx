import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

interface TextFeildProps {
  onChangeText: any;
  title: string;
  value: any;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: any;
  autoCapitalize?: any;
}
export default function TextFeild({
  onChangeText,
  value,
  title,
  placeholder,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
}: TextFeildProps) {
  return (
    <View>
      <Text className="mb-2 font-bold">{title}</Text>
      <TextInput
        className="bg-gray-100 px-4 ps-3 py-2 rounded-lg"
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
