import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const baseURL =
  'https://a7c7-2409-4072-8e98-35ae-849d-8a9c-aced-7195.in.ngrok.io';
export const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  console.log('from axiosInstace config - token is ' + token);
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  };
});
