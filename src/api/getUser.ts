import { AxiosResponse } from 'axios';

import axios from '@/api/axios';

const getUser = async <T>(): Promise<T | null> => {
  const { data }: AxiosResponse<T> = await axios.get(`/user/get`, {
    headers: {
      'x-auth-refresh': document.cookie.split('auth_refresh=')[1],
    },
  });
  return data;
};

export default getUser;
