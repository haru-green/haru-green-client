export interface IUser {
  nickname: string;
  level: number;
  email: string;
  refreshToken: string;
  answerTime: string;
}

export interface IQuiz {
  id: number;
  title: string;
  commentary: string;
  ox: boolean;
  level: number;
  num: number;
}
