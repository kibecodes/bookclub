import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-paper';

import { Profile } from '@/components/profile-component';

import { DataProps } from './home';

const Books: DataProps = [
  {
    id: '1',
    image: require('../assets/images/books/Year_of_liberty.jpg'),
    title: 'The Year of Liberty',
    author: 'Bill',
  },
];

export default function Owner() {
  return (
    <View className="flex-1 w-full h-full items-start justify-start px-2 pt-16">
      <View className="flex-row w-full items-start justify-between px-2 bg-gray-200">
        <View className="flex-col">
          <Text className="text-2xl font-bold">Owner</Text>
          <Text className="text-red-500">Offline</Text>
        </View>
        <Profile />
      </View>
      <Text className="font-praise text-6xl">Meet Khalifa</Text>

      <Text className="font-chakra text-2xl text-green-500">Available</Text>

      <View className="flex-1 flex-col w-full py-2 bg-teal-200 rounded-xl">
        <FlatList
          data={Books}
          renderItem={({ item }) => {
            return (
              <View className="flex-1 justify-between h-full w-full mx-2 rounded-xl">
                <Card className="h-fit w-36">
                  <Card.Cover source={item.image} resizeMode="contain" />
                </Card>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
        <Text className="font-praise text-2xl">Note from Book Owner</Text>
        <Text className="font-praise text-2xl">Borrow from:</Text>
        <Text className="font-praise text-2xl">Return from:</Text>
      </View>
    </View>
  );
}
