import * as SecureStore from 'expo-secure-store';

const key = 'authToken';

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log('Error', error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('Error', error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('Error removing the auth Token', error);
  }
};

export default {
  storeToken,
  getToken,
  removeToken,
};
