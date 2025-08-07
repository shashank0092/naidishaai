import {
  MD3LightTheme as DefaultLightTheme,
  MD3DarkTheme as DefaultDarkTheme,
  configureFonts,
  MD3Theme,
} from 'react-native-paper';

const fontConfig = {
  fontFamily: 'Inter-Regular',
  headlineLarge: { fontFamily: 'Inter_28pt-Regular', fontSize: 32 },
  headlineMedium: { fontFamily: 'Inter_28pt-Regular', fontSize: 28 },
  headlineSmall: { fontFamily: 'Inter_28pt-Regular', fontSize: 24 },
  titleLarge: { fontFamily: 'Inter_28pt-Regular', fontSize: 22 },
  titleMedium: { fontFamily: 'Inter_28pt-Bold', fontSize: 16 },
  titleSmall: { fontFamily: 'Inter_28pt-SemiBold', fontSize: 14 },
  bodyLarge: { fontFamily: 'Inter_24pt-Regular', fontSize: 16 },
  bodyMedium: { fontFamily: 'Inter_24pt-Bold', fontSize: 14 },
  labelLarge: { fontFamily: 'Inter_18pt-Regular', fontSize: 14 },
  labelMedium: { fontFamily: 'Inter_18pt-Bold', fontSize: 12 },
  labelSmall: { fontFamily: 'Inter_18pt-Thin', fontSize: 11 },
};

export const lightTheme: MD3Theme = {
  ...DefaultLightTheme,
  roundness: 12,
  colors: {
    ...DefaultLightTheme.colors,
    primary: '#4A69FF',
    secondary: '#1B2B4E',
    background: '#F7F8FA',
    surface: '#FFFFFF',
    surfaceVariant: '#EAEBEE',
    onSurface: '#1B2B4E',
    primaryContainer: '#DDE2FF',
    onPrimaryContainer: '#00164D',
  },
  fonts: configureFonts({ config: fontConfig }),
};

export const darkTheme: MD3Theme = {
  ...DefaultDarkTheme,
  roundness: 12,
  colors: {
    ...DefaultDarkTheme.colors,
    primary: '#B6C4FF',
    secondary: '#AEC6FF',
    background: '#121212',
    surface: '#1E1E1E',
    surfaceVariant: '#44474F',
    onSurface: '#E3E2E6',
    primaryContainer: '#334F90',
    onPrimaryContainer: '#DDE2FF',
  },
  fonts: configureFonts({ config: fontConfig }),
};
