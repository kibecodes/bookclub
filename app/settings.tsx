import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function Settings() {
  const router = useRouter();

  return (
    <View className="flex-1 p-4 pt-16 justify-start items-center">
      <Pressable
        className="flex-row px-4 w-full h-20 items-center justify-between shadow rounded-none"
        onPress={() => router.push('/profile')}>
        <View className="flex-row gap-3">
          <AntDesign name="user" size={28} color="black" />
          <Text className="text-2xl text-black dark:text-white">Profile</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </Pressable>

      <Pressable className="flex-row px-4 w-full h-20 items-center justify-between shadow rounded-none">
        <View className="flex-row gap-3">
          <FontAwesome name="bell-o" size={24} color="black" />
          <Text className="text-2xl text-black dark:text-white">
            Notification
          </Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </Pressable>
    </View>
  );
}
