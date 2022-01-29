import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const baseURL =
  'http://9bf4-2401-4900-3387-a738-6826-1790-1ed2-3337.in.ngrok.io';
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
