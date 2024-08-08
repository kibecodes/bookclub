import type { ImageSourcePropType } from 'react-native';

export type DataProps = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  author: string;
}[];

export type StackParamList = {
  BookDetail: { image: ImageSourcePropType | undefined; author: string };
  Home: undefined;
  Login: undefined;
  Owner: undefined;
  Profile: undefined;
  Settings: undefined;
  SignIn: undefined;
};
