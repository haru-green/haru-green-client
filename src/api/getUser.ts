import { AxiosResponse } from 'axios';

import axios from '@/api/axios';
import { getToken } from '@/util';

const getUser = async <T>(): Promise<T | null> => {
  const { data }: AxiosResponse<T> = await axios.get(`/user/get`, {
    headers: {
      'X-AUTH-TOKEN': getToken().authToken,
      'X-AUTH-REFRESH': getToken().refreshToken,
      'X-AUTH-GRANT': getToken().authGrant,
    },
  });
  return data;
};

export default getUser;
