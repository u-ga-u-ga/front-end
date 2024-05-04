import { RouterProvider } from "@tanstack/react-router";

import useAuth from "@/features/auth";

import { router } from "./main";

export default function AppRouter() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}
