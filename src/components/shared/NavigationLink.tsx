"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavigationLinkProps = {
  path: string;
  route: string;
};

export default function NavigationLink({ path, route }: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={cn(
        "text-[#09090B] hover:text-[#2f44b3] text-lg transition-colors",
        isActive && "text-[#415be7]  font-semibold"
      )}
    >
      {route}
    </Link>
  );
}
