import axios from '@/api/axios';
import { getToken } from '@/util';

const postAnswer = async (email: string | undefined, userAnswer: boolean[]) => {
  await axios.post(
    `/quiz/try?email=${email}`,
    {
      quiz1: userAnswer[0],
      quiz2: userAnswer[1],
      quiz3: userAnswer[2],
    },
    {
      headers: {
        'X-AUTH-TOKEN': getToken().authToken,
        'X-AUTH-REFRESH': getToken().refreshToken,
        'X-AUTH-GRANT': getToken().authGrant,
      },
    }
  );
};

export default postAnswer;
