import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { Auth0Provider } from 'react-native-auth0';

const Main = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Auth0Provider
          domain={'dev-vqn0jgptt0m34bjk.us.auth0.com'}
          clientId={'JgRv6p9qLH7iaIwymWYGETlo02sF9we3'}
        >
          <App />
        </Auth0Provider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
