import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { StatusBar } from 'react-native';

import { useThemeConfig } from '@/constants/use-theme';

import '../global.css';

export default function RootLayout() {
  const theme = useThemeConfig();
  const { colorScheme } = useColorScheme();
  const [loaded, error] = useFonts({
    'Praise-Regular': require('../assets/fonts/Praise-Regular.ttf'),
    'ChakraPetch-Regular': require('../assets/fonts/ChakraPetch-Regular.ttf'),
  });

  return (
    <ThemeProvider value={theme}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="sign-in"
          options={{
            title: 'Sign In',
            headerShown: false,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            title: 'Login',
            headerShown: false,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="settings"
          options={{
            headerShown: false,
            title: 'Settings',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="book-details"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="owner"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
    </ThemeProvider>
  );
}
