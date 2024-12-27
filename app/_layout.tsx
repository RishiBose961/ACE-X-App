import React from "react";
import Appwarpping from "./(redux)/Appwarpping";
import { Provider } from "react-redux";
import { store } from "./(redux)/store";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./(service)/queryClient";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Platform } from "react-native";
export default function _layout() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Appwarpping />
          {Platform.OS === 'web' && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </Provider>
    </>
  );
}
