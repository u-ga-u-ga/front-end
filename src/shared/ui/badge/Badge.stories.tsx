import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
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

export const PrimarySolid = {
  args: {
    color: "primary",
    type: "solid",
    label: "label",
  },
} satisfies Story;

export const PrimaryOutline = {
  args: {
    color: "primary",
    type: "outline",
    label: "label",
  },
} satisfies Story;

export const GraySolid = {
  args: {
    color: "gray",
    type: "solid",
    label: "label",
  },
} satisfies Story;

export const GrayOutline = {
  args: {
    color: "gray",
    type: "outline",
    label: "label",
  },
} satisfies Story;
