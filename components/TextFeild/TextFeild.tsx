import React from "react";
import { Text, TextInput, View } from "react-native";

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
      <Text className="mb-2 mt-2 font-bold">{title}</Text>
      <TextInput
        className="bg-gray-300 px-4 ps-3 py-2 rounded-lg mt-3"
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

