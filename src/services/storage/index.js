import {MMKV} from 'react-native-mmkv';
export const storage = new MMKV();

export const setStorage = (key, value) => {
  return storage.set(key, JSON.stringify(value));
};
export const getStorage = key => {
  return storage.getString(key);
};
export const removeStorage = key => {
  return storage.delete(key);
};
