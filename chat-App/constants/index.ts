import { Platform } from 'react-native';

export const API_URL =
  Platform.OS === 'android'
    ? 'http://192.168.0.101:3000'
    : 'http://localhost:3000';
