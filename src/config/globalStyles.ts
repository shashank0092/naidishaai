import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { MD3Theme } from 'react-native-paper';

const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
};

export const useGlobalStyles = () => {
  const theme = useTheme() as MD3Theme;

  const styles = StyleSheet.create({
    h1: { ...theme.fonts.headlineLarge, color: theme.colors.onBackground },
    h2: { ...theme.fonts.headlineMedium, color: theme.colors.onBackground },
    h3: { ...theme.fonts.headlineSmall, color: theme.colors.onSurface },
    title: { ...theme.fonts.titleLarge, color: theme.colors.onSurface },
    subtitle: {
      ...theme.fonts.titleMedium,
      color: theme.colors.onSurfaceVariant,
    },
    body: { ...theme.fonts.bodyLarge, color: theme.colors.onSurface },
    caption: {
      ...theme.fonts.labelMedium,
      color: theme.colors.onSurfaceVariant,
    },

    textPrimary: { color: theme.colors.primary },
    textSecondary: { color: theme.colors.secondary },
    textError: { color: theme.colors.error },

    screenContainer: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: SPACING.md,
    },
    centeredContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      padding: SPACING.md,
    },
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.roundness,
      padding: SPACING.md,

      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
    },

    mt_sm: { marginTop: SPACING.sm },
    mt_md: { marginTop: SPACING.md },
    mt_lg: { marginTop: SPACING.lg },
    mb_md: { marginBottom: SPACING.md },

    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    flexRowSpaceBetween: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

  return styles;
};
