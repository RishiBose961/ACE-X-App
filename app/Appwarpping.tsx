import { Stack } from 'expo-router'
import React from 'react'

export default function Appwarpping() {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown:false}}/>     
        <Stack.Screen name='(tabs)' options={{headerShown:false}}/>    
        <Stack.Screen name='(auths)' options={{headerShown:false}}/>   
    </Stack>
  )
}

