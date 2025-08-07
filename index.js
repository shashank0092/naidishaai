import { AppRegistry, useColorScheme } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { darkTheme, lightTheme } from './src/config/theme';

const Main = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
