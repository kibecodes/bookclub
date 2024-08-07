import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { Card } from 'react-native-paper';

import { Owner } from '@/components/owner-component';
import { Profile } from '@/components/profile-component';

export type DataProps = {
  id: string;
  image: string;
  title: string;
  author: string;
}[];

const DATA: DataProps = [
  {
    id: '1',
    image: require('../assets/images/books/Year_of_liberty.jpg'),
    title: 'The Year of Liberty',
    author: 'Bill',
  },
  {
    id: '2',
    image: require('../assets/images/books/1918.jpg'),
    title: '1918',
    author: 'Mike',
  },
  {
    id: '3',
    image: require('../assets/images/books/1989.jpg'),
    title: '1989',
    author: 'Leon',
  },
  {
    id: '4',
    image: require('../assets/images/books/eric.jpg'),
    title: 'The Age of Revolution',
    author: 'Soldier Boy',
  },
  {
    id: '5',
    image: require('../assets/images/books/empire.jpg'),
    title: 'The Age of Empire',
    author: 'Butcher',
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <View className="flex-1 w-full h-full items-start justify-start px-2 pt-16">
      <View className="flex-row w-full items-start justify-between px-2 bg-gray-200">
        <View className="flex-col">
          <Text className="text-2xl font-bold">Account</Text>
          <Text className="text-green-500">Online</Text>
        </View>
        <Profile />
      </View>
      <Text className="font-praise text-6xl">Hello Sofia</Text>

      <View className="h-60 py-2 bg-teal-200 rounded-xl">
        <FlatList
          data={DATA}
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
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View className="flex-1 w-full px-2">
        <FlatList
          contentContainerStyle={{
            width: 'auto',
            height: 'auto',
          }}
          data={DATA}
          renderItem={({ item }) => {
            return (
              <Pressable
                className="flex-1 flex-col h-full w-full my-2 bg-slate-300 rounded-xl"
                onPress={() => router.push('/book-details')}>
                <View className="flex-1 flex-row p-2 gap-2">
                  <Card className="h-fit w-44">
                    <Card.Cover source={item.image} resizeMode="contain" />
                  </Card>
                  <View className="flex-1 justify-start items-end pt-2 pr-2 rounded-xl">
                    <Owner />
                    <Text className="text-center pr-4 pt-2">Owner</Text>
                    <AntDesign
                      name="staro"
                      size={32}
                      color="black"
                      className="pt-2 pr-4"
                    />
                    <Text className="pt-2 pr-4">Rating</Text>
                  </View>
                </View>
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
