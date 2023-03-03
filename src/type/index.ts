export interface IUser {
  nickname: string;
  level: number;
  email: string;
  refreshToken: string;
  answerTime: Date;
}

export interface IQuiz {
  id: number;
  title: string;
  commentary: string;
  ox: boolean;
  level: number;
  num: number;
}
