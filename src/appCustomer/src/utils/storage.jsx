import * as SecureStore from 'expo-secure-store';

export const saveSecurely = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await SecureStore.setItemAsync(key, jsonValue);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchSecurely = async (key) => {
  try {
    const jsonValue = await SecureStore.getItemAsync(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteSecurely = async (key) => SecureStore.deleteItemAsync(key);
