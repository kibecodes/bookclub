import type { Theme } from '@react-navigation/native';
import {
  DarkTheme as _DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'nativewind';

import colors from './colors';

const DarkTheme: Theme = {
  ..._DarkTheme,
  colors: {
    ..._DarkTheme.colors,
    primary: colors.background[100],
    background: colors.background[100],
    card: colors.background[100],
  },
};

const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.card[100],
    background: colors.white,
    card: colors.card[200],
    text: colors.black,
  },
};

export function useThemeConfig() {
  const { colorScheme } = useColorScheme();

  if (colorScheme === 'dark') return DarkTheme;

  return LightTheme;
}
