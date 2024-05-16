import { createFileRoute } from "@tanstack/react-router";

import { SignupPage } from "./SignupPage";

export const Route = createFileRoute("/Signup/")({
  component: SignupPage,
});
