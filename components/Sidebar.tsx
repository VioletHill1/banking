"use client";

import { sidebarLinks } from "@/constans";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex mb-12 cursor-pointer items-center gap-2">
          <h1 className="sidebar-logo">Logo</h1>
        </Link>
        {sidebarLinks.map((i) => {
          const isActive =
            pathname === i.route || pathname.startsWith(`${i.route}`);
          return (
            <Link
              href={i.route}
              key={i.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <p
                className={cn("sidebar-label", {
                  "!text-white": isActive,
                })}
              >
                {i.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      FOOTER
    </section>
  );
};

export default Sidebar;
