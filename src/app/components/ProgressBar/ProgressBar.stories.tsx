import type { Meta, StoryObj } from '@storybook/react';

import ProgressBar from './ProgressBar';

export default {
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

export const Default: StoryObj<typeof ProgressBar> = {
  args: {
    height: '4px',
    total: 3,
    value: 1,
  },
};
