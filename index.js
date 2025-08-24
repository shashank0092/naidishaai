import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { Auth0Provider } from 'react-native-auth0';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './src/store/app';

const queryClient = new QueryClient();

const Main = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <Auth0Provider
            domain={'dev-vqn0jgptt0m34bjk.us.auth0.com'}
            clientId={'JgRv6p9qLH7iaIwymWYGETlo02sF9we3'}
          >
            <PaperProvider>
              <App />
            </PaperProvider>
          </Auth0Provider>
        </QueryClientProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
