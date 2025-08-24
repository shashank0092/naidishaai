/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useGlobalStyles } from '../../config/globalStyles';
import GoogleIcon from '../../assets/Google.svg';
import { useAuth0 } from 'react-native-auth0';
import { useCreateUser } from './handlers';
import { SaveInKeyChain } from '../../utils/keychain';
import { useAppSelector } from '../../store/hooks';
import { ActivityIndicator } from 'react-native-paper';

const AuthScreen = () => {
  const globalStyles = useGlobalStyles();
  const AuthLoader = useAppSelector((state) => state.auth.loading);
  const User = useAppSelector((state) => state.auth.userProfile);
  console.log(User, 'this is logged in user');
  const { authorize, user, getCredentials } = useAuth0();
  const { mutate: CreateUser } = useCreateUser();

  const onPress = async () => {
    try {
      await authorize({
        audience: 'https://quickstarts/api',
      });
      const credentials = await getCredentials();
      const User = user;
      if (User && credentials) {
        await SaveInKeyChain('userToken', credentials.accessToken);
        CreateUser({
          email: User.email || '',
          name: User.name || '',
          picture: User.picture,
        });
      }
      console.log(credentials, 'this is all creadtional');
    } catch (err) {
      console.log(err, 'this is an error while login');
    }
  };
  return (
    <View style={[globalStyles.screenContainer]}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/LoginImage.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.googleButton} onPress={() => onPress()}>
          <GoogleIcon
            width={22}
            height={22}
            style={{ display: AuthLoader ? 'none' : 'flex' }}
          />
          <ActivityIndicator
            color="red"
            style={{ display: AuthLoader ? 'flex' : 'none' }}
          />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <Text style={[globalStyles.caption, styles.footerText]}>
          By continuing, you agree to our Terms of Service.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    width: '90%',
    justifyContent: 'center',

    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  googleButtonText: {
    color: '#1F2937',
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter_28pt-SemiBold',
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
  },
});

export default AuthScreen;
