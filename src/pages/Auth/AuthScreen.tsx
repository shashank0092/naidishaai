/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useGlobalStyles } from '../../config/globalStyles';
import GoogleIcon from '../../assets/Google.svg';
import { useAuth0 } from 'react-native-auth0';

const AuthScreen = () => {
  const globalStyles = useGlobalStyles();
  const { authorize, user } = useAuth0();
  console.log(user, 'this is user');
  const onPress = async () => {
    try {
      await authorize();
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
          <GoogleIcon width={22} height={22} />
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
