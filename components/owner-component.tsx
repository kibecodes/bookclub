import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Image } from 'react-native';

export const Owner = () => {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push('/owner')}>
      <Image
        className="w-20 h-20 rounded-full"
        source={require('../assets/images/DOOM.jpg')}
        resizeMode="contain"
      />
    </Pressable>
  );
};
