import axios from '@/api/axios';
import { getToken } from '@/util';

const getQuizAnswer = async (email: string | undefined) => {
  const { data } = await axios.get(`/quiz/answer?email=${email}`, {
    headers: {
      'X-AUTH-TOKEN': getToken().authToken,
      'X-AUTH-REFRESH': getToken().refreshToken,
      'X-AUTH-GRANT': getToken().authGrant,
    },
  });
  return data;
};

export default getQuizAnswer;
