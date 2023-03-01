/**
 * "문제 1. ----- " 형식으로 문제가 전달되고 하루에 3문제씩 전달되므로, 정규식이 아닌
 * 간편하게 slice 로 앞 부분을 잘라냈다.
 * */
export const parseQuiz = (str: string | undefined): string => {
  return str?.slice(5) || '';
};

/**
 * 같은 세션 내에서 새로고침 하더라도 user 정보를 유지하여야 api 를 정상적으로 호출할 수 있으므로
 * 세션스토리지에 user 정보를 저장하도록 하였다.
 * */
export const getSessionUser = () => {
  return JSON.parse(sessionStorage.getItem('user') as string);
};

/**
 * 크로스 도메인의 secure 쿠키 설정 이슈로 현재 쿠키를 서버에서 header 에 담아 보내주고,
 * 임시 해결책으로 클라이언트는 이를 쿠키에 직접 저장하고 있다.
 * */
export const getToken = () => {
  const splitedToken = document.cookie.split(';');
  const authToken = splitedToken[1].split('auth_token=')[1];
  const refreshToken = splitedToken[2].split('auth_refresh=')[1];
  const authGrant = splitedToken[0].split('auth_grant=')[1];
  return { authToken, refreshToken, authGrant };
};

/**
 * 해당 레벨의 퀴즈 풀이에 성공했을 때, 성공한 시점의 다음 날부터 다음 레벨의 퀴즈에 도전할 수 있다.
 * 가장 최근에 퀴즈 풀이에 성공한 날짜를 확인하여 그 날짜가 오늘 날짜가 아니라면 true 아니면 false 를 리턴한다.
 * */
export const wasSolvedToday = (lastSolvedDate: string | undefined) => {
  const now = new Date();
  const todayDate = String(now.getDate());
  return todayDate !== lastSolvedDate;
};
