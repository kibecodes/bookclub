import { Link, useRouter } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function Profile() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-start items-center pt-16">
      <Text>Profile</Text>
      <Link href={'/home/home'}>
        <Text>Go Home</Text>
      </Link>
    </View>
  );
}
