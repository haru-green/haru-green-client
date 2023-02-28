import axios from '@/api/axios';

const postAnswer = async (email: string | undefined, userAnswer: boolean[]) => {
  const authToken = document.cookie.split(';')[1].split('auth_token=')[1];
  const refreshToken = document.cookie.split(';')[2].split('auth_refresh=')[1];
  const authGrant = document.cookie.split(';')[0].split('auth_grant=')[1];
  await axios.post(
    `/quiz/try?email=${email}`,
    {
      quiz1: userAnswer[0],
      quiz2: userAnswer[1],
      quiz3: userAnswer[2],
    },
    {
      headers: {
        'X-AUTH-TOKEN': authToken,
        'X-AUTH-REFRESH': refreshToken,
        'X-AUTH-GRANT': authGrant,
      },
    }
  );
};

export default postAnswer;
