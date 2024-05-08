import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { AuthContext } from "@/features/auth";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  auth: AuthContext;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="flex h-full justify-center gap-40">
        <div
          data-pc-layout
          className="hidden h-full w-80 gap-2 bg-white p-2 text-lg xl:flex"
        >
          가구고고
        </div>
        <div className="w-full max-w-[600px] bg-white">
          <Outlet />
        </div>
      </div>
      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}