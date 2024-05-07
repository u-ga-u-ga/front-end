import { Meta, StoryObj } from "@storybook/react";

import { ImageUploadButton } from "./ImageUploadButton";

export default {
  component: ImageUploadButton,
} satisfies Meta<typeof ImageUploadButton>;

export const Basic = {
  args: {
    imageIndex: 1,
    totalNumImages: 10,
  },
} satisfies StoryObj<Meta<typeof ImageUploadButton>>;
