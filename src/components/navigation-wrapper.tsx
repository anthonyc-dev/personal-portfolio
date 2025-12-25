"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "./navigation";

export function NavigationWrapper() {
  const pathname = usePathname();
  const isProjectsRoute = pathname?.startsWith("/projects");

  if (isProjectsRoute) {
    return null;
  }

  return <Navigation />;
}
