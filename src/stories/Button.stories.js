// Import necessary dependencies and styles
import React from 'react';
import { Button } from 'sys-react-lib';
import 'sys-react-lib/dist/index.css';

// Export the default story object
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    label: 'Accent Button',
    variant: 'accent',
  },
};

export const Secondary = {
  args: {
    label: 'Default Button',
    variant: 'default',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Button',
    variant: 'disabled',
    disabled: true,
  },
};

// You can also add a story with dynamic args based on user input
export const Dynamic = (args) => <Button {...args} />;
Dynamic.args = {
  label: 'Dynamic Button',
  variant: 'primary',
};
