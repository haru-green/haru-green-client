export const parseQuiz = (str: string | undefined): string => {
  return str?.slice(5) || '';
};

export const getSessionUser = () => {
  return JSON.parse(sessionStorage.getItem('user') as string);
};

export const getToken = () => {
  const splitedToken = document.cookie.split(';');
  const authToken = splitedToken[1].split('auth_token=')[1];
  const refreshToken = splitedToken[2].split('auth_refresh=')[1];
  const authGrant = splitedToken[0].split('auth_grant=')[1];
  return { authToken, refreshToken, authGrant };
};
