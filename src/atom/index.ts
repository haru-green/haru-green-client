import { atom } from 'recoil';

import { IUser } from '@/type';

export const userState = atom<IUser | null>({
  key: 'user',
  default: null,
});

export const answerState = atom<boolean[]>({
  key: 'answer',
  default: [],
});
