import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
    <GestureHandlerRootView>
      <ThemeProvider value={theme}>
        <RootNavigator />
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const RootNavigator = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="login"
        options={{
          title: 'Login',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="owner"
        options={{
          title: 'Owner',
          headerShown: false,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="(home)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};
