import type { Meta, StoryObj } from "@storybook/react";

import { MobileNumberInput } from "./MobileNumberInput";

const meta: Meta<typeof MobileNumberInput> = {
  component: MobileNumberInput,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {},
} satisfies Story;
