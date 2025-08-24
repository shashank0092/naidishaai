import * as Keychain from 'react-native-keychain';

export const SaveInKeyChain = async (name: string, token: string) => {
  try {
    await Keychain.setGenericPassword(name, token);
    console.log('Token saved successfully!');
  } catch (error) {
    console.error('Error saving token to keychain:', error);
  }
};

export const GetKeyChain = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      return credentials.password;
    }
    return null;
  } catch (error) {
    console.error('Error getting token from keychain:', error);
    return null;
  }
};

export const DeleteKeyChain = async () => {
  try {
    await Keychain.resetGenericPassword();
    console.log('Token cleared successfully!');
  } catch (err) {
    console.error('Error clearing token from keychain:', err);
  }
};
