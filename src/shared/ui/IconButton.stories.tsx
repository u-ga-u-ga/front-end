import type { Meta, StoryObj } from "@storybook/react";

import { Hamburger, Settings } from "./icon";
import { IconButton } from "./IconButton";

const meta = {
  title: "Example/Checkbox",
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HamburgerIconButton: Story = {
  args: {
    Icon: <Hamburger />,
  },
};

export const SettingsIconButton: Story = {
  args: {
    Icon: <Settings />,
  },
};
