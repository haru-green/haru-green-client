import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

export default {
  component: Button,
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    text: 'Button',
    textColor: 'black',
  },
};

export const 시작하기_활성화_전: StoryObj<typeof Button> = {
  args: {
    borderRadius: '50px',
    className: 'py-[13px]',
    text: '시작하기',
    textColor: '#a0a0a0',
    textSize: '18px',
  },
};

export const 시작하기_활성화_후: StoryObj<typeof Button> = {
  args: {
    borderRadius: '50px',
    className: 'py-[13px]',
    text: '시작하기',
    textColor: '#34aa70',
    textSize: '18px',
  },
};

export const 오늘의_퀴즈_풀러가기: StoryObj<typeof Button> = {
  args: {
    borderColor: '#34aa70',
    borderRadius: '50px',
    className: 'py-[13px]',
    text: '오늘의 퀴즈 풀러가기',
    textColor: '#34aa70',
    textSize: '16px',
    variant: 'outlined',
  },
};

export const 다음_활성화_전: StoryObj<typeof Button> = {
  args: {
    borderRadius: '10px',
    className: 'py-[10px]',
    text: '다음',
    textColor: '#fff',
    variant: 'disabled',
  },
};

export const 다음_활성화_후: StoryObj<typeof Button> = {
  args: {
    borderRadius: '10px',
    className: 'py-[10px]',
    text: '다음',
    textColor: '#fff',
    variant: 'active',
  },
};

export const 정답_보러가기: StoryObj<typeof Button> = {
  args: {
    borderColor: '#34aa70',
    borderRadius: '50px',
    className: 'py-[10px]',
    text: '정답 보러가기',
    textColor: '#34aa70',
    variant: 'outlined',
  },
};

export const O_X_활성화_전: StoryObj<typeof Button> = {
  args: {
    borderColor: '#a0a0a0',
    borderRadius: '50px',
    className: 'py-[13px]',
    text: 'O',
    variant: 'outlined',
  },
};

export const O_X_활성화_후: StoryObj<typeof Button> = {
  args: {
    borderColor: '#34aa70',
    borderRadius: '50px',
    className: 'py-[13px]',
    text: 'X',
    variant: 'outlined',
  },
};
