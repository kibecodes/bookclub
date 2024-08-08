import { Link, useRouter } from 'expo-router';
import * as React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function Login() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-start items-start p-4 pt-16">
      <View className="pt-5">
        <Text className="text-3xl font-bold text-black dark:text-white">
          Login
        </Text>
      </View>

      <View className="flex-col justify-between items-center w-full h-fit">
        <View className="flex-col w-full p-2">
          <Text className="text-black dark:text-white">Email</Text>
          <TextInput className="w-full h-20 shadow"></TextInput>
        </View>

        <View className="flex-col w-full p-2">
          <Text className="text-black dark:text-white">Password</Text>
          <TextInput className="w-full h-20 shadow"></TextInput>
        </View>

        <Pressable
          className="w-44 h-20 rounded-full border items-center justify-center p-2"
          onPress={() => router.navigate('/settings')}>
          <Text className="text-2xl font-bold text-black dark:text-white">
            Login
          </Text>
        </Pressable>
      </View>

      <Link href={'/home/home'}>
        <Text className="text-2xl text-blue-500">Home</Text>
      </Link>
    </View>
  );
}
