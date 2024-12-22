import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextFeild from '@/components/TextFeild/TextFeild'

export default function login() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
    <StatusBar/>
    <View className="flex-1 justify-center px-8">
      <View className="bg-white p-8 rounded-2xl shadow-md">
        <Text className="text-3xl font-bold mb-6 text-center text-gray-800">Login</Text>
        <View className="space-y-4">
          <View>
            <TextFeild
              title={"Email"}
              placeholder={"Enter your email"}
              keyboardType={"email-address"}
              onChangeText={undefined}
              value={undefined}
              autoCapitalize="none"
            />
          </View>
          <View className='mt-5'>
            <TextFeild
              title={"Password"}
              placeholder={"Enter your password"}
              onChangeText={undefined}
              value={undefined}
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-lg mt-4"
          >
            <Text className="text-white text-center font-semibold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({})