import { Meta, StoryObj } from "@storybook/react";

import { ShareBottomSheet } from "./ShareBottomSheet";

export default {
  title: "ShareBottomSheet",
  component: ShareBottomSheet,
} satisfies Meta<typeof ShareBottomSheet>;

export const Default: StoryObj<typeof ShareBottomSheet> = {
  decorators: [
    (Story) => (
      <div className="flex h-[800px] w-[600px] flex-col gap-4 bg-red-200">
        <Story />
      </div>
    ),
  ],
  args: {},
};
