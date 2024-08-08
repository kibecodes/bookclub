import { useRouter } from 'expo-router';
import * as React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function SignIn() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-start items-start p-4 pt-16">
      <View className="pt-5">
        <Text className="text-3xl font-bold text-black dark:text-white">
          SignUp
        </Text>
      </View>

      <View className="flex-col justify-between items-center w-full h-fit">
        <View className="flex-col w-full p-2">
          <Text className="text-black dark:text-white">Full name</Text>
          <TextInput className="w-full h-20 shadow"></TextInput>
        </View>

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
          onPress={() => router.navigate('/login')}>
          <Text className="text-2xl font-bold text-black dark:text-white">
            Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
