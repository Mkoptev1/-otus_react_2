import * as React from "react"
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, IButtonProps } from "./Button"
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs],
  } as Meta;

const Template: Story<IButtonProps> = (args) => <Button label={text('Button Text', 'hello')} />;

export const Default = Template.bind({});
Default.args = {
    label: 'green'
};