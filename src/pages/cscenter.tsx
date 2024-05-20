import { createFileRoute, Outlet } from "@tanstack/react-router";

import PageFooter from "@/widgets/footer";
import CSCenterPageHeader from "@/widgets/headers/cscenterPageHeader/";

export const Route = createFileRoute("/cscenter")({
  component: CSCenterLayoutComponent,
});

function CSCenterLayoutComponent() {
  return (
    <div className="relative h-full w-full overflow-y-auto scrollbar-hide">
      <CSCenterPageHeader />
      <Outlet />
      <PageFooter />
    </div>
  );
}
