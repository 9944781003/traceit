import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const baseURL =
  'https://60ba-2409-4072-8e98-35ae-ca5-ffee-f01a-8897.in.ngrok.io';
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
