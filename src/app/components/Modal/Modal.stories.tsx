import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

export default {
  component: Modal,
} as Meta<typeof Modal>;

export const Default: StoryObj<typeof Modal> = {
  args: {},
};
