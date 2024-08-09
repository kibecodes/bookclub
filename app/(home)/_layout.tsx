import { Stack } from 'expo-router';
import React from 'react';

export default function HomeNavigator() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home Screen',
          headerShown: false,
          headerTitleAlign: 'center',
        }}
      />
    </Stack>
  );
}
