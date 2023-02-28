import { AxiosResponse } from 'axios';

import axios from '@/api/axios';
import { getToken } from '@/util';

const getQuiz = async <T>(email: string | undefined): Promise<T | null> => {
  const { data }: AxiosResponse<T> = await axios.get(`/quiz?email=${email}`, {
    headers: {
      'X-AUTH-TOKEN': getToken().authToken,
      'X-AUTH-REFRESH': getToken().refreshToken,
      'X-AUTH-GRANT': getToken().authGrant,
    },
  });
  return data;
};

export default getQuiz;
