import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "destructive",
        "secondary",
        "ghost",
        "link",
      ],
    },
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50vh",
            height: "30vw",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 10px 0px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "destructive",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};
