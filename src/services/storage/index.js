import {MMKV} from 'react-native-mmkv';
export const storage = new MMKV();

export const setStorage = async (key, value) => {
  try {
    return storage.set(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};
export const getStorage = key => {
  try {
    storage.getString(key);
  } catch (e) {
    console.log(e);
  }
};
export const removeStorage = key => {
  try {
    storage.delete(key);
  } catch (e) {
    console.log(e);
  }
};
