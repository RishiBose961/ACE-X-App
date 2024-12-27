import { Stack, useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './authSlice';
import { AppDispatch } from './store';

export default function Appwarpping() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { isAuthenticated, isLoading, user } = useSelector(
    (state: {
      auth: { isAuthenticated: boolean; isLoading: boolean; user: any };
    }) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser()); 
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        router.replace("/(tabs)");
      } else {
        router.replace("/(auths)/login"); 
      }
    }
  }, [isAuthenticated, isLoading, router]);

  // Optionally return null while the authentication state is loading
  if (isLoading) return null;
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown:false}}/>     
        <Stack.Screen name='(tabs)' options={{headerShown:false}}/>    
        <Stack.Screen name='(auths)' options={{headerShown:false}}/>   
    </Stack>
  )
}

