/* eslint-disable @typescript-eslint/restrict-template-expressions */
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

import { DataProps } from '@/types/navigation';

// interface BookProps {
//   book: {
//     name: string,
//     photos: [string],
//     author: string,
//     isAvailable: boolean,
//   }
// }
interface BookProps {
  book: {
    id: string;
    title: string;
    image: ImageSourcePropType;
    author: string;
  };
}

export const BookDetails = ({ book }: BookProps) => {
  const {
    id = '1',
    title = '1918 A Very British Victory',
    image = require('@/assets/images/books/1918.jpg'),
    author = 'Peter Hart',
  } = book;
  // const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-start items-center px-2 pt-16">
      <View className="flex-col w-full h-full pt-0 justify-start items-center">
        <View className="flex-row w-full">
          <SimpleLineIcons name="arrow-left" size={24} color="black" />
        </View>
        <Text className="font-bold text-2xl">Book Details</Text>
        <Text className="font-bold text-2xl">Book Title: {title}</Text>
        <Text className="font-bold text-2xl">Book Author: {author}</Text>

        <View className="flex-1 flex-row justify-between w-full bg-teal-200 p-2 pr-0">
          <View className="h-3/4 w-80 bg-slate-500">
            <Image className="h-full w-full rounded-xl" source={image} />
          </View>
          <View className="flex-col h-64 w-fit p-4 justify-between items-center pt-4 ">
            <FontAwesome name="heart-o" size={28} color="black" />
            <AntDesign name="shoppingcart" size={28} color="black" />
            <FontAwesome5 name="bookmark" size={28} color="black" />
            <FontAwesome name="book" size={28} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};
